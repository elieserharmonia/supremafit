# V13 - Correcao de CSP para fontes

Esta versao corrige o aviso/erro do navegador relacionado a carregamento de fonte do dominio `public.blob.vercel-storage.com`.

Alteracao principal:

- Atualizacao de `next.config.mjs` com cabecalho `Content-Security-Policy` permitindo fontes de:
  - `self`
  - `data:`
  - `fonts.gstatic.com`
  - `*.gstatic.com`
  - `*.vercel.com`
  - `vercel.live`
  - `*.vercel.live`
  - `*.vercel.app`
  - `*.public.blob.vercel-storage.com`

Observacao: esse aviso normalmente aparece no console do navegador e nao necessariamente impede o app de funcionar, mas foi corrigido para evitar bloqueio de fontes injetadas pela Vercel/preview.
