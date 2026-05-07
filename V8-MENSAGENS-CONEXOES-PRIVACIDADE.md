# SUPREMA FIT App v8 - Mensagens, Conexões e Privacidade

Atualizações desta versão:

- Mensagens agora mostram foto/avatar antes do nome de quem enviou.
- Aba principal de mensagens mostra amigos/seguindo.
- Nova aba "Aguardando aprovação" para solicitações de conexão.
- Nova aba "Conectar" para seguir alunos públicos ou solicitar conexão em contas privadas.
- Contas públicas podem ser seguidas diretamente.
- Contas privadas exigem solicitação e aprovação.
- Nova rota `/conexoes` para encontrar alunos.
- Nova rota dinâmica `/alunos/[slug]` para perfil público de outros alunos.
- Stories e avatares do feed agora são clicáveis.
- Cards de mídia do feed agora são clicáveis.
- Perfil ganhou acesso direto a Conexões e Mensagens.
- Configurações permitem alternar conta pública/privada no armazenamento local.

Observação: esta versão ainda é MVP front-end. Para produção real, conectar Supabase Auth, banco de dados, storage de fotos e regras de privacidade no backend.
