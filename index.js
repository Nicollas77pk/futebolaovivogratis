const https = require('https');

module.exports = async (req, res) => {
  try {
    const path = req.url === '/' ? '' : req.url;
    const targetUrl = 'https://embedflix.top/tv/' + path;

    https.get(targetUrl, {
      headers: {
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
        'Referer': 'https://embedflix.top/tv/',
      }
    }, (resp) => {
      let data = '';

      resp.on('data', chunk => data += chunk);
      resp.on('end', () => {
        try {
          // Reescreve links para manter no domínio Vercel
          data = data
            .replace(/https:\/\/embedflix.top\.top\/tv\//g, '/')
            .replace(/href='\/([^']+)'/g, "href='/$1'")
            .replace(/href="\/([^"]+)"/g, 'href="/$1"')
            .replace(/action="\/([^"]+)"/g, 'action="/$1"')
            .replace(/<base[^>]*>/gi, '');

          // Remover ou alterar o título e o ícone
          data = data
            .replace(/<title>[^<]*<\/title>/, '<title>Meu Site</title>')  // Coloque aqui o título desejado
            .replace(/<link[^>]*rel=["']icon["'][^>]*>/gi, '');  // Remove o ícone

          // Injeção segura do modal
          let finalHtml;
          if (data.includes('</body>')) {
            finalHtml = data.replace('</body>', `

<!-- Modal de Aplicativo -->
<div id="app-modal" class="modal">
  <div class="modal-content">
    <h2>Baixe nosso aplicativo</h2>
    <p>Baixe o nosso aplicativo para uma experiência melhor!</p>
    <a href="https://linkdoaplicativo.com" target="_blank" class="download-btn">Baixar</a>
  </div>
</div>

<style>
  /* Estilos do Modal */
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  .modal-content {
    background: #fff;
    padding: 30px;
    text-align: center;
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
  }
  .download-btn {
    display: inline-block;
    padding: 15px 30px;
    background-color: #4CAF50;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
  }
  .download-btn:hover {
    background-color: #45a049;
  }
</style>

<script>
  // Fechar modal quando clicar fora da caixa
  window.onclick = function(event) {
    var modal = document.getElementById('app-modal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Mostrar o modal após 3 segundos
  window.onload = function() {
    setTimeout(function() {
      document.getElementById('app-modal').style.display = 'flex';
    }, 3000);  // Modifique o tempo conforme necessário
  }
</script>

</body>`);
          } else {
            // Se não tiver </body>, adiciona manualmente
            finalHtml = `
${data}

<!-- Modal de Aplicativo -->
<div id="app-modal" class="modal">
  <div class="modal-content">
    <h2>Baixe nosso aplicativo</h2>
    <p>Baixe o nosso aplicativo para uma experiência melhor!</p>
    <a href="https://linkdoaplicativo.com" target="_blank" class="download-btn">Baixar</a>
  </div>
</div>

<style>
  /* Estilos do Modal */
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  .modal-content {
    background: #fff;
    padding: 30px;
    text-align: center;
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
  }
  .download-btn {
    display: inline-block;
    padding: 15px 30px;
    background-color: #4CAF50;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
  }
  .download-btn:hover {
    background-color: #45a049;
  }
</style>

<script>
  // Fechar modal quando clicar fora da caixa
  window.onclick = function(event) {
    var modal = document.getElementById('app-modal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Mostrar o modal após 3 segundos
  window.onload = function() {
    setTimeout(function() {
      document.getElementById('app-modal').style.display = 'flex';
    }, 3000);  // Modifique o tempo conforme necessário
  }
</script>

</body>`;
          }

          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Content-Type', resp.headers['content-type'] || 'text/html');
          res.statusCode = 200;
          res.end(finalHtml);
        } catch (err) {
          console.error("Erro ao processar o HTML:", err);
          res.statusCode = 500;
          res.end("Erro ao processar o conteúdo.");
        }
      });
    }).on("error", (err) => {
      console.error("Erro ao fazer requisição HTTPS:", err);
      res.statusCode = 500;
      res.end("Erro ao carregar conteúdo.");
    });
  } catch (err) {
    console.error("Erro geral:", err);
    res.statusCode = 500;
    res.end("Erro interno.");
  }
};
