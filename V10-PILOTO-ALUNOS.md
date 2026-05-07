# V10 - Piloto com alunos

Esta versão foi ajustada para testar o app SUPREMA FIT com alguns alunos antes da monetização.

## O que mudou

- Tela pública `/teste` com contas de teste e checklist.
- Múltiplas contas demo de alunos.
- Conta do personal e conta admin demo.
- Login com contas prontas ou cadastro local.
- Feed aceita posts criados pelo aluno no próprio aparelho.
- Página `/postar` agora publica no feed local.
- Atividades fora da academia também viram post local no feed.
- Página `/personal` para acompanhar alunos de teste e preparar monetização.
- Treinos continuam liberados por enquanto, mas a estrutura está preparada para futuro bloqueio premium.

## Contas de teste

Senha para todas: `123456`

- João Pedro: `aluno@supremafit.com`
- Ana Paula: `ana@supremafit.com`
- Marcos Silva: `marcos@supremafit.com`
- Julia Bianchi: `julia@supremafit.com`
- Carlos Lima: `carlos@supremafit.com`
- Personal: `personal@supremafit.com`
- Admin: `admin@supremafit.com`

## Observação importante

Esta versão ainda usa dados locais no navegador. Ou seja, posts, cadastros locais e registros ficam salvos no aparelho usado no teste. Para uso real com vários alunos compartilhando dados, o próximo passo será conectar:

- Supabase Auth
- Banco Postgres/Supabase
- Storage para fotos e vídeos
- Mercado Pago para pagamentos
- Notificações push reais

## Teste recomendado

1. Abrir `/teste`.
2. Copiar o convite e enviar para alguns alunos.
3. Cada aluno entra com uma conta demo ou cria cadastro local.
4. Testar feed, postar foto, treino, atividade externa, mensagens, conexões, loja e financeiro.
5. Coletar feedback antes da próxima fase.
