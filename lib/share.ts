export type SharePost = {
  author: string;
  category: string;
  caption: string;
};

export async function generateBrandedShareImage(post: SharePost) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas não suportado");

  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, "#111318");
  bg.addColorStop(0.48, "#1f2229");
  bg.addColorStop(1, "#331907");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,106,0,0.18)";
  ctx.beginPath();
  ctx.arc(930, 150, 360, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(255,106,0,0.38)";
  ctx.lineWidth = 12;
  for (let i = 0; i < 8; i += 1) {
    ctx.beginPath();
    ctx.moveTo(120 + i * 130, 0);
    ctx.lineTo(0 + i * 130, 1350);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(0,0,0,0.38)";
  roundRect(ctx, 70, 110, 940, 930, 54);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "900 66px Arial";
  ctx.fillText(post.category.toUpperCase(), 110, 205);

  ctx.fillStyle = "#ff6a00";
  ctx.font = "900 42px Arial";
  ctx.fillText(`por ${post.author}`, 110, 270);

  ctx.fillStyle = "#f6f7fb";
  wrapText(ctx, post.caption, 110, 380, 820, 58);

  const watermarkW = 410;
  const watermarkH = 104;
  const x = canvas.width - watermarkW - 50;
  const y = canvas.height - watermarkH - 42;
  ctx.fillStyle = "rgba(0,0,0,0.64)";
  roundRect(ctx, x, y, watermarkW, watermarkH, 28);
  ctx.fill();
  ctx.fillStyle = "#ff6a00";
  ctx.fillRect(x + 22, y + 20, 8, 64);
  ctx.fillStyle = "#ffffff";
  ctx.font = "900 31px Arial";
  ctx.fillText("SUPREMA FIT", x + 48, y + 48);
  ctx.font = "800 22px Arial";
  ctx.fillText("ACADEMIA", x + 48, y + 76);
  ctx.fillStyle = "#ffb06a";
  ctx.font = "500 18px Arial";
  ctx.fillText("Evolução guiada.", x + 240, y + 76);

  return canvas.toDataURL("image/png");
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(" ");
  let line = "";
  for (let n = 0; n < words.length; n += 1) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}
