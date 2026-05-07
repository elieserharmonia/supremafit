"use client";

import { useEffect, useMemo, useState, type Dispatch, type FormEvent, type SetStateAction } from "react";
import { AlertTriangle, CheckCircle2, Droplets, Flame, Info, Salad, Sparkles, X } from "lucide-react";
import { Exercise, StudentProfile, WorkoutCategory, getInactivityMessage, getRecommendedWorkout, workoutCategories, workouts } from "../lib/workouts";

export function TrainingExperience() {
  const [category, setCategory] = useState<WorkoutCategory>("Peito");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [tab, setTab] = useState<"exercicios" | "aquecimento" | "externas">("exercicios");
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [history, setHistory] = useState<WorkoutCategory[]>([]);
  const [lastCheckIn, setLastCheckIn] = useState<string | null>(null);
  const [externalActivities, setExternalActivities] = useState<ExternalActivity[]>([]);
  const [externalForm, setExternalForm] = useState({
    type: "Corrida",
    duration: "30 min",
    distance: "5 km",
    intensity: "Moderada",
    caption: "Atividade fora da academia para manter a constância."
  });

  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("supremaStudentProfile");
      const savedHistory = localStorage.getItem("supremaWorkoutHistory");
      const savedCheckIn = localStorage.getItem("supremaLastCheckIn");
      const savedExternal = localStorage.getItem("supremaExternalActivities");
      if (savedProfile) setProfile(JSON.parse(savedProfile));
      if (savedHistory) setHistory(JSON.parse(savedHistory));
      if (savedCheckIn) setLastCheckIn(savedCheckIn);
      if (savedExternal) setExternalActivities(JSON.parse(savedExternal));
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
    const now = new Date().toISOString();
    const nextHistory = [...history, category].slice(-12);
    setHistory(nextHistory);
    setLastCheckIn(now);
    localStorage.setItem("supremaWorkoutHistory", JSON.stringify(nextHistory));
    localStorage.setItem("supremaLastCheckIn", now);
    setDone({});
    alert("Treino registrado com sucesso. Excelente trabalho!");
  }

  function registerExternalActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const now = new Date().toISOString();
    const activity: ExternalActivity = {
      id: String(Date.now()),
      type: externalForm.type,
      duration: externalForm.duration,
      distance: externalForm.distance,
      intensity: externalForm.intensity,
      caption: externalForm.caption,
      date: now
    };
    const nextActivities = [activity, ...externalActivities].slice(0, 12);
    setExternalActivities(nextActivities);
    setLastCheckIn(now);
    localStorage.setItem("supremaExternalActivities", JSON.stringify(nextActivities));
    localStorage.setItem("supremaLastCheckIn", now);
    alert("Atividade externa registrada e pronta para aparecer no seu histórico. Hidrate-se e mantenha a constância!");
  }

  function clearExternalActivity(id: string) {
    const nextActivities = externalActivities.filter((activity) => activity.id !== id);
    setExternalActivities(nextActivities);
    localStorage.setItem("supremaExternalActivities", JSON.stringify(nextActivities));
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

      <div className="tabs treino-tabs">
        <button type="button" onClick={() => setTab("exercicios")} className={`tab ${tab === "exercicios" ? "active" : ""}`}>Exercícios</button>
        <button type="button" onClick={() => setTab("aquecimento")} className={`tab ${tab === "aquecimento" ? "active" : ""}`}>Aquecimento</button>
        <button type="button" onClick={() => setTab("externas")} className={`tab ${tab === "externas" ? "active" : ""}`}>Fora da academia</button>
      </div>

      {tab === "aquecimento" && (
        <section className="card finance-card">
          <h2 style={{ marginTop: 0 }}>Aquecimento recomendado</h2>
          <p className="muted">{plan.warmup}</p>
          <div className="equipment-steps">
            <small>Execute em intensidade leve/moderada, sem chegar à fadiga. O objetivo é preparar articulações, aumentar temperatura corporal e melhorar a segurança do treino.</small>
          </div>
        </section>
      )}

      {tab === "exercicios" && plan.exercises.map((exercise, index) => (
        <ExerciseEquipmentCard
          key={exercise.name}
          index={index + 1}
          exercise={exercise}
          done={!!done[exercise.name]}
          onDone={() => markExercise(exercise.name)}
          onInstructions={() => setSelected(exercise)}
        />
      ))}

      {tab === "externas" && (
        <ExternalActivitySection
          form={externalForm}
          setForm={setExternalForm}
          activities={externalActivities}
          onSubmit={registerExternalActivity}
          onDelete={clearExternalActivity}
        />
      )}

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

type ExternalActivity = {
  id: string;
  type: string;
  duration: string;
  distance: string;
  intensity: string;
  caption: string;
  date: string;
};

const externalActivityTypes = [
  { name: "Corrida", icon: "🏃", hydration: "Beba água antes de sair e reforce a hidratação ao voltar." },
  { name: "Caminhada", icon: "🚶", hydration: "Leve uma garrafinha, principalmente em dias quentes." },
  { name: "Bicicleta", icon: "🚴", hydration: "Em pedal longo, hidrate-se em pequenos goles durante o trajeto." },
  { name: "Montaria", icon: "🐎", hydration: "Atividade também exige postura, core e hidratação." },
  { name: "Futebol", icon: "⚽", hydration: "Intercale água nos intervalos e evite treinar em jejum pesado." },
  { name: "Natação", icon: "🏊", hydration: "Mesmo na água, o corpo perde líquido. Hidrate-se depois." },
  { name: "Trilha", icon: "🥾", hydration: "Leve água extra e planeje o percurso com segurança." },
  { name: "Funcional ao ar livre", icon: "💪", hydration: "Faça aquecimento leve e hidrate-se antes da parte intensa." }
];

function ExternalActivitySection({
  form,
  setForm,
  activities,
  onSubmit,
  onDelete
}: {
  form: { type: string; duration: string; distance: string; intensity: string; caption: string };
  setForm: Dispatch<SetStateAction<{ type: string; duration: string; distance: string; intensity: string; caption: string }>>;
  activities: ExternalActivity[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onDelete: (id: string) => void;
}) {
  const selected = externalActivityTypes.find((item) => item.name === form.type) || externalActivityTypes[0];

  return (
    <section className="external-activity-card card">
      <div className="external-head">
        <div>
          <span className="eyebrow">Atividades externas</span>
          <h2>Poste treinos fora da academia</h2>
          <p className="muted">Corrida, bicicleta, montaria, caminhada e outras atividades também contam para sua evolução.</p>
        </div>
        <div className="external-icon">{selected.icon}</div>
      </div>

      <div className="external-type-grid">
        {externalActivityTypes.map((activity) => (
          <button
            type="button"
            key={activity.name}
            className={`external-type ${form.type === activity.name ? "active" : ""}`}
            onClick={() => setForm((value) => ({ ...value, type: activity.name }))}
          >
            <span>{activity.icon}</span>
            <b>{activity.name}</b>
          </button>
        ))}
      </div>

      <div className="hydration-strip external-hydration">
        <Droplets color="var(--orange)" />
        <div>
          <strong>Hidrate-se nessa atividade</strong>
          <small>{selected.hydration}</small>
        </div>
      </div>

      <form className="external-form" onSubmit={onSubmit}>
        <label>
          <span>Duração</span>
          <input className="field" value={form.duration} onChange={(event) => setForm((value) => ({ ...value, duration: event.target.value }))} placeholder="Ex: 30 min" />
        </label>
        <label>
          <span>Distância</span>
          <input className="field" value={form.distance} onChange={(event) => setForm((value) => ({ ...value, distance: event.target.value }))} placeholder="Ex: 5 km" />
        </label>
        <label>
          <span>Intensidade</span>
          <select className="select-field" value={form.intensity} onChange={(event) => setForm((value) => ({ ...value, intensity: event.target.value }))}>
            <option>Leve</option>
            <option>Moderada</option>
            <option>Intensa</option>
          </select>
        </label>
        <label className="external-caption">
          <span>Legenda para o feed</span>
          <textarea className="field" value={form.caption} onChange={(event) => setForm((value) => ({ ...value, caption: event.target.value }))} placeholder="Conte como foi sua atividade..." />
        </label>
        <button className="primary-btn full" type="submit">Registrar e postar atividade</button>
      </form>

      <div className="external-history">
        <div className="external-history-title">
          <strong>Histórico fora da academia</strong>
          <small>{activities.length} registro(s)</small>
        </div>
        {activities.length === 0 && <p className="muted empty-state">Nenhuma atividade externa registrada ainda. Poste uma corrida, pedal ou caminhada hoje.</p>}
        {activities.map((activity) => (
          <article className="external-history-item" key={activity.id}>
            <div className="external-history-icon">{externalActivityTypes.find((item) => item.name === activity.type)?.icon || "🔥"}</div>
            <div>
              <strong>{activity.type}</strong>
              <span>{activity.duration} • {activity.distance} • {activity.intensity}</span>
              <p>{activity.caption}</p>
              <small>{new Date(activity.date).toLocaleDateString("pt-BR")}</small>
            </div>
            <button type="button" className="tiny-btn" onClick={() => onDelete(activity.id)}>Excluir</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExerciseEquipmentCard({ index, exercise, done, onDone, onInstructions }: { index: number; exercise: Exercise; done: boolean; onDone: () => void; onInstructions: () => void }) {
  return (
    <article className={`exercise-card ${exercise.image ? "with-photo" : ""}`}>
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
          <small>{exercise.image ? "Imagem real incluída: toque em Ver instruções para ampliar o guia de início, execução e músculos trabalhados." : "Como usar: ajuste o equipamento, mantenha postura firme e execute com controle."}</small>
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
        {exercise.image && <p className="image-helper">Guia visual com posição inicial, execução e músculos trabalhados.</p>}
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

  if (exercise.image) {
    return (
      <div className={`equipment-img equipment-photo ${large ? "equipment-large" : ""}`} aria-label={exercise.imageAlt || `Imagem do equipamento: ${exercise.equipment}`}>
        <img src={exercise.image} alt={exercise.imageAlt || `Como executar ${exercise.name}`} loading="lazy" />
        <span>{exercise.equipment}</span>
      </div>
    );
  }

  return (
    <div className={`equipment-img equipment-${kind} ${large ? "equipment-large" : ""}`} aria-label={`Imagem ilustrativa do equipamento: ${exercise.equipment}`}>
      <EquipmentSvg kind={kind} />
      <span>{exercise.equipment}</span>
    </div>
  );
}

function EquipmentSvg({ kind }: { kind: string }) {
  if (kind === "cardio") {
    return (
      <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
        <path d="M31 88h78" />
        <path d="M42 88l14-44h28l14 44" />
        <path d="M50 50h40" />
        <circle cx="70" cy="30" r="8" />
        <path className="orange-stroke" d="M35 96h70" />
        <path className="orange-stroke" d="M55 66h30" />
      </svg>
    );
  }
  if (kind === "cable") {
    return (
      <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
        <path d="M32 22h76v82" />
        <path d="M42 104V22" />
        <circle cx="70" cy="32" r="8" />
        <path d="M70 40v26" />
        <path d="M52 80c12-14 25-14 36 0" />
        <path className="orange-stroke" d="M70 40l25 28" />
        <path className="orange-stroke" d="M95 68l12 12" />
      </svg>
    );
  }
  if (kind === "legs") {
    return (
      <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
        <path d="M28 92h84" />
        <path d="M38 82h36l18-24" />
        <path d="M76 84l28-38" />
        <path d="M100 46h18" />
        <circle cx="54" cy="52" r="9" />
        <path d="M48 62l-8 18" />
        <path className="orange-stroke" d="M80 62l22 14" />
        <path className="orange-stroke" d="M34 100h72" />
      </svg>
    );
  }
  if (kind === "freeweight") {
    return (
      <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
        <path d="M30 62h80" />
        <path d="M24 48v28M34 44v36M106 44v36M116 48v28" />
        <circle cx="70" cy="38" r="9" />
        <path d="M55 52h30l8 34H47z" />
        <path className="orange-stroke" d="M49 91h42" />
        <path className="orange-stroke" d="M42 62h56" />
      </svg>
    );
  }
  if (kind === "bench") {
    return (
      <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
        <path d="M28 88h84" />
        <path d="M42 80l40-28 18 28" />
        <path d="M38 40h64" />
        <path d="M30 32v16M110 32v16" />
        <circle cx="62" cy="50" r="7" />
        <path className="orange-stroke" d="M52 76h48" />
        <path className="orange-stroke" d="M38 96h72" />
      </svg>
    );
  }
  if (kind === "mat") {
    return (
      <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
        <rect x="25" y="78" width="90" height="16" rx="8" />
        <circle cx="48" cy="52" r="8" />
        <path d="M56 56l30 14" />
        <path d="M78 68l24-14" />
        <path d="M72 69l-18 12" />
        <path className="orange-stroke" d="M34 102h72" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 140 120" role="img" aria-hidden="true">
      <rect x="26" y="24" width="88" height="74" rx="12" />
      <circle cx="70" cy="42" r="9" />
      <path d="M54 58h32l10 25H44z" />
      <path d="M36 96h68" />
      <path className="orange-stroke" d="M42 84h56" />
      <path className="orange-stroke" d="M50 32h40" />
    </svg>
  );
}

function getEquipmentKind(equipment: string, name: string) {
  const text = `${equipment} ${name}`.toLowerCase();
  if (text.includes("esteira") || text.includes("bike") || text.includes("elíptico") || text.includes("escada") || text.includes("cardio")) return "cardio";
  if (text.includes("banco") || text.includes("supino")) return "bench";
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
    bench: ["Ajuste o banco para manter o peitoral alinhado com a pegada.", "Apoie os pés no chão e estabilize escápulas e coluna.", "Desça com controle e empurre sem travar totalmente os cotovelos."],
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
