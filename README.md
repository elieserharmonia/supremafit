# SUPREMA FIT App

App social fitness da SUPREMA FIT ACADEMIA, criado em Next.js para deploy na Vercel.

## O que existe nesta versão

### V10 - piloto liberado

- Tela `/teste` com contas e checklist para testar com alunos
- Múltiplas contas demo de alunos
- Conta demo de personal/admin
- Página `/personal` para visão do treinador
- Posts criados no app aparecem no feed local
- Atividades fora da academia podem virar post no feed
- Estrutura preparada para monetizar treinos futuramente


- Login de teste local
- Cadastro de teste
- Feed social
- Curtir, comentar, compartilhar e salvar
- Marca d'água para compartilhamento externo
- Stories
- Destaque da Semana
- Treinos com orientações, aquecimento, hidratação e sugestões
- Perfil com BIO estilo Instagram e ícones sociais
- Financeiro
- Loja SUPREMA POWER
- Dashboard desktop
- Layout mobile-first responsivo

## Login de teste

Senha para todas as contas: `123456`

- Aluno padrão: `aluno@supremafit.com`
- Ana Paula: `ana@supremafit.com`
- Marcos Silva: `marcos@supremafit.com`
- Julia Bianchi: `julia@supremafit.com`
- Carlos Lima: `carlos@supremafit.com`
- Personal: `personal@supremafit.com`
- Admin: `admin@supremafit.com`

Tela de apoio ao piloto: `/teste`

## Subir no GitHub

Envie os arquivos descompactados diretamente na raiz do repositório:

```text
app/
components/
lib/
public/
package.json
next.config.mjs
tsconfig.json
```

Depois faça o deploy/redeploy pela Vercel.

## Próximos passos para app real

- Supabase Auth
- Banco de dados Supabase/Postgres
- Upload real de fotos/vídeos
- Pagamentos com Mercado Pago
- Notificações push
- Bloqueio de treinos premium
