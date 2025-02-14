/* script.js */
function playMusic() {
  const song = document.getElementById("loveSong");
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

function showSurprise() {
  const hearts = document.createElement("div");
  hearts.className = "hearts";
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.innerText = "💖";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }
  alert("💖 Selamat Hari Valentine, ayanggg akohhhh! loppyuuuuuu! 💖");
}

// Tambahkan di akhir file
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;

    modal.appendChild(enlargedImg);
    document.body.appendChild(modal);
    modal.classList.add("active");

    modal.addEventListener("click", () => {
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 300);
    });
  });
});
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
document.addEventListener("mousemove", function (e) {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.top = `${e.clientY}px`;
  heart.style.left = `${e.clientX}px`;
  heart.style.fontSize = "1.5em";
  heart.style.pointerEvents = "none";
  heart.style.animation = "fade 1s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});
