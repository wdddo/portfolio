const invertCircle = document.querySelector('.invert-circle');

let x = 0, y = 0;
let targetX = 0, targetY = 0;
const speed = 0.25;

document.addEventListener('mousemove', e => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  x += (targetX - x) * speed;
  y += (targetY - y) * speed;
  invertCircle.style.clipPath = `circle(15px at ${x}px ${y}px)`;
  requestAnimationFrame(animate);
}
animate();