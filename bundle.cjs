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
  .replace(/<script id="autostart">[\s\S]*?<\/script>/, '')
  .replace('<main id="menu">', '<main id="menu" hidden>')
  .replace('</body>', () => `<script id="bundled-js">${js}</script><script id="autostart">start("update", document.querySelector('[data-mode="update"]'));</script></body>`);
for (const filename of ['index.html', 'pegadinha.html']) fs.writeFileSync(path.join(root, filename), output);
console.log('index.html e pegadinha.html iniciam diretamente na atualização infinita.');
