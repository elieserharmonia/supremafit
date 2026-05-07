"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Droplets, Flame, Info, Salad, Sparkles, X } from "lucide-react";
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
  const guidance = getGoalGuidance(profile, category);

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
          <p className="muted">Escolha o grupo muscular e siga a sequência orientada pelo personal digital.</p>
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

      <div className="hydration-strip">
        <Droplets color="var(--orange)" />
        <div>
          <strong>Hidratação obrigatória</strong>
          <small>Tenha água por perto. Beba antes do treino, em pequenos goles durante e reforce depois.</small>
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

      <section className="nutrition-card card">
        <div className="nutrition-head">
          <Salad color="var(--orange)" />
          <div>
            <strong>{guidance.title}</strong>
            <p>{guidance.text}</p>
          </div>
        </div>
        <ul>
          {guidance.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
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
      <p className="disclaimer">As recomendações são orientativas e devem ser validadas por um profissional de Educação Física. Sugestões alimentares são educativas e não substituem consulta com nutricionista, principalmente em casos de obesidade, doença, dor, lesão ou uso de medicamentos.</p>

      {selected && <ExerciseInstructionModal exercise={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function ExerciseEquipmentCard({ index, exercise, done, onDone, onInstructions }: { index: number; exercise: Exercise; done: boolean; onDone: () => void; onInstructions: () => void }) {
  return (
    <article className="exercise-card">
      <EquipmentIllustration exercise={exercise} />
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
        <div className="equipment-steps">
          <small>Como usar: ajuste o equipamento, mantenha postura firme e execute com controle.</small>
        </div>
        <div className="exercise-actions">
          <button className="tiny-btn" onClick={onInstructions}>Ver instruções</button>
          <button className={`tiny-btn ${done ? "done" : ""}`} onClick={onDone}>{done ? "Feito" : "Marcar como feito"}</button>
        </div>
      </div>
    </article>
  );
}

function ExerciseInstructionModal({ exercise, onClose }: { exercise: Exercise; onClose: () => void }) {
  const steps = getExerciseSteps(exercise);
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <div className="modal-top">
          <h3>{exercise.name}</h3>
          <button className="icon-button" onClick={onClose}><X size={18} /></button>
        </div>
        <EquipmentIllustration exercise={exercise} large />
        <div className="exercise-tags" style={{ marginTop: 14 }}>
          <span className="tag orange-tag">{exercise.equipment}</span>
          <span className="tag">{exercise.muscle}</span>
          <span className="tag">{exercise.sets}</span>
          <span className="tag">{exercise.rest}</span>
        </div>
        <p>{exercise.orientation}</p>
        <div className="instruction-box">
          <strong>Como utilizar</strong>
          <ol>
            {steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
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

function EquipmentIllustration({ exercise, large = false }: { exercise: Exercise; large?: boolean }) {
  const kind = getEquipmentKind(exercise.equipment, exercise.name);
  return (
    <div className={`equipment-img equipment-${kind} ${large ? "equipment-large" : ""}`} aria-label={`Imagem ilustrativa do equipamento: ${exercise.equipment}`}>
      <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
        <rect x="16" y="88" width="108" height="8" rx="4" />
        <circle cx="70" cy="34" r="10" />
        <path d="M54 48h32l10 30H44z" />
        <path d="M35 38h70" />
        <path d="M26 30v16M114 30v16" />
        <path className="orange-stroke" d="M33 76c18-15 55-15 74 0" />
        <path className="orange-stroke" d="M42 96h56" />
      </svg>
      <span>{exercise.equipment}</span>
    </div>
  );
}

function getEquipmentKind(equipment: string, name: string) {
  const text = `${equipment} ${name}`.toLowerCase();
  if (text.includes("esteira") || text.includes("bike") || text.includes("elíptico") || text.includes("escada") || text.includes("cardio")) return "cardio";
  if (text.includes("halter") || text.includes("barra") || text.includes("anilha")) return "freeweight";
  if (text.includes("polia") || text.includes("cabo") || text.includes("pulley") || text.includes("cross")) return "cable";
  if (text.includes("leg") || text.includes("smith") || text.includes("extensora") || text.includes("flexora")) return "legs";
  if (text.includes("colchonete") || text.includes("prancha") || text.includes("flexão")) return "mat";
  return "machine";
}

function getExerciseSteps(exercise: Exercise) {
  const kind = getEquipmentKind(exercise.equipment, exercise.name);
  const common = [
    "Ajuste banco, apoio ou pegada para seu tamanho antes de iniciar.",
    "Comece com carga leve para testar amplitude e conforto articular.",
    "Controle a fase de ida e de volta, sem trancos e sem prender a respiração."
  ];
  const map: Record<string, string[]> = {
    cardio: ["Comece em intensidade leve por 3 a 5 minutos.", "Aumente o ritmo aos poucos mantendo postura e respiração controlada.", "Reduza gradualmente no final para recuperar."],
    freeweight: ["Pegue os halteres ou barra com punhos firmes.", "Mantenha abdômen contraído e coluna neutra.", "Evite balanço do corpo e finalize a série com segurança."],
    cable: ["Regule a altura da polia e escolha o acessório correto.", "Mantenha base firme e controle o retorno do cabo.", "Não deixe o peso bater no final do movimento."],
    legs: ["Ajuste banco, encosto e apoio dos pés.", "Mantenha joelhos alinhados com a ponta dos pés.", "Desça com controle e evite travar articulações no final."],
    mat: ["Posicione o corpo no colchonete com alinhamento.", "Contraia abdômen e glúteos para estabilizar.", "Faça o movimento sem compensar lombar ou pescoço."],
    machine: common
  };
  return map[kind] || common;
}

function getGoalGuidance(profile: StudentProfile | null, category: WorkoutCategory) {
  const objective = profile?.objective || "Saúde";
  if (objective === "Emagrecimento" || objective === "Perder peso urgente") {
    return {
      title: "Plano de apoio para perda de peso",
      text: "Treino com musculação + cardio, constância e rotina alimentar simples. Para perda de peso urgente, priorize acompanhamento com nutricionista e avaliação profissional.",
      items: ["Inclua proteína magra em refeições principais.", "Evite líquidos calóricos e ultraprocessados na rotina.", "Finalize com cardio moderado após musculação quando possível.", "Hidrate-se e acompanhe medidas semanalmente, não só peso."]
    };
  }
  if (objective === "Hipertrofia") {
    return {
      title: "Apoio para ganho de massa muscular",
      text: "Priorize execução, progressão de carga e alimentação suficiente para recuperação.",
      items: ["Consuma proteína ao longo do dia.", "Não treine o mesmo músculo pesado todos os dias.", "Durma bem para melhorar recuperação.", `No treino de ${category}, registre cargas para evoluir na próxima sessão.`]
    };
  }
  if (objective === "Condicionamento") {
    return {
      title: "Apoio para condicionamento",
      text: "Combine força, cardio progressivo e mobilidade para melhorar resistência.",
      items: ["Comece moderado e suba intensidade aos poucos.", "Use cardio sem exagerar no início.", "Hidrate-se antes e depois.", "Respeite sinais de tontura, dor ou falta de ar excessiva."]
    };
  }
  return {
    title: "Apoio para saúde e qualidade de vida",
    text: "O foco é constância, técnica e rotina sustentável.",
    items: ["Faça aquecimento sempre.", "Prefira cargas seguras e movimento controlado.", "Beba água durante o treino.", "Procure orientação se houver dor ou restrição."]
  };
}
