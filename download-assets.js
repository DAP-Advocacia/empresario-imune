const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/Logo-Empresario-Imune-Branco.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/mockup-tablet-1.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/mockup-laptop-1.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/ebook-capa-1.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/APROVADA-05-scaled.jpg',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/Icone-Empresario-Imune.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/icone-marca.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/icone-marca-150x150.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/avatar-cm.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/avatar-fl.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/avatar-ra.png',
  'https://empresarioimune.com.br/wp-content/uploads/2026/08/avatar-pm.png'
];

const targetDirs = [
  path.join(__dirname, 'assets'),
  path.join(__dirname, 'assets', 'images')
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const filename = path.basename(url);
    const primaryDest = path.join(__dirname, 'assets', 'images', filename);
    const rootAssetDest = path.join(__dirname, 'assets', filename);

    const request = (targetUrl) => {
      https.get(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return request(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} ao baixar ${url}`));
        }

        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          const buffer = Buffer.concat(chunks);
          fs.writeFileSync(primaryDest, buffer);
          fs.writeFileSync(rootAssetDest, buffer);
          console.log(`[OK] Baixado: ${filename} (${buffer.length} bytes)`);
          resolve({ filename, size: buffer.length });
        });
      }).on('error', (err) => {
        reject(err);
      });
    };

    request(url);
  });
}

async function run() {
  console.log('Iniciando download das imagens para a pasta assets/...\n');
  for (const url of images) {
    try {
      await downloadImage(url);
    } catch (err) {
      console.error(`[ERRO] Falha ao baixar ${url}:`, err.message);
    }
  }
  console.log('\nDownload de todas as imagens concluído com sucesso!');
}

run();
