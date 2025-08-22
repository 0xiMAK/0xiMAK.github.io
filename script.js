// 0xiMAK Portfolio — script.js
// Matrix falling code background (lightweight)
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const letters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&';
const fontSize = 14;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array.from({length: columns}, () => Math.floor(Math.random()*canvas.height));

function draw(){
  ctx.fillStyle = 'rgba(10, 15, 12, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff95';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
