const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");

let tanahSebelumnya;
let selesai = false;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.random() * (max - min + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 950);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}
