// coffee.js
const canvas = document.createElement('canvas');
canvas.id = 'steam';
document.querySelector('.hero-img').appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = 450;
canvas.height = 450;
const particles = [];

function createParticle() {
  particles.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    alpha: Math.random() * 0.5 + 0.2,
    size: Math.random() * 8 + 4,
    speed: Math.random() * 1 + 0.5,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.y -= p.speed;
    p.alpha -= 0.005;
    if (p.alpha <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(draw);
}

setInterval(createParticle, 300);
draw();

// coffee.js
const sections = document.querySelectorAll('section');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, options);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 2s ease-out';
  observer.observe(section);
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.boxShadow = '0 8px 25px rgba(139,94,60,0.3)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.boxShadow = '';
  });
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

