export type WorkoutCategory = "Peito" | "Perna" | "Braço" | "Costas" | "Ombro" | "Cardio" | "Abdômen" | "Full Body";

export type Exercise = {
  name: string;
  equipment: string;
  muscle: string;
  sets: string;
  rest: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  orientation: string;
};

export type WorkoutPlan = {
  category: WorkoutCategory;
  objective: string;
  warmup: string;
  exercises: Exercise[];
};

export type StudentProfile = {
  name?: string;
  age?: string;
  height?: string;
  weight?: string;
  objective?: string;
  frequency?: string;
  level?: string;
  restriction?: string;
  restrictionDetails?: string;
  preference?: string;
  time?: string;
  duration?: string;
};

export const workoutCategories: WorkoutCategory[] = ["Peito", "Perna", "Braço", "Costas", "Ombro", "Cardio", "Abdômen", "Full Body"];

export const workouts: Record<WorkoutCategory, WorkoutPlan> = {
  Peito: {
    category: "Peito",
    objective: "Hipertrofia e força de peitoral",
    warmup: "8 minutos de esteira leve + mobilidade de ombros + 2 séries leves no primeiro equipamento.",
    exercises: [
      {
        name: "Supino Reto Máquina",
        equipment: "Máquina de supino reto",
        muscle: "Peitoral maior, tríceps e deltoide anterior",
        sets: "4 séries x 8-12 reps",
        rest: "60-90s",
        level: "Intermediário",
        orientation: "Mantenha as escápulas firmes, desça com controle e empurre sem travar totalmente os cotovelos. Técnica antes da carga."
      },
      {
        name: "Supino Inclinado com Halteres",
        equipment: "Banco inclinado e halteres",
        muscle: "Peitoral superior",
        sets: "4 séries x 10-12 reps",
        rest: "60-90s",
        level: "Intermediário",
        orientation: "Mantenha os halteres alinhados ao peitoral superior. Evite abrir demais os cotovelos e controle a descida."
      },
      {
        name: "Crucifixo Máquina",
        equipment: "Peck deck / crucifixo máquina",
        muscle: "Peitoral medial",
        sets: "3 séries x 12-15 reps",
        rest: "45-60s",
        level: "Iniciante",
        orientation: "Abra com controle, mantenha o peito alto e contraia o peitoral no fechamento sem bater os apoios."
      },
      {
        name: "Crossover no Cabo",
        equipment: "Cross over / polia dupla",
        muscle: "Peitoral e estabilizadores",
        sets: "3 séries x 12-15 reps",
        rest: "45-60s",
        level: "Intermediário",
        orientation: "Incline levemente o tronco, mantenha abdômen firme e cruze as mãos à frente do peito com controle."
      },
      {
        name: "Flexão de Braço",
        equipment: "Peso corporal",
        muscle: "Peitoral, tríceps e core",
        sets: "3 séries até próximo da falha",
        rest: "60s",
        level: "Iniciante",
        orientation: "Corpo alinhado, abdômen contraído e movimento controlado. Se ficar pesado, apoie os joelhos."
      }
    ]
  },
  Perna: {
    category: "Perna",
    objective: "Força, hipertrofia e resistência de membros inferiores",
    warmup: "10 minutos de bicicleta + mobilidade de quadril e joelhos + 2 séries leves na extensora.",
    exercises: [
      {
        name: "Leg Press 45°",
        equipment: "Leg press 45 graus",
        muscle: "Quadríceps, glúteos e posteriores",
        sets: "4 séries x 10-12 reps",
        rest: "75-90s",
        level: "Intermediário",
        orientation: "Pés na largura dos ombros, desça controlando e não tire o quadril do banco. Não trave totalmente os joelhos."
      },
      {
        name: "Cadeira Extensora",
        equipment: "Cadeira extensora",
        muscle: "Quadríceps",
        sets: "4 séries x 12-15 reps",
        rest: "45-60s",
        level: "Iniciante",
        orientation: "Suba contraindo o quadríceps e desça devagar. Ajuste o encosto para o joelho alinhar ao eixo da máquina."
      },
      {
        name: "Mesa Flexora",
        equipment: "Mesa flexora",
        muscle: "Posterior de coxa",
        sets: "4 séries x 10-12 reps",
        rest: "60s",
        level: "Iniciante",
        orientation: "Controle a descida e evite tirar o quadril do apoio. Sinta a contração na parte posterior da coxa."
      },
      {
        name: "Agachamento Smith",
        equipment: "Smith machine",
        muscle: "Quadríceps, glúteos e core",
        sets: "3 séries x 8-10 reps",
        rest: "90s",
        level: "Intermediário",
        orientation: "Coluna neutra, pés firmes e joelhos acompanhando a ponta dos pés. Comece leve e priorize amplitude segura."
      },
      {
        name: "Panturrilha em Pé",
        equipment: "Máquina de panturrilha",
        muscle: "Gastrocnêmio e sóleo",
        sets: "4 séries x 12-20 reps",
        rest: "45s",
        level: "Iniciante",
        orientation: "Faça amplitude completa, subindo e descendo com controle. Evite movimentos rápidos e curtos."
      }
    ]
  },
  Braço: {
    category: "Braço",
    objective: "Bíceps, tríceps e força de membros superiores",
    warmup: "5 minutos de corda ou bike leve + mobilidade de cotovelos e ombros + 1 série leve de rosca e tríceps.",
    exercises: [
      {
        name: "Rosca Direta na Barra",
        equipment: "Barra reta ou W",
        muscle: "Bíceps braquial",
        sets: "4 séries x 8-12 reps",
        rest: "60s",
        level: "Intermediário",
        orientation: "Cotovelos próximos ao corpo, sem balançar o tronco. Suba contraindo e desça controlando."
      },
      {
        name: "Rosca Alternada com Halteres",
        equipment: "Halteres",
        muscle: "Bíceps e braquial",
        sets: "3 séries x 10-12 reps",
        rest: "60s",
        level: "Iniciante",
        orientation: "Controle a subida e a descida. Mantenha punho firme e evite projetar o ombro para frente."
      },
      {
        name: "Tríceps Corda no Pulley",
        equipment: "Polia alta com corda",
        muscle: "Tríceps",
        sets: "4 séries x 10-15 reps",
        rest: "45-60s",
        level: "Iniciante",
        orientation: "Cotovelos fixos ao lado do corpo. Abra a corda no final do movimento e controle a volta."
      },
      {
        name: "Tríceps Testa",
        equipment: "Barra W ou halteres",
        muscle: "Tríceps cabeça longa",
        sets: "3 séries x 10-12 reps",
        rest: "60s",
        level: "Intermediário",
        orientation: "Mantenha os cotovelos alinhados e o movimento controlado. Use carga que não force o punho."
      },
      {
        name: "Rosca Martelo",
        equipment: "Halteres",
        muscle: "Braquial e antebraço",
        sets: "3 séries x 10-12 reps",
        rest: "45-60s",
        level: "Iniciante",
        orientation: "Pegada neutra, punhos firmes e cotovelos próximos ao tronco."
      }
    ]
  },
  Costas: {
    category: "Costas",
    objective: "Dorsais, postura e força de puxada",
    warmup: "8 minutos de remo leve + ativação escapular + 2 séries leves na puxada frente.",
    exercises: [
      { name: "Puxada Frente", equipment: "Pulley frente", muscle: "Latíssimo do dorso", sets: "4 séries x 8-12 reps", rest: "60-90s", level: "Intermediário", orientation: "Puxe a barra em direção ao peito, mantendo o tronco estável e escapulas ativas." },
      { name: "Remada Baixa", equipment: "Remada baixa com triângulo", muscle: "Dorsal e romboides", sets: "4 séries x 10-12 reps", rest: "60s", level: "Intermediário", orientation: "Mantenha peito aberto, puxe com os cotovelos e evite arredondar a lombar." },
      { name: "Remada Máquina", equipment: "Remada articulada", muscle: "Meio das costas", sets: "3 séries x 10-12 reps", rest: "60s", level: "Iniciante", orientation: "Apoie o peito, puxe com controle e contraia as escápulas no final." },
      { name: "Pulldown", equipment: "Polia alta com barra ou corda", muscle: "Dorsais", sets: "3 séries x 12-15 reps", rest: "45-60s", level: "Intermediário", orientation: "Braços quase estendidos, puxe até a linha da cintura sem perder postura." },
      { name: "Hiperextensão Lombar", equipment: "Banco romano", muscle: "Lombar e glúteos", sets: "3 séries x 12-15 reps", rest: "45s", level: "Iniciante", orientation: "Suba até alinhar o tronco, sem hiperestender. Mantenha abdômen firme." }
    ]
  },
  Ombro: {
    category: "Ombro",
    objective: "Deltoides, estabilidade e postura",
    warmup: "Mobilidade de ombro + elevação lateral leve + rotação externa com carga baixa.",
    exercises: [
      { name: "Desenvolvimento Máquina", equipment: "Máquina de desenvolvimento", muscle: "Deltoide anterior e medial", sets: "4 séries x 8-12 reps", rest: "60-90s", level: "Intermediário", orientation: "Ajuste o banco, empurre acima da cabeça sem travar os cotovelos e desça com controle." },
      { name: "Elevação Lateral", equipment: "Halteres", muscle: "Deltoide medial", sets: "4 séries x 12-15 reps", rest: "45-60s", level: "Iniciante", orientation: "Cotovelos levemente flexionados, suba até a linha dos ombros e evite impulso." },
      { name: "Elevação Frontal", equipment: "Halteres ou anilha", muscle: "Deltoide anterior", sets: "3 séries x 10-12 reps", rest: "45-60s", level: "Iniciante", orientation: "Suba com controle até a linha dos ombros e mantenha tronco firme." },
      { name: "Crucifixo Inverso", equipment: "Peck deck inverso", muscle: "Deltoide posterior", sets: "3 séries x 12-15 reps", rest: "45-60s", level: "Iniciante", orientation: "Puxe abrindo os braços e contraia a parte posterior do ombro." },
      { name: "Encolhimento", equipment: "Halteres", muscle: "Trapézio", sets: "3 séries x 12-15 reps", rest: "45s", level: "Iniciante", orientation: "Suba os ombros em direção às orelhas e desça controlando. Evite girar os ombros." }
    ]
  },
  Cardio: {
    category: "Cardio",
    objective: "Condicionamento, gasto calórico e saúde cardiovascular",
    warmup: "Comece progressivamente por 5 minutos em intensidade leve antes de acelerar.",
    exercises: [
      { name: "Esteira Progressiva", equipment: "Esteira", muscle: "Cardiorrespiratório", sets: "20-30 min", rest: "Livre", level: "Iniciante", orientation: "Comece caminhando, aumente aos poucos e mantenha respiração controlada." },
      { name: "Bike Ergométrica", equipment: "Bicicleta", muscle: "Cardio e pernas", sets: "15-25 min", rest: "Livre", level: "Iniciante", orientation: "Ajuste o banco e mantenha ritmo constante. Não force joelhos." },
      { name: "Elíptico", equipment: "Elíptico", muscle: "Cardio total", sets: "12-20 min", rest: "Livre", level: "Iniciante", orientation: "Use braços e pernas em ritmo contínuo, sem prender a respiração." },
      { name: "Escada", equipment: "Simulador de escada", muscle: "Glúteos, pernas e cardio", sets: "8-15 min", rest: "Livre", level: "Intermediário", orientation: "Segure levemente o apoio e mantenha postura ereta. Comece em baixa velocidade." },
      { name: "HIIT Opcional", equipment: "Esteira ou bike", muscle: "Cardio intenso", sets: "8 rounds 30s forte / 60s leve", rest: "60s leve", level: "Avançado", orientation: "Use somente se estiver bem condicionado. Pare se sentir tontura, dor ou falta de ar excessiva." }
    ]
  },
  Abdômen: {
    category: "Abdômen",
    objective: "Core, estabilidade e resistência abdominal",
    warmup: "Caminhada leve + mobilidade de quadril + ativação de core com prancha curta.",
    exercises: [
      { name: "Prancha", equipment: "Colchonete", muscle: "Core", sets: "4 séries x 30-60s", rest: "45s", level: "Iniciante", orientation: "Mantenha corpo alinhado, abdômen firme e respiração controlada." },
      { name: "Abdominal Máquina", equipment: "Máquina abdominal", muscle: "Reto abdominal", sets: "4 séries x 12-15 reps", rest: "45s", level: "Iniciante", orientation: "Flexione o tronco sem puxar o pescoço. Controle a volta." },
      { name: "Elevação de Pernas", equipment: "Paralela ou banco", muscle: "Abdômen inferior", sets: "3 séries x 10-15 reps", rest: "45-60s", level: "Intermediário", orientation: "Suba as pernas com controle e evite balançar o corpo." },
      { name: "Abdominal Infra", equipment: "Colchonete", muscle: "Abdômen inferior", sets: "3 séries x 12-20 reps", rest: "45s", level: "Iniciante", orientation: "Eleve o quadril levemente e mantenha lombar controlada." },
      { name: "Rotação no Cabo", equipment: "Polia", muscle: "Oblíquos", sets: "3 séries x 12 reps por lado", rest: "45s", level: "Intermediário", orientation: "Gire o tronco com controle, sem usar apenas os braços." }
    ]
  },
  "Full Body": {
    category: "Full Body",
    objective: "Treino geral para retorno, iniciantes ou dias de baixa frequência",
    warmup: "8 minutos de caminhada + mobilidade geral + cargas leves nos dois primeiros exercícios.",
    exercises: [
      { name: "Leg Press", equipment: "Leg press", muscle: "Pernas", sets: "3 séries x 12 reps", rest: "60s", level: "Iniciante", orientation: "Movimento controlado, amplitude segura e joelhos alinhados." },
      { name: "Chest Press", equipment: "Máquina de peitoral", muscle: "Peito", sets: "3 séries x 12 reps", rest: "60s", level: "Iniciante", orientation: "Empurre com controle e mantenha postura firme." },
      { name: "Puxada Frente", equipment: "Pulley", muscle: "Costas", sets: "3 séries x 12 reps", rest: "60s", level: "Iniciante", orientation: "Puxe em direção ao peito e mantenha os ombros longe das orelhas." },
      { name: "Desenvolvimento Máquina", equipment: "Máquina de ombro", muscle: "Ombro", sets: "2 séries x 12 reps", rest: "45s", level: "Iniciante", orientation: "Carga leve e movimento estável." },
      { name: "Esteira Leve", equipment: "Esteira", muscle: "Cardio", sets: "12-20 min", rest: "Livre", level: "Iniciante", orientation: "Finalização leve para condicionamento e gasto calórico." }
    ]
  }
};

export function getRecommendedWorkout(profile?: StudentProfile | null, history: WorkoutCategory[] = []) {
  const last = history[history.length - 1];
  if (!last) {
    if (profile?.objective === "Emagrecimento" || profile?.objective === "Perder peso urgente") return "Full Body" as WorkoutCategory;
    if (profile?.objective === "Condicionamento") return "Cardio" as WorkoutCategory;
    if (profile?.objective === "Saúde" || profile?.level === "Iniciante") return "Full Body" as WorkoutCategory;
    return "Peito" as WorkoutCategory;
  }
  const map: Record<WorkoutCategory, WorkoutCategory[]> = {
    Peito: ["Perna", "Costas"],
    Perna: ["Braço", "Peito"],
    Braço: ["Perna", "Costas"],
    Costas: ["Perna", "Ombro"],
    Ombro: ["Perna", "Braço"],
    Cardio: ["Full Body", "Perna"],
    Abdômen: ["Peito", "Perna"],
    "Full Body": ["Cardio", "Peito"]
  };
  if ((profile?.objective === "Emagrecimento" || profile?.objective === "Perder peso urgente") && last !== "Cardio") return "Cardio" as WorkoutCategory;
  return map[last]?.[0] ?? "Full Body";
}

export function getInactivityMessage(lastCheckInDate?: string | null) {
  if (!lastCheckInDate) return "Comece sua jornada hoje. Registre seu primeiro treino e vamos construir sua evolução.";
  const last = new Date(lastCheckInDate).getTime();
  const diff = Math.floor((Date.now() - last) / (1000 * 60 * 60 * 24));
  if (diff >= 7) return "Você está há uma semana sem registrar treino. Recomendo um Full Body leve para voltar ao ritmo com segurança.";
  if (diff >= 5) return "A SUPREMA FIT está te esperando. Um treino hoje já coloca você de volta no ritmo.";
  if (diff >= 3) return "Não precisa ser perfeito. Só precisa começar. Bora treinar hoje?";
  if (diff >= 2) return "Você está há 2 dias sem registrar treino. Que tal fazer um treino leve hoje?";
  return "Ótima constância. Continue registrando seus treinos para eu sugerir sua progressão.";
}

export function generateInitialTrainingPlan(profile: StudentProfile) {
  const objective = profile.objective;
  const frequency = profile.frequency || "3x por semana";
  const level = profile.level;

  if (objective === "Hipertrofia" && frequency.includes("5")) {
    return ["Segunda: Peito", "Terça: Perna", "Quarta: Costas", "Quinta: Braço", "Sexta: Ombro + Abdômen"];
  }
  if (objective === "Perder peso urgente") {
    return ["Dia 1: Full Body leve + Cardio moderado", "Dia 2: Perna + caminhada inclinada", "Dia 3: Superiores + Bike", "Dia 4: Cardio progressivo + Abdômen", "Dia 5: Full Body metabólico"];
  }
  if (objective === "Emagrecimento" && frequency.includes("3")) {
    return ["Dia 1: Full Body + Cardio", "Dia 2: Perna + Cardio", "Dia 3: Superiores + Cardio"];
  }
  if (level === "Iniciante" && frequency.includes("3")) {
    return ["Dia 1: Full Body leve", "Dia 2: Cardio + máquinas", "Dia 3: Full Body moderado"];
  }
  if (objective === "Saúde" || frequency.includes("2")) {
    return ["Dia 1: Full Body leve", "Dia 2: Cardio + mobilidade"];
  }
  if (objective === "Força") {
    return ["Dia 1: Peito + tríceps", "Dia 2: Perna", "Dia 3: Costas + bíceps", "Dia 4: Ombro + core"];
  }
  return ["Dia 1: Peito", "Dia 2: Perna", "Dia 3: Costas", "Dia 4: Braço", "Dia 5: Cardio + Abdômen"];
}
