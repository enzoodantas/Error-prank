'use strict';
const menu = document.querySelector('#menu');
const stage = document.querySelector('#stage');
const effect = document.querySelector('#effect');
const keypad = document.querySelector('#keypad');
const toggle = document.querySelector('#code-toggle');
const digits = document.querySelector('#digits');
let buffer = '', timer = null, trigger = null;
function stop() {
  clearInterval(timer); timer = null; effect.replaceChildren();
  stage.hidden = true; menu.hidden = false; keypad.hidden = true;
  toggle.setAttribute('aria-expanded', 'false'); buffer = '';
  digits.textContent = 'Digite o código'; trigger?.focus();
}
function input(value) {
  if (stage.hidden) return;
  buffer = value === 'Limpar' ? '' : (buffer + value).slice(-4);
  digits.textContent = buffer ? '●'.repeat(buffer.length) : 'Digite o código';
  if (buffer === '4308') stop();
}
for (const value of ['1','2','3','4','5','6','7','8','9','Limpar','0']) {
  const key = document.createElement('button'); key.textContent = value;
  key.addEventListener('click', () => input(value)); document.querySelector('#keys').append(key);
}
document.addEventListener('keydown', event => {
  if (!event.ctrlKey && !event.metaKey && !event.altKey && /^\d$/.test(event.key)) input(event.key);
});
toggle.addEventListener('click', () => {
  keypad.hidden = !keypad.hidden; toggle.setAttribute('aria-expanded', String(!keypad.hidden));
});
function panel(title, text, theme = '') {
  const box = document.createElement('div'); box.className = `center ${theme}`;
  const heading = document.createElement('h2'); heading.textContent = title;
  const description = document.createElement('p'); description.textContent = text;
  box.append(heading, description); effect.append(box); return box;
}
function storm() {
  const messages = ['Erro 404: a tranquilidade não foi encontrada.', 'O sistema encontrou um problema inesperado.', 'Falha na operação. Tente respirar fundo.', 'Muitos erros ao mesmo tempo. Aguarde...', 'Seu café parou de responder.'];
  const box = document.createElement('article'); box.className = 'error';
  const title = document.createElement('header'); title.textContent = 'Aviso do sistema';
  const message = document.createElement('p'); message.textContent = messages[Math.floor(Math.random()*messages.length)];
  box.append(title, message); effect.append(box);
  box.style.left = `${Math.random()*Math.max(0,effect.clientWidth-box.offsetWidth)}px`;
  box.style.top = `${Math.random()*Math.max(0,effect.clientHeight-box.offsetHeight-70)}px`;
  if (effect.children.length > 24) effect.firstElementChild.remove();
}
function start(mode, button) {
  stop(); trigger = button; menu.hidden = true; stage.hidden = false; toggle.focus();
  if (mode === 'storm') { storm(); timer = setInterval(storm, 650); }
  if (mode === 'virus') {
    const box = panel('Ameaças detectadas!', 'Verificação em andamento…', 'virus');
    let count = 0; timer = setInterval(() => {
      count = Math.min(count + 7, 99); box.querySelector('p').textContent = `Verificando o sistema: ${count}% · ${count * 3} alertas encontrados`;
      if (count === 99) clearInterval(timer);
    }, 900);
  }
  if (mode === 'update') {
    const box = panel('Preparando atualizações', '99% concluído. Isso pode levar um tempinho.', 'update');
    const spinner = document.createElement('div'); spinner.className = 'spinner'; box.prepend(spinner);
  }
  if (mode === 'broken') {
    const ns = 'http://www.w3.org/2000/svg'; const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox','0 0 1000 1000'); svg.setAttribute('preserveAspectRatio','none'); svg.classList.add('cracks');
    for (let i=0; i<22; i++) {
      const angle = i*Math.PI/11; const line = document.createElementNS(ns,'polyline');
      line.setAttribute('points',`350,400 ${350+Math.cos(angle)*180},${400+Math.sin(angle)*150} ${350+Math.cos(angle+.12)*1200},${400+Math.sin(angle+.12)*1200}`);
      line.setAttribute('stroke',i%2?'#b7c1cf':'#596780'); line.setAttribute('fill','none'); line.setAttribute('stroke-width',i%3+1); svg.append(line);
    } effect.append(svg);
  }
  if (mode === 'mouse') {
    panel('Ué… cadê o cursor?', 'Parece que ele resolveu passear.');
    const cursor = document.createElement('span'); cursor.className = 'cursor'; cursor.textContent = '➤'; effect.append(cursor);
    timer = setInterval(() => { cursor.style.left = `${Math.random()*Math.max(0,effect.clientWidth-70)}px`; cursor.style.top = `${Math.random()*Math.max(0,effect.clientHeight-120)}px`; }, 700);
  }
}
document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => start(button.dataset.mode, button)));
