const https = require('https');

module.exports = async (req, res) => {
  try {
    // Logs de depuração para verificar a URL da requisição
    console.log("Requisição recebida para:", req.url);
    
    // Defina a URL de destino do conteúdo (ajustando conforme o path)
    const path = req.url === '/' ? '' : req.url;
    const targetUrl = 'https://reidoscanais.pro/' + path;

    // Requisição HTTPS para o conteúdo de destino
    https.get(targetUrl, {
      headers: {
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
        'Referer': 'https://reidoscanais.pro/',
      }
    }, (resp) => {
      let data = '';

      // Verifica se a resposta do servidor é 200 (OK)
      if (resp.statusCode !== 200) {
        console.error(`Erro ao carregar o conteúdo. Status: ${resp.statusCode}`);
        res.statusCode = 500;
        return res.end("Erro ao carregar o conteúdo do site.");
      }

      resp.on('data', chunk => data += chunk);
      resp.on('end', () => {
        try {
          // Verifica se o conteúdo é HTML válido
          if (!data.includes('<html')) {
            console.error("Conteúdo não é HTML válido.");
            res.statusCode = 500;
            return res.end("Conteúdo não encontrado ou inválido.");
          }

          // Reescreve links para manter no domínio Vercel
          data = data
            .replace(/https:\/\/reidoscanais\.pro\//g, '/')
            .replace(/href='\/([^']+)'/g, "href='/$1'")
            .replace(/href="\/([^"]+)"/g, 'href="/$1"')
            .replace(/action="\/([^"]+)"/g, 'action="/$1"')
            .replace(/<base[^>]*>/gi, '');

          // Remover ou alterar o título e o ícone
          data = data
            .replace(/<title>[^<]*<\/title>/, '<title>Meu Site</title>')  // Coloque aqui o título desejado
            .replace(/<link[^>]*rel=["']icon["'][^>]*>/gi, '');  // Remove o ícone

          // Verifica se a tag </body> existe
          let finalHtml;
          if (data.includes('</body>')) {
            // Adiciona o banner antes do fechamento da tag </body>
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
            // Caso a tag </body> não exista, adiciona manualmente no final do conteúdo
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

          // Cabeçalhos CORS: permite que qualquer origem acesse o conteúdo
          res.setHeader('Access-Control-Allow-Origin', '*');  // Permite qualquer origem
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  // Métodos permitidos
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Cabeçalhos permitidos
          res.setHeader('Content-Type', 'text/html');  // Garantir que a resposta seja HTML

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
