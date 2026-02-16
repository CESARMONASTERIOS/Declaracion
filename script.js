const music = document.getElementById("music");
const nextBtn = document.getElementById("nextBtn");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const response = document.getElementById("response");
const finalMsg = document.getElementById("finalMsg");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

document.addEventListener("click", () => {
  music.play();
});

let step = 0;

nextBtn.onclick = () => {
  step++;
  if (step === 1) {
    m2.classList.remove("hidden");
    nextBtn.textContent = "💗 Seguir leyendo";
  } else if (step === 2) {
    m3.classList.remove("hidden");
    nextBtn.style.display = "none";
    response.classList.remove("hidden");
  }
};

yesBtn.onclick = () => {
  finalMsg.textContent = "💖 Gracias… esto significa mucho para mí ✨";
  finalMsg.classList.remove("hidden");
  response.style.display = "none";

  setTimeout(() => {
    window.location.href = "scene.html";
  }, 3000);
};

noBtn.onclick = () => {
  document.body.classList.add("calm");
  response.style.display = "none";
  finalMsg.textContent =
    "🤍 Gracias por tu sinceridad. Te deseo cosas muy bonitas y mucha luz ✨";
  finalMsg.classList.remove("hidden");
};