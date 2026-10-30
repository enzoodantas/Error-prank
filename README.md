# Error Prank — edição brasileira 🇧🇷

Brincadeiras visuais em **HTML, CSS e JavaScript**, com interface em português brasileiro e layout adaptável para computador, tablet e celular.

## Créditos e agradecimentos

Este projeto é um fork do [Computur Prank Pack, criado por FW-DOOM](https://github.com/FW-DOOM/computur). Obrigado ao desenvolvedor original pela ideia e pelos efeitos que deram origem a esta adaptação! A autoria do projeto original continua sendo de **FW-DOOM**.

Eu, [Enzo Dantas (@enzoodantas)](https://github.com/enzoodantas), reescrevi a interface principal em tecnologias web para facilitar o uso em diferentes sistemas operacionais e tornar os textos mais acessíveis ao público brasileiro. Esta edição usa JavaScript, HTML e CSS, sem precisar instalar Python ou compilar um executável.

## Arquivo para compartilhar

Envie **`pegadinha.html`**. Ao baixar e abrir esse arquivo no navegador, a atualização infinita começa automaticamente, sem escolher um efeito. Tudo está embutido no HTML. Apenas baixar não executa a simulação; é preciso abrir o arquivo. Prévias de anexos podem bloquear JavaScript.

Digite **4308** para encerrar; em telas de toque, use o botão **Código**. O efeito acontece dentro da aba, que pode ser fechada normalmente.

`index.html` e `pegadinha.html` abrem diretamente na atualização infinita, sem menu inicial. O código 4308 encerra o efeito e revela o catálogo. `node bundle.cjs` atualiza os dois arquivos HTML.

## Como usar

1. Clique em **Code → Download ZIP** e extraia a pasta.
2. Abra `index.html` em um navegador atualizado.
3. A atualização infinita começa automaticamente.
4. Digite **4308** para encerrar e voltar ao menu.

No celular ou tablet, toque em **Código** e digite **4308** no teclado da própria página. Fechar a aba também encerra os efeitos. O código não é uma senha de segurança: ele está no JavaScript.

Para compartilhar, envie apenas `index.html`: ele já inclui os estilos e o JavaScript. O destinatário deve baixar e abrir o arquivo em um navegador, não no visualizador de anexos do aplicativo de mensagens. Em celulares, a abertura de HTML local depende do navegador e do gerenciador de arquivos; hospedar o `index.html` em um servidor estático facilita o acesso por link.

## Efeitos da versão web

| Efeito | Comportamento |
| --- | --- |
| Chuva de erros | Avisos dentro da página, limitados a 24 elementos simultâneos |
| Alerta de vírus | Progresso e contagem fictícios |
| Atualização infinita | Tela de atualização parada em 99% |
| Tela quebrada | Rachaduras desenhadas em SVG |
| Cursor maluco | Cursor ilustrado que muda de posição dentro da página |

Todos os efeitos da nova página são simulações. Ela não acessa arquivos, não controla o cursor real, não abre novas janelas, não modifica configurações e não instala nada. Faça a brincadeira com quem aceite participar.

## Compatibilidade

A versão web foi feita para navegadores modernos no Windows, Linux, macOS, ChromeOS, Android e iOS. A compatibilidade depende do navegador, não de um executável específico para cada sistema. Não há garantia de funcionamento em todo dispositivo ou navegador antigo; a matriz completa de dispositivos ainda não foi testada.

Os arquivos funcionam sem dependências externas, fontes remotas ou conexão depois de baixados. O HTML distribuído já está pronto. Ao editar `styles.css` ou `app.js`, execute `node bundle.cjs` para atualizar o conteúdo embutido no `index.html`. Node.js é necessário apenas para essa manutenção, nunca para quem abre a brincadeira. Para conferir a sintaxe durante o desenvolvimento, opcionalmente use `node --check app.js`.

## Estrutura e legado

- `index.html`: nova interface em português brasileiro.
- `styles.css`: layout responsivo e estilos dos efeitos.
- `app.js`: simulações e encerramento por código.
- `legacy/index.html`: página inicial original, preservada para referência; seus links relativos podem exigir ajuste.
- `legacy/README-original.md`: documentação original do autor.
- Arquivos `.py`, `compile_all.bat` e `chrome_version/`: implementação original preservada. Não são necessários para a nova versão web e continuam com suas próprias dependências e comportamentos.

Esta migração substitui o ponto de entrada principal por uma implementação web. Os efeitos específicos do sistema operacional e a extensão original não foram portados integralmente. As descrições da nova versão não constituem uma auditoria do legado.
