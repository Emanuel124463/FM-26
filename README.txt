FM CAREER 2026 — PROJETO ORGANIZADO

Estrutura:

src/
  main/                 Electron e janela do aplicativo
  renderer/
    index.html          Tela principal do jogo
    js/
      game.js           Lógica do jogo
      loading.js        Lógica da tela de carregamento
    css/
      style.css         Estilos do jogo
      loading.css       Estilos da tela de carregamento
    screens/
      loading.html      Tela exibida antes do jogo abrir
  assets/
    images/             Imagens usadas pelo jogo
    icons/              Ícones do aplicativo

docs/
  Auditorias e documentação

IMPORTANTE:
Os arquivos home_avatar e home_stadium não fazem parte deste projeto.

Para executar no Windows:
  npm install
  npm start

Para gerar o executável portátil:
  npm run dist

ESCUDOS OFICIAIS - FASE 2
-------------------------
A Fase 2 substitui os escudos estilizados por escudos oficiais atuais carregados
pela fonte de identidades FootyLogos. Os escudos são usados na seleção de clubes,
cabeçalho da carreira, próxima partida, pré-jogo e tabela.

Fonte dos arquivos de imagem:
https://www.footylogos.com/

Observação: nesta fase os escudos são carregados por HTTPS para evitar colocar
centenas de arquivos binários no pacote. Se um clube não estiver disponível na
fonte, o jogo usa automaticamente um fallback visual, sem quebrar a interface.
