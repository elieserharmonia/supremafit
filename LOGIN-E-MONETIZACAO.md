# SUPREMA FIT App - Login de teste e preparação para monetização

## Login de teste

Esta versão inclui autenticação local para testar o app hoje, sem banco de dados.

Credenciais de teste:

- Aluno: `aluno@supremafit.com`
- Personal: `personal@supremafit.com`
- Senha: `123456`

Também é possível criar um cadastro de teste em `/cadastro`.

## Importante

O login atual usa `localStorage`, portanto serve apenas para protótipo/teste visual.
Para liberar para alunos reais, o próximo passo deve ser conectar:

- Supabase Auth ou outro serviço de autenticação;
- banco Postgres para alunos, treinos, posts e pagamentos;
- regras de permissão por aluno/personal/academia;
- Mercado Pago ou Stripe para cobrança;
- armazenamento de imagens/vídeos.

## Preparação para monetização de treinos

A estrutura já considera plano `free` e `premium` no usuário.
Futuramente, a aba Treinos poderá ser bloqueada parcialmente para alunos do plano gratuito, deixando premium para:

- treino personalizado;
- acompanhamento de carga;
- evolução por histórico;
- feedback do personal;
- treinos por objetivo;
- check-ins e relatórios.

