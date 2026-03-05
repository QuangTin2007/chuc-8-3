const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

setInterval(function() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx + 'px';
  trail.style.top = ty + 'px';
}, 16);

document.addEventListener('click', function(e) {
  const emojis = ['💕','✨','🌸','❤️','💫','🌹'];
  for (let i = 0; i < 6; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = e.clientX + 'px';
    s.style.top = e.clientY + 'px';
    const angle = (Math.PI * 2 / 6) * i;
    const dist = 40 + Math.random() * 40;
    s.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    s.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    document.body.appendChild(s);
    setTimeout(function() { s.remove(); }, 800);
  }
});

const starsEl = document.getElementById('stars');
if (starsEl) {
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDuration = (2 + Math.random() * 4) + 's';
    s.style.animationDelay = Math.random() * 4 + 's';
    s.style.opacity = Math.random() * 0.5;
    starsEl.appendChild(s);
  }
}

const petalsEl = document.getElementById('petals');
if (petalsEl) {
  const petalSymbols = ['🌸','🌺','🌹','💮','🪷'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (5 + Math.random() * 8) + 's';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    petalsEl.appendChild(p);
  }
}

const openLetterBtn = document.getElementById('openLetterBtn');
if (openLetterBtn) {
  openLetterBtn.addEventListener('click', function() {
    window.location.href = 'letter.html';
  });
}

