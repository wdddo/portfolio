const invertCircle = document.querySelector('.invert-circle');

let x = 0, y = 0;
let targetX = 0, targetY = 0;
const speed = 0.1;

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

// ----------------------------------

const h2 = document.getElementById('change-h2-js');
const texte = ['die eine Website neu entfacht.', 'die ein robustes Fundament schafft.', 'die schlummernde Kreativität weckt.'];
let index = 0;

setInterval(() => {
  // fade out
  h2.classList.add('fade-out');

    // nach 1s (Übergangszeit) Text wechseln und fade in
    setTimeout(() => {
      index = (index + 1) % texte.length;
      h2.textContent = texte[index];
      h2.classList.remove('fade-out');
    }, 1000); // gleiche Dauer wie die CSS-Transition
  }, 5000); // alle 5 Sekunden

  // ----------------------------------------

  fetch("../elements/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-element").innerHTML = data;
  });

  // ------------------------------------------

  fetch("../elements/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-element").innerHTML = data;
  });