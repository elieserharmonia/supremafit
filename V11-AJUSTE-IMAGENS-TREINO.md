# V11 - Ajuste visual dos cards de treino

Alteração feita:

- Nos cards da lista de exercícios da aba **Treinos**, a imagem grande do equipamento foi removida.
- No lugar, agora aparece apenas um ícone ilustrativo do tipo de equipamento.
- As imagens reais continuam disponíveis no botão **Ver instruções**, onde há espaço adequado para visualizar o guia completo.
- Isso evita corte, distorção e quebra de layout em telas pequenas.

Arquivos principais alterados:

- `components/TrainingExperience.tsx`

Fluxo esperado:

1. Aluno abre a aba Treinos.
2. A lista mostra cards limpos com ícones dos equipamentos.
3. Aluno toca em **Ver instruções**.
4. O modal abre com a imagem real grande do exercício.
