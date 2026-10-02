const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('loadingPercent');
const loadingTip = document.getElementById('loadingTip');

const tips = [
  'Dica: Treine jovens promessas para valorizar seu clube',
  'Dica: Observe o mercado antes de vender seus jogadores',
  'Dica: Um bom elenco precisa de profundidade em todas as posições',
  'Dica: Cuide do orçamento para manter o clube saudável',
  'Dica: Analise o adversário antes de definir sua escalação'
];

let progress = 0;
let tipIndex = 0;

const timer = setInterval(() => {
  progress = Math.min(100, progress + 2);
  progressFill.style.width = `${progress}%`;
  progressPercent.textContent = `${progress}%`;

  if (progress % 20 === 0 && progress < 100) {
    tipIndex = (tipIndex + 1) % tips.length;
    loadingTip.textContent = tips[tipIndex];
  }

  if (progress >= 100) clearInterval(timer);
}, 52);
