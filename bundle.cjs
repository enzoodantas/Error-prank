const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const output = html
  .replace(/<link rel="stylesheet" href="styles.css">|<style id="bundled-css">[\s\S]*?<\/style>/, () => `<style id="bundled-css">${css}</style>`)
  .replace(/<script src="app.js" defer><\/script>/, '')
  .replace(/<script id="bundled-js">[\s\S]*?<\/script>/, '')
  .replace('</body>', () => `<script id="bundled-js">${js}</script></body>`);
fs.writeFileSync(path.join(root, 'index.html'), output);
console.log('index.html atualizado com CSS e JavaScript embutidos.');

const prank = output
  .replace('<main id="menu">', '<main id="menu" hidden>')
  .replace('</body>', `<script>start("storm", document.querySelector('[data-mode="storm"]'));</script></body>`);
fs.writeFileSync(path.join(root, 'pegadinha.html'), prank);
console.log('pegadinha.html gerado com início automático da chuva de erros.');
