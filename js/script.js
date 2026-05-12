// ==========================================
// BANNERS ROTATIVOS - KRYPTNEXT
// ==========================================

// Seleciona todos os banners
const banners = document.querySelectorAll(".banner");

// Índice atual
let currentBanner = 0;

// Tempo da troca
const bannerDelay = 5000;

// Função principal
function rotateBanner() {

  // Remove classe active do banner atual
  banners[currentBanner].classList.remove("active");

  // Próximo banner
  currentBanner++;

  // Volta para o primeiro
  if (currentBanner >= banners.length) {
    currentBanner = 0;
  }

  // Adiciona active no novo banner
  banners[currentBanner].classList.add("active");

}

// Inicia rotação automática
setInterval(rotateBanner, bannerDelay);