export type AccountPrivacy = "public" | "private";
export type RelationshipStatus = "friend" | "following" | "requested" | "pending_approval" | "none";

export type SocialUser = {
  id: string;
  slug: string;
  name: string;
  handle: string;
  initials: string;
  privacy: AccountPrivacy;
  goal: string;
  streak: number;
  lastMessage: string;
  lastMessageTime: string;
  bio: string;
  status: RelationshipStatus;
};

export const socialUsers: SocialUser[] = [
  { id: "joao", slug: "joao-pedro", name: "João Pedro", handle: "@joaopedro.fit", initials: "JP", privacy: "public", goal: "Hipertrofia", streak: 12, lastMessage: "Perfil do aluno logado.", lastMessageTime: "Agora", bio: "Foco, disciplina e evolução todos os dias. Treinando na SUPREMA FIT ACADEMIA.", status: "friend" },
  { id: "marcos", slug: "marcos-silva", name: "Marcos Silva", handle: "@marcos.suprema", initials: "MS", privacy: "public", goal: "Hipertrofia", streak: 14, lastMessage: "Bora treinar peito hoje?", lastMessageTime: "08:12", bio: "Foco em força, volume e constância. SUPREMA FIT todos os dias.", status: "friend" },
  { id: "julia", slug: "julia-bianchi", name: "Julia Bianchi", handle: "@julia.fit", initials: "JB", privacy: "private", goal: "Condicionamento", streak: 9, lastMessage: "Amanhã vou no treino das 19h.", lastMessageTime: "Ontem", bio: "Treino, corrida e saúde. Conta privada para amigos da academia.", status: "friend" },
  { id: "ana", slug: "ana-paula", name: "Ana Paula", handle: "@ana.suprema", initials: "AP", privacy: "public", goal: "Emagrecimento", streak: 18, lastMessage: "Fechei mais um dia de sequência!", lastMessageTime: "Seg", bio: "Mudança de vida com treino, hidratação e alimentação equilibrada.", status: "friend" },
  { id: "rafa", slug: "rafael-costa", name: "Rafael Costa", handle: "@rafa.costa", initials: "RC", privacy: "private", goal: "Perda de peso urgente", streak: 2, lastMessage: "Solicitou conexão para falar sobre treino e cardio.", lastMessageTime: "Agora", bio: "Começando agora. Meta: perder peso com segurança e constância.", status: "pending_approval" },
  { id: "bia", slug: "bia-rocha", name: "Bia Rocha", handle: "@bia.rocha", initials: "BR", privacy: "private", goal: "Saúde", streak: 4, lastMessage: "Quer se conectar com você.", lastMessageTime: "2 h", bio: "Treino para saúde, rotina e qualidade de vida.", status: "pending_approval" },
  { id: "coach-leo", slug: "coach-leo", name: "Coach Leo", handle: "@coachleo.suprema", initials: "CL", privacy: "public", goal: "Personal trainer", streak: 30, lastMessage: "Hoje foque na execução do supino.", lastMessageTime: "07:20", bio: "Personal trainer SUPREMA FIT. Evolução guiada, técnica e constância.", status: "following" },
  { id: "patricia", slug: "patricia-lima", name: "Patrícia Lima", handle: "@paty.lima", initials: "PL", privacy: "public", goal: "Musculação leve", streak: 6, lastMessage: "Publicou treino de pernas.", lastMessageTime: "3 h", bio: "Treino para saúde, disposição e autoestima.", status: "none" },
  { id: "gustavo", slug: "gustavo-melo", name: "Gustavo Melo", handle: "@guto.melo", initials: "GM", privacy: "private", goal: "Força", streak: 5, lastMessage: "Conta privada. Envie solicitação para conectar.", lastMessageTime: "Hoje", bio: "Força, execução e evolução semanal.", status: "none" }
];

export function findSocialUser(slug: string) {
  return socialUsers.find((user) => user.slug === slug) || socialUsers[0];
}
