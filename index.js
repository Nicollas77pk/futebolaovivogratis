const https = require('https');

module.exports = async (req, res) => {
  try {
    const path = req.url === '/' ? '' : req.url;
    const targetUrl = 'https://apk.futemais.net/app2/' + path;

    https.get(targetUrl, {
      headers: {
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
        'Referer': 'https://apk.futemais.net/app2/',
      }
    }, (resp) => {
      let data = '';

      resp.on('data', chunk => data += chunk);
      resp.on('end', () => {
        try {
          // Reescreve links para manter no domínio Vercel
          data = data
            .replace(/https:\/\/apk\.futemais\.net\/app2\//g, '/') // Substituindo o domínio para o relativo
            .replace(/href=['"]\/([^'"]+)['"]/g, 'href="/$1"') // Links internos
            .replace(/action=['"]\/([^'"]+)['"]/g, 'action="/$1"') // Links de action
            .replace(/<base[^>]*>/gi, ''); // Remove qualquer tag <base>

          // Remover ou alterar o título e o ícone
          data = data
            .replace(/<title>[^<]*<\/title>/, '<title>Meu Site</title>')  // Título personalizado
            .replace(/<link[^>]*rel=["']icon["'][^>]*>/gi, '');  // Remove o ícone

          // Injeção segura de banner no final do body com verificação
          let finalHtml;
          if (data.includes('</body>')) {
            finalHtml = data.replace('</body>', `
<div id="custom-footer">
  <a href="https://8xbet86.com/" target="_blank">
    <img src="https://i.imgur.com/Fen20UR.gif" style="width:100%;max-height:100px;object-fit:contain;cursor:pointer;" alt="Banner" />
  </a>
</div>
<style>
  #custom-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: transparent;
    text-align: center;
    z-index: 9999;
  }
  body { padding-bottom: 120px !important; }
</style>
</body>`);
          } else {
            // Se não tiver </body>, adiciona manualmente
            finalHtml = `
${data}
<div id="custom-footer">
  <a href="https://8xbet86.com/" target="_blank">
    <img src="https://i.imgur.com/Fen20UR.gif" style="width:100%;max-height:100px;object-fit:contain;cursor:pointer;" alt="Banner" />
  </a>
</div>
<style>
  #custom-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: transparent;
    text-align: center;
    z-index: 9999;
  }
  body { padding-bottom: 120px !important; }
</style>`;
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
