# SUPREMA FIT App v5 - imagens integradas aos treinos

Esta versão integra as primeiras imagens dos equipamentos diretamente na aba **Treinos**.

## Onde as imagens foram colocadas

`public/imagens/equipamentos/`

## Exercícios já com imagem no app

- Supino Reto Máquina
- Supino Inclinado com Halteres
- Crucifixo Máquina / Peck Deck
- Crossover no Cabo / Polia Dupla
- Leg Press 45°
- Cadeira Extensora
- Mesa Flexora
- Agachamento Smith / Smith Machine

## Como aparece no app

- Na lista de exercícios, cada item com imagem real aparece com thumbnail do equipamento.
- Ao tocar em **Ver instruções**, o aluno abre um modal com a imagem ampliada.
- As imagens continuam acompanhadas de séries, repetições, descanso, músculos trabalhados e orientação técnica.

## Como adicionar mais imagens depois

1. Coloque o arquivo em `public/imagens/equipamentos/`.
2. Use um nome simples, sem acentos e sem espaços. Exemplo: `puxada-frente.png`.
3. Em `lib/workouts.ts`, adicione no exercício:

```ts
image: "/imagens/equipamentos/puxada-frente.png",
imageAlt: "Guia visual da Puxada Frente com início, execução e músculos trabalhados."
```

## Observação

As orientações continuam sendo educativas e devem ser validadas por profissional de Educação Física, especialmente quando houver dor, lesão, condição médica ou dúvida de execução.
