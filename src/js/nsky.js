export function random(max) {
   return Math.floor(Math.random() * max);
}
 
export function createStars(width, height, spacing) {
  const stars = [];
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const star = {
        x: x + random(spacing),
        y: y + random(spacing),
        r: Math.random() * 1.5,
      };
      stars.push(star);
    }
  }
  return stars;
}

export function fillCircle(ctx, x, y, r, fillStyle) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

export function getOpacity(factor) {
  const opacityIncrement = 0.6 * Math.abs(Math.sin(factor));
  return 0.1 + opacityIncrement;
}

export function newY(x, width, height) {
  return Math.pow(x - width / 2, 2) / 9000 + height / 2 + 1;
}

// moon
export function render(ctx, width, height, stars) {
  let counter = 0;

  function drawFrame() {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#000");
    gradient.addColorStop(1, "#111");
    // 1b1b1b 00111e 0a2342

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    stars.forEach((star, i) => {
      const factor = counter * i;
      const opacity = getOpacity(factor);
      const randomColor = Math.floor(Math.random() * 360 + 1);
      fillCircle(ctx, star.x, star.y, star.r, `hsla(${randomColor}, 10%, 80%, ${opacity})`);
    });

    counter++;
    requestAnimationFrame(drawFrame);
  }

  drawFrame();
}