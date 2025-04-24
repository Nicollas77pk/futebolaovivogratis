document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.getElementById('video-container');
  const iframeContainer = document.getElementById('iframe-container');
  const video = document.getElementById('player');
  const videoSource = document.getElementById('video-source');
  const iframePlayer = document.getElementById('iframe-player');
  let hls;
  let player;

  let links = {};  // Inicializa o objeto para armazenar os links

  // Carrega o arquivo links.json
  fetch('https://raw.githubusercontent.com/seu-usuario/seu-repositorio/main/links.json')
    .then(response => response.json())
    .then(data => {
      links = data;  // Armazena os links no objeto
    })
    .catch(error => {
      console.error("Erro ao carregar links JSON:", error);
    });

  function changePlayerUrl(id) {
    iframeContainer.classList.remove('active');
    iframePlayer.src = '';
    videoContainer.classList.add('active');

    if (hls) {
      hls.destroy();
      hls = null;
    }

    video.pause();

    const url = links[id];
    if (url) {
      videoSource.src = url;
      videoSource.type = 'application/x-mpegURL';

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
      } else {
        video.load();
      }
    } else {
      alert("Link não encontrado!");
    }
  }

  window.changePlayerUrl = changePlayerUrl;

  // Verifica se há um id na URL e carrega automaticamente
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  if (id && links[id]) {
    changePlayerUrl(id);
  } else {
    alert("ID não encontrado na URL ou link inválido.");
  }

  player = new Plyr(video);
});
