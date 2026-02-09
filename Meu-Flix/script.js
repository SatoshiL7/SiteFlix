function abrirVideo(link) {
  document.getElementById("player").style.display = "block";
  document.getElementById("video").src = link;
}

function fecharVideo() {
  document.getElementById("player").style.display = "none";
  document.getElementById("video").src = "";
}

function filtrar() {
  const termo = document.getElementById("pesquisa").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    card.style.display = texto.includes(termo) ? "block" : "none";
  });
}


