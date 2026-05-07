"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Flame, Info, Sparkles, X } from "lucide-react";
import { Exercise, StudentProfile, WorkoutCategory, getInactivityMessage, getRecommendedWorkout, workoutCategories, workouts } from "../lib/workouts";

export function TrainingExperience() {
  const [category, setCategory] = useState<WorkoutCategory>("Peito");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [history, setHistory] = useState<WorkoutCategory[]>([]);
  const [lastCheckIn, setLastCheckIn] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("supremaStudentProfile");
      const savedHistory = localStorage.getItem("supremaWorkoutHistory");
      const savedCheckIn = localStorage.getItem("supremaLastCheckIn");
      if (savedProfile) setProfile(JSON.parse(savedProfile));
      if (savedHistory) setHistory(JSON.parse(savedHistory));
      if (savedCheckIn) setLastCheckIn(savedCheckIn);
    } catch {}
  }, []);

  const plan = workouts[category];
  const completed = plan.exercises.filter((ex) => done[ex.name]).length;
  const progress = Math.round((completed / plan.exercises.length) * 100);
  const recommended = useMemo(() => getRecommendedWorkout(profile, history), [profile, history]);
  const inactivity = getInactivityMessage(lastCheckIn);
  const recentlySame = history.slice(-2).includes(category);

  function markExercise(name: string) {
    setDone((value) => ({ ...value, [name]: !value[name] }));
  }

  function finishWorkout() {
    const nextHistory = [...history, category].slice(-12);
    setHistory(nextHistory);
    setLastCheckIn(new Date().toISOString());
    localStorage.setItem("supremaWorkoutHistory", JSON.stringify(nextHistory));
    localStorage.setItem("supremaLastCheckIn", new Date().toISOString());
    setDone({});
    alert("Treino registrado com sucesso. Excelente trabalho!");
  }

  return (
    <>
      <div className="section-title-row">
        <div>
          <span className="eyebrow">Seu treino inteligente</span>
          <h1 className="page-title">Treino de hoje</h1>
          <p className="muted">Escolha o grupo muscular e siga a sequência orientada.</p>
        </div>
      </div>

      <div className="pill-row" aria-label="Categorias de treino">
        {workoutCategories.map((item) => (
          <button key={item} className={`pill ${item === category ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>

      <div className="alert-card">
        <AlertTriangle color="var(--orange)" />
        <div>
          <strong>Antes de começar: aqueça.</strong>
          <p>{plan.warmup}</p>
        </div>
      </div>

      <div className="trainer-message">
        <Sparkles color="var(--orange)" />
        <div>
          <strong>Personal SUPREMA FIT</strong>
          <p>{inactivity}</p>
        </div>
      </div>

      <div className="recommend-card">
        <span className="eyebrow">Sugestão inteligente</span>
        <h3>Próximo treino recomendado: <span className="orange">{recommended}</span></h3>
        <p className="muted">Baseado no último treino realizado, objetivo do aluno e necessidade de recuperação muscular.</p>
        {recentlySame && <p className="orange"><Info size={14} /> Você treinou esse grupo recentemente. Considere alternar para melhorar recuperação.</p>}
      </div>

      <section className="workout-summary">
        <div className="summary-grid">
          <div>
            <span className="muted">Divisão</span>
            <h3>{plan.category}</h3>
          </div>
          <div>
            <span className="muted">Objetivo</span>
            <h3>{plan.objective}</h3>
          </div>
          <div className="progress-ring" style={{ ["--p" as any]: progress }}>
            <span>{progress}%</span>
          </div>
        </div>
      </section>

      <div className="tabs">
        <button className="tab active">Exercícios</button>
        <button className="tab">Aquecimento</button>
      </div>

      {plan.exercises.map((exercise, index) => (
        <ExerciseEquipmentCard
          key={exercise.name}
          index={index + 1}
          exercise={exercise}
          done={!!done[exercise.name]}
          onDone={() => markExercise(exercise.name)}
          onInstructions={() => setSelected(exercise)}
        />
      ))}

      <div className="metric-grid">
        <div className="metric-mini"><small>Duração</small><b>60 min</b></div>
        <div className="metric-mini"><small>Volume</small><b>18.240 kg</b></div>
        <div className="metric-mini"><small>Calorias</small><b>560 kcal</b></div>
      </div>

      <button className="primary-btn full" onClick={finishWorkout}><CheckCircle2 size={18} /> Finalizar e registrar treino</button>
      <p className="disclaimer">As recomendações são orientativas e devem ser validadas por um profissional de Educação Física, especialmente em caso de dor, lesão ou condição médica.</p>

      {selected && <ExerciseInstructionModal exercise={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function ExerciseEquipmentCard({ index, exercise, done, onDone, onInstructions }: { index: number; exercise: Exercise; done: boolean; onDone: () => void; onInstructions: () => void }) {
  return (
    <article className="exercise-card">
      <div className="equipment-img" aria-label={`Imagem do equipamento: ${exercise.equipment}`} />
      <div className="exercise-content">
        <div className="exercise-top">
          <h3 className="exercise-title"><span className="orange">{index}.</span> {exercise.name}</h3>
          {done && <CheckCircle2 color="var(--green)" size={20} />}
        </div>
        <div className="exercise-tags">
          <span className="tag orange-tag">{exercise.equipment}</span>
          <span className="tag">{exercise.muscle}</span>
          <span className="tag">{exercise.sets}</span>
          <span className="tag">Descanso {exercise.rest}</span>
          <span className="tag">{exercise.level}</span>
        </div>
        <p className="muted" style={{ fontSize: 13, lineHeight: 1.45 }}>{exercise.orientation}</p>
        <div className="exercise-actions">
          <button className="tiny-btn" onClick={onInstructions}>Ver instruções</button>
          <button className={`tiny-btn ${done ? "done" : ""}`} onClick={onDone}>{done ? "Feito" : "Marcar como feito"}</button>
        </div>
      </div>
    </article>
  );
}

function ExerciseInstructionModal({ exercise, onClose }: { exercise: Exercise; onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <div className="modal-top">
          <h3>{exercise.name}</h3>
          <button className="icon-button" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="equipment-img" style={{ minHeight: 180, marginBottom: 14 }} />
        <div className="exercise-tags">
          <span className="tag orange-tag">{exercise.equipment}</span>
          <span className="tag">{exercise.muscle}</span>
          <span className="tag">{exercise.sets}</span>
          <span className="tag">{exercise.rest}</span>
        </div>
        <p>{exercise.orientation}</p>
        <div className="alert-card">
          <Flame color="var(--orange)" />
          <div>
            <strong>Dica técnica</strong>
            <p>Comece com carga leve, registre o peso usado e aumente apenas quando mantiver execução limpa.</p>
          </div>
        </div>
        <button className="primary-btn full" onClick={onClose}>Entendi</button>
      </div>
    </div>
  );
}
