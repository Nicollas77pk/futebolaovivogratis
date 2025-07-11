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

          // Injeção segura da faixa
          let finalHtml;
          if (data.includes('</body>')) {
            finalHtml = data.replace('</body>', `

<!-- Faixa na parte inferior -->
<div id="bottom-bar" class="bottom-bar">
  <p>CLIQUE DUAS VEZES NA TELA PARA ENCHER A TELA</p>
</div>

<style>
  /* Estilos da Faixa na parte inferior */
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    font-size: 18px;
    font-family: Arial, sans-serif;
    z-index: 9999;
  }
</style>

</body>`);
          } else {
            // Se não tiver </body>, adiciona manualmente
            finalHtml = `
${data}

<!-- Faixa na parte inferior -->
<div id="bottom-bar" class="bottom-bar">
  <p>CLIQUE DUAS VEZES NA TELA PARA AMPLAR A TELA</p>
</div>

<style>
  /* Estilos da Faixa na parte inferior */
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    font-size: 18px;
    font-family: Arial, sans-serif;
    z-index: 9999;
  }
</style>

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
