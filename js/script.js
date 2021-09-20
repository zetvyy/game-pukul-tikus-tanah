const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");

function randomTanah(tanah) {
  const tanahRandom = Math.floor(Math.random() * tanah.length);
  return tanahRandom;
}

function munculkanTikus(tanah) {
  tanah[0].classList.add("muncul");
}
