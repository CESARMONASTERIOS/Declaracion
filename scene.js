const sky = document.getElementById("sky");

/* MARIPOSAS */
for (let i = 0; i < 12; i++) {
  const b = document.createElement("div");
  b.className = "butterfly";
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDelay = Math.random() * 6 + "s";
  sky.appendChild(b);
}

/* LUCIÉRNAGAS */
for (let i = 0; i < 40; i++) {
  const f = document.createElement("div");
  f.className = "firefly";
  f.style.left = Math.random() * 100 + "vw";
  f.style.top = Math.random() * 100 + "vh";
  f.style.animationDelay = Math.random() * 3 + "s";
  sky.appendChild(f);
}

/* ESTRELLAS FUGACES */
setInterval(() => {
  const s = document.createElement("div");
  s.className = "shooting";
  s.style.top = Math.random() * 40 + "vh";
  s.style.left = Math.random() * 100 + "vw";
  sky.appendChild(s);
  setTimeout(() => s.remove(), 1200);
}, 3000);

/* 🥇 TEXTO LETRA POR LETRA */
const text =
  "Este momento también lo guardaré para siempre ✨";
const typeText = document.getElementById("typeText");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typeText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

setTimeout(typeWriter, 1500);

/* 🥈 ESTRELLA DEL DESEO */
const wish = document.createElement("div");
wish.className = "wish-star";
wish.style.top = "40%";
wish.style.left = "70%";
sky.appendChild(wish);

wish.onclick = () => {
  wish.remove();
  const msg = document.createElement("div");
  msg.className = "type-text";
  msg.style.top = "130px";
  msg.textContent = "Pide un deseo… yo ya pedí el mío 🌠";
  document.body.appendChild(msg);
};

/* 🥉 CAMBIO DE ATMÓSFERA PROGRESIVO */
setTimeout(() => {
  document.body.classList.add("deep-night");
}, 6000);
