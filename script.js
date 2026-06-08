/* ============================================================
   CARTA DIGITAL DE AMOR — script.js
   ============================================================ */

/* ──────────────────────────────────────────────
   ★ CONFIGURAÇÕES — edite aqui para personalizar
   ────────────────────────────────────────────── */
const CONFIG = {
  belovedName:      "Meu Amor",           // Nome exibido na abertura
  coupleName:       "Eu & Você",          // Nomes do casal no encerramento
  relationshipDate: "2020-01-15",         // Data de início do relacionamento (YYYY-MM-DD)
  relationshipLabel:"Desde 15 de Janeiro de 2020",

  letterText: `Meu amor,

Cada dia ao seu lado é um presente que o universo me deu. Quando te olho, vejo a pessoa mais incrível que já conheci — cheia de luz, força e carinho.

Você faz meus dias mais coloridos e meus sorrisos mais verdadeiros. Cada pequeno momento com você se torna uma memória que guardo com todo o cuidado no meu coração.

Escrevo essas palavras porque quero que você saiba: você é meu lar. Onde você estiver, é lá que eu quero estar.

Te amo mais do que qualquer palavra consegue dizer. ❤️`,

  letterSignature:  "Para sempre seu(sua) 💕",

  /* Fotos do carrossel: substitua pelas URLs/caminhos das suas fotos.
     Adicione quantas quiser (até 20 recomendado). */
  photos: [
    { src: "https://picsum.photos/seed/love1/700/525", caption: "Nosso primeiro encontro 💕" },
    { src: "https://picsum.photos/seed/love2/700/525", caption: "Uma noite inesquecível ✨" },
    { src: "https://picsum.photos/seed/love3/700/525", caption: "Sorrisos que iluminam 😊" },
    { src: "https://picsum.photos/seed/love4/700/525", caption: "Aventuras juntos 🌟" },
    { src: "https://picsum.photos/seed/love5/700/525", caption: "Felicidade pura 🌹" },
    { src: "https://picsum.photos/seed/love6/700/525", caption: "Momentos especiais 💖" },
  ],

  /* Linha do tempo */
  timeline: [
    { date: "Janeiro 2020",    title: "Nos conhecemos",        desc: "O dia em que o destino nos colocou no mesmo caminho." },
    { date: "Fevereiro 2020",  title: "Primeiro encontro",     desc: "Nervos, sorrisos e a certeza de que algo especial começava." },
    { date: "Março 2020",      title: "Primeiro beijo",        desc: "Um momento que ficará para sempre guardado no coração." },
    { date: "Abril 2020",      title: "Pedido de namoro",      desc: "\"Você quer namorar comigo?\" — a melhor pergunta da minha vida." },
    { date: "Dezembro 2020",   title: "Primeira viagem juntos",desc: "Descobrindo o mundo lado a lado." },
    { date: "2021",            title: "Construindo sonhos",    desc: "Cada dia escrevendo uma história mais bonita." },
  ],

  /* 100 Motivos */
  reasons: [
    "Seu sorriso",        "Sua voz",           "Seu abraço",         "Sua bondade",
    "Sua força",          "Sua risada",        "Seu olhar",          "Sua paciência",
    "Seu carinho",        "Sua lealdade",      "Sua inteligência",   "Sua garra",
    "Sua presença",       "Seu jeito único",   "Sua generosidade",   "Sua determinação",
    "Sua ternura",        "Seu apoio",         "Sua coragem",        "Sua empatia",
    "Como você me faz rir",       "Como você me acalma",     "Como você me cuida",
    "Como você me inspira",       "Como você me entende",    "Como você me surpreende",
    "Seu gosto musical",          "Seus sonhos",             "Sua criatividade",
    "Sua humildade",              "Sua honestidade",         "Sua espontaneidade",
    "Seu perfume",                "Sua elegância",           "Sua simplicidade",
    "Seu coração enorme",         "Sua compaixão",           "Sua alegria",
    "Sua forma de amar",          "Sua beleza",              "Seu toque",
    "Seu jeito de dormir",        "Sua dedicação",           "Sua confiança",
    "Sua luz interior",           "Sua arte de cozinhar",    "Seu senso de humor",
    "Suas mãos",                  "Seus olhos",              "Sua boca",
    "Como faz tudo parecer fácil","Sua fé",                  "Sua esperança",
    "Seu otimismo",               "Sua curiosidade",         "Sua espiritualidade",
    "Como você me escolhe",       "Seu abraço quente",       "Seu beijo",
    "Sua lealdade",               "Sua memória afetiva",     "Sua risada gostosa",
    "Seu cuidado com os outros",  "Sua capacidade de perdoar","Seu olhar apaixonado",
    "Sua energia",                "Sua calma",               "Sua intensidade",
    "Seu silêncio aconchegante",  "Seu jeito de me chamar",  "Como você me defende",
    "Como você me apoia",         "Como você cresce",        "Como você me motiva",
    "Sua beleza ao acordar",      "Seu cheiro",              "Sua sensibilidade",
    "Sua cumplicidade",           "Sua companhia",           "Sua jornada",
    "Seu passado que te formou",  "Seu presente que te define","Seu futuro comigo",
    "Sua família",                "Seus valores",            "Sua cultura",
    "Seu jeito de dançar",        "Seu jeito de cantar",     "Sua vergonha gostosa",
    "Sua coragem de ser você",    "Sua vulnerabilidade",     "Sua autenticidade",
    "Seu estilo",                 "Sua moda",                "Seu gosto",
    "Sua mente brilhante",        "Seu coração puro",        "Sua alma linda",
    "Você simplesmente",          "Tudo em você",            "Você. ❤️",
  ],

  /* Mensagens românticas */
  messages: [
    "\"Amar não é olhar um para o outro; é olhar juntos na mesma direção.\" — Antoine de Saint-Exupéry",
    "\"Você é a razão pela qual eu acredito que o amor é real.\"",
    "\"Em cada vida que eu vivesse, eu te encontraria e te escolheria novamente.\"",
    "\"Você me completa de formas que eu nunca soube que precisavam ser completadas.\"",
    "\"Com você aprendi que amar é a aventura mais bonita da vida.\"",
    "\"Cada momento ao seu lado é um presente que guardo para sempre.\"",
    "\"Se o amor fosse uma canção, você seria minha melodia favorita.\"",
    "\"Você é meu lar favorito no mundo inteiro.\"",
    "\"Escolho você. Todos os dias. Para sempre.\"",
  ],

  /* Música: coloque o caminho do arquivo ou URL */
  songSrc:   "music.mp3",
  songTitle: "Nossa Música Especial ♪",
};
/* ────────────────────────────────────────────── */


/* ============================================================
   UTILITÁRIOS
   ============================================================ */
const $  = (id) => document.getElementById(id);
const qs = (sel) => document.querySelector(sel);

/* ============================================================
   CHUVA DE CORAÇÕES
   ============================================================ */
(function initHeartsRain() {
  const container = $('hearts-rain');
  const symbols = ['❤️','💕','💖','💗','💓','🌹'];

  function spawnHeart() {
    const h = document.createElement('span');
    h.className = 'falling-heart';
    h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    h.style.left     = Math.random() * 100 + 'vw';
    h.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
    const dur = 6 + Math.random() * 8;
    h.style.animationDuration  = dur + 's';
    h.style.animationDelay     = Math.random() * 5 + 's';
    h.style.opacity            = 0.3 + Math.random() * 0.4;
    container.appendChild(h);
    setTimeout(() => h.remove(), (dur + 5) * 1000);
  }

  for (let i = 0; i < 18; i++) spawnHeart();
  setInterval(spawnHeart, 900);
})();

/* ============================================================
   1. TELA DE ABERTURA — partículas de coração
   ============================================================ */
(function initParticles() {
  const canvas = $('particles-canvas');
  const ctx    = canvas.getContext('2d');
  let particles = [];
  const W = () => canvas.width  = window.innerWidth;
  const H = () => canvas.height = window.innerHeight;
  W(); H();
  window.addEventListener('resize', () => { W(); H(); });

  function heartPath(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y + size * 0.3);
    ctx.bezierCurveTo(x, y, x - size, y, x - size, y + size * 0.3);
    ctx.bezierCurveTo(x - size, y + size * 0.65, x, y + size * 0.9, x, y + size * 1.1);
    ctx.bezierCurveTo(x, y + size * 0.9, x + size, y + size * 0.65, x + size, y + size * 0.3);
    ctx.bezierCurveTo(x + size, y, x, y, x, y + size * 0.3);
    ctx.closePath();
  }

  for (let i = 0; i < 35; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight + window.innerHeight,
      size: 4 + Math.random() * 10,
      speed: 0.4 + Math.random() * 0.6,
      opacity: 0.15 + Math.random() * 0.5,
      drift: (Math.random() - 0.5) * 0.4,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y  -= p.speed;
      p.x  += p.drift;
      if (p.y < -30) { p.y = canvas.height + 20; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = '#ff6b9d';
      heartPath(ctx, p.x, p.y, p.size);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ============================================================
   NOME & TEXTOS DA CONFIG
   ============================================================ */
qs('.beloved-name').textContent    = CONFIG.belovedName;
$('couple-names').textContent      = CONFIG.coupleName;
$('relationship-date').textContent = CONFIG.relationshipLabel;
$('song-title').textContent        = '♪ ' + CONFIG.songTitle;

/* ============================================================
   BOTÃO "ABRIR MINHA CARTA"
   ============================================================ */
$('open-letter-btn').addEventListener('click', () => {
  $('opening').classList.remove('active');
  $('opening').classList.add('hidden');
  $('letter-section').classList.remove('hidden');
  $('letter-section').classList.add('active');

  // Pequeno delay para a carta aparecer e abrir
  setTimeout(() => {
    $('envelope').classList.add('open');
    setTimeout(showLetterPaper, 900);
  }, 400);
});

function showLetterPaper() {
  $('letter-paper').classList.remove('hidden');
  typeText(CONFIG.letterText, $('typed-text'), 25, () => {
    const sig = document.createElement('p');
    sig.className = 'letter-signature';
    sig.innerHTML = 'Com todo meu amor,<br><em>' + CONFIG.letterSignature + '</em>';
    $('typed-text').after(sig);
    $('typed-text').classList.add('done');
    $('continue-btn').classList.remove('hidden');
  });
}

/* Efeito de digitação */
function typeText(text, el, speed, onDone) {
  let i = 0;
  el.textContent = '';
  function tick() {
    if (i < text.length) {
      el.textContent += text[i++];
      el.scrollTop = el.scrollHeight;
      setTimeout(tick, speed);
    } else if (onDone) onDone();
  }
  tick();
}

/* ============================================================
   BOTÃO "CONTINUAR"
   ============================================================ */
$('continue-btn').addEventListener('click', () => {
  $('letter-section').classList.remove('active');
  $('letter-section').classList.add('hidden');
  const main = $('main-content');
  main.classList.remove('hidden');
  main.style.opacity = 0;
  requestAnimationFrame(() => {
    main.style.transition = 'opacity 1s ease';
    main.style.opacity = 1;
  });
  initMainContent();
});

/* ============================================================
   INICIALIZA CONTEÚDO PRINCIPAL
   ============================================================ */
function initMainContent() {
  buildCarousel();
  buildTimeline();
  buildReasons();
  buildMessages();
  initCounter();
  initMusic();
  initStars();
  observeAnimations();
}

/* ============================================================
   4. CARROSSEL
   ============================================================ */
function buildCarousel() {
  const track  = $('carousel-track');
  const dotsEl = $('carousel-dots');
  const photos = CONFIG.photos;
  let current  = 0;

  photos.forEach((p, i) => {
    const img = document.createElement('img');
    img.src   = p.src;
    img.alt   = p.caption;
    img.addEventListener('click', () => openLightbox(p.src));
    track.appendChild(img);

    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function goTo(n) {
    current = (n + photos.length) % photos.length;
    track.style.transition = 'transform 0.5s cubic-bezier(.4,0,.2,1)';
    track.style.transform  = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  $('prev-btn').addEventListener('click', () => goTo(current - 1));
  $('next-btn').addEventListener('click', () => goTo(current + 1));

  // Auto-play
  setInterval(() => goTo(current + 1), 4000);
}

function openLightbox(src) {
  const lb = $('lightbox');
  $('lightbox-img').src = src;
  lb.classList.remove('hidden');
}
$('lightbox-close').addEventListener('click', () => $('lightbox').classList.add('hidden'));
$('lightbox').addEventListener('click', (e) => { if (e.target === $('lightbox')) $('lightbox').classList.add('hidden'); });

/* ============================================================
   5. LINHA DO TEMPO
   ============================================================ */
function buildTimeline() {
  const container = $('timeline');
  CONFIG.timeline.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <p class="timeline-date">${item.date}</p>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-desc">${item.desc}</p>`;
    container.appendChild(el);
  });
}

/* ============================================================
   6. CONTADOR DE AMOR
   ============================================================ */
function initCounter() {
  const start = new Date(CONFIG.relationshipDate).getTime();

  function update() {
    const now   = Date.now();
    let diff    = Math.floor((now - start) / 1000);

    const sec   = diff % 60; diff = Math.floor(diff / 60);
    const min   = diff % 60; diff = Math.floor(diff / 60);
    const hr    = diff % 24; diff = Math.floor(diff / 24);

    const years  = Math.floor(diff / 365.25);
    const months = Math.floor((diff % 365.25) / 30.44);
    const days   = Math.floor(diff % 30.44);

    $('cnt-years').textContent   = years;
    $('cnt-months').textContent  = months;
    $('cnt-days').textContent    = days;
    $('cnt-hours').textContent   = hr;
    $('cnt-minutes').textContent = min;
    $('cnt-seconds').textContent = String(sec).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

/* ============================================================
   7. MÚSICA
   ============================================================ */
function initMusic() {
  const audio  = $('audio-player');
  const btn    = $('play-pause-btn');
  const vol    = $('volume-slider');
  const prog   = $('progress-bar');

  audio.src    = CONFIG.songSrc;
  audio.volume = parseFloat(vol.value);

  btn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); btn.textContent = '⏸ Pausar'; }
    else              { audio.pause(); btn.textContent = '▶ Play'; }
  });

  vol.addEventListener('input', () => {
    audio.volume = parseFloat(vol.value);
    const pct = vol.value * 100;
    vol.style.background = `linear-gradient(to right, var(--pink) ${pct}%, #ddd ${pct}%)`;
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) prog.style.width = (audio.currentTime / audio.duration * 100) + '%';
  });
}

/* ============================================================
   8. 100 MOTIVOS
   ============================================================ */
function buildReasons() {
  const grid = $('reasons-grid');
  CONFIG.reasons.forEach((reason, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `<span class="reason-num">${i + 1}</span>${reason}`;
    grid.appendChild(card);
  });
}

/* ============================================================
   9. MENSAGENS
   ============================================================ */
function buildMessages() {
  const grid = $('messages-grid');
  CONFIG.messages.forEach(msg => {
    const card = document.createElement('div');
    card.className = 'msg-card';
    card.textContent = msg;
    grid.appendChild(card);
  });
}

/* ============================================================
   10. CÉU DE ESTRELAS
   ============================================================ */
function initStars() {
  const canvas = $('stars-canvas');
  const section = canvas.closest('.starry-sky');
  canvas.width  = section.offsetWidth;
  canvas.height = section.offsetHeight;
  const ctx = canvas.getContext('2d');

  const stars = Array.from({ length: 180 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 0.5 + Math.random() * 1.8,
    alpha: Math.random(),
    speed: 0.005 + Math.random() * 0.015,
    dir: Math.random() > 0.5 ? 1 : -1,
  }));

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.alpha += s.speed * s.dir;
      if (s.alpha >= 1 || s.alpha <= 0.1) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
      ctx.shadowColor = 'white';
      ctx.shadowBlur  = 6;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

/* ============================================================
   12. PEDIDO ESPECIAL
   ============================================================ */
$('special-btn').addEventListener('click', () => {
  $('special-modal').classList.remove('hidden');
});
$('modal-close').addEventListener('click', () => {
  $('special-modal').classList.add('hidden');
});

/* ============================================================
   14. ROLETA SURPRESA
   ============================================================ */
(function initRoulette() {
  const places = [
    { label: 'Jantar Romântico', emoji: '🍷' },
    { label: 'Cinema a Dois',    emoji: '🎬' },
    { label: 'Viagem Surpresa',  emoji: '✈️' },
    { label: 'Piquenique',       emoji: '🧺' },
    { label: 'Show ao Vivo',     emoji: '🎶' },
    { label: 'Praia',            emoji: '🏖️' },
    { label: 'Cachoeira',        emoji: '🌊' },
    { label: 'Spa Juntos',       emoji: '💆' },
    { label: 'Passeio de Barco', emoji: '⛵' },
    { label: 'Noite em Hotel',   emoji: '🏨' },
  ];

  const canvas  = $('roulette-canvas');
  const ctx     = canvas.getContext('2d');
  const cx = canvas.width / 2, cy = canvas.height / 2, r = cx - 8;
  const slice   = (Math.PI * 2) / places.length;
  const colors  = ['#ff6b9d','#ff4477','#cc2244','#f0c040','#e03060',
                   '#a01030','#ff8fb0','#d4305a','#ffd700','#e85080'];

  let angle = 0, spinning = false;

  function draw(rot) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    places.forEach((p, i) => {
      const start = rot + i * slice;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, start + slice);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + slice / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = 'white';
      ctx.font = `bold ${canvas.width < 300 ? 10 : 12}px Lato, sans-serif`;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;
      ctx.fillText(p.emoji + ' ' + p.label, r - 10, 5);
      ctx.restore();
    });
    // Centro
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,68,119,0.5)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#cc2244';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('❤', cx, cy);
  }

  draw(0);

  $('spin-btn').addEventListener('click', () => {
    if (spinning) return;
    spinning = true;
    $('roulette-result').classList.add('hidden');
    const extra  = Math.PI * 2 * (8 + Math.random() * 6);
    const target = angle + extra;
    const dur    = 4000;
    const start  = performance.now();
    const from   = angle;

    function easeOut(t) { return 1 - Math.pow(1 - t, 4); }

    function frame(now) {
      const t   = Math.min((now - start) / dur, 1);
      angle     = from + extra * easeOut(t);
      draw(angle);
      if (t < 1) { requestAnimationFrame(frame); return; }
      spinning = false;
      angle    = angle % (Math.PI * 2);
      // O ponteiro aponta para o topo (−π/2), calcular qual fatia está lá
      const norm    = ((Math.PI * 1.5 - angle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      const idx     = Math.floor(norm / slice) % places.length;
      const picked  = places[idx];
      const res     = $('roulette-result');
      res.textContent = picked.emoji + ' ' + picked.label + '!';
      res.classList.remove('hidden');
    }
    requestAnimationFrame(frame);
  });
})();

/* ============================================================
   15. CACA-PALAVRAS
   ============================================================ */
(function initWordSearch() {
  const WORDS = ['AMOR','BEIJO','ABRACO','SORRISO','CARINHO',
                 'PAIXAO','ETERNO','JUNTOS','FELIZ','LINDO'];
  const SIZE  = 12;
  let grid    = [];
  let cells   = [];
  let selecting = false;
  let selStart  = null;
  let selCells  = [];
  let found     = [];

  // Inicializa grid com pontos
  function makeGrid() {
    grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(''));
  }

  // Direções: horizontal, vertical, diagonal
  const DIRS = [[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];

  function placeWord(word) {
    const letters = word.replace('Ç','C').split('');
    const len = letters.length;
    for (let attempt = 0; attempt < 200; attempt++) {
      const [dr, dc] = DIRS[Math.floor(Math.random() * DIRS.length)];
      const row = Math.floor(Math.random() * SIZE);
      const col = Math.floor(Math.random() * SIZE);
      const endR = row + dr * (len - 1);
      const endC = col + dc * (len - 1);
      if (endR < 0 || endR >= SIZE || endC < 0 || endC >= SIZE) continue;
      let ok = true;
      for (let i = 0; i < len; i++) {
        const cr = row + dr * i, cc = col + dc * i;
        if (grid[cr][cc] !== '' && grid[cr][cc] !== letters[i]) { ok = false; break; }
      }
      if (!ok) continue;
      for (let i = 0; i < len; i++) grid[row + dr * i][col + dc * i] = letters[i];
      return true;
    }
    return false;
  }

  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function fillRandom() {
    for (let r = 0; r < SIZE; r++)
      for (let c = 0; c < SIZE; c++)
        if (!grid[r][c]) grid[r][c] = ALPHA[Math.floor(Math.random() * ALPHA.length)];
  }

  function buildDOM() {
    const container = $('ws-grid');
    container.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
    container.innerHTML = '';
    cells = [];
    for (let r = 0; r < SIZE; r++) {
      cells[r] = [];
      for (let c = 0; c < SIZE; c++) {
        const el = document.createElement('div');
        el.className = 'ws-cell';
        el.textContent = grid[r][c];
        el.dataset.r = r;
        el.dataset.c = c;
        container.appendChild(el);
        cells[r][c] = el;
      }
    }
  }

  function buildWordList() {
    const ul = $('ws-words-list');
    ul.innerHTML = '';
    WORDS.forEach(w => {
      const li = document.createElement('li');
      li.textContent = w;
      li.id = 'word-' + w;
      ul.appendChild(li);
    });
  }

  // Selecao de celulas numa linha reta entre dois pontos
  function cellsBetween(r1, c1, r2, c2) {
    const dr = Math.sign(r2 - r1), dc = Math.sign(c2 - c1);
    if (dr === 0 && dc === 0) return [[r1, c1]];
    const dist = Math.max(Math.abs(r2 - r1), Math.abs(c2 - c1));
    const res = [];
    for (let i = 0; i <= dist; i++) res.push([r1 + dr * i, c1 + dc * i]);
    return res;
  }

  function highlightSel(list) {
    // limpa selecao anterior
    document.querySelectorAll('.ws-cell.selected').forEach(el => el.classList.remove('selected'));
    list.forEach(([r, c]) => cells[r][c].classList.add('selected'));
  }

  function checkWord(list) {
    const word = list.map(([r, c]) => grid[r][c]).join('');
    const rev  = [...word].reverse().join('');
    const match = WORDS.find(w => (w === word || w === rev) && !found.includes(w));
    if (match) {
      found.push(match);
      list.forEach(([r, c]) => { cells[r][c].classList.remove('selected'); cells[r][c].classList.add('found'); });
      const li = $('word-' + match);
      if (li) li.classList.add('found-word');
      if (found.length === WORDS.length) {
        $('ws-msg').textContent = '🎉 Parabéns! Você encontrou todas as palavras! 💕';
      }
      return true;
    }
    return false;
  }

  function onStart(r, c) {
    selecting = true;
    selStart  = [r, c];
    selCells  = [[r, c]];
    highlightSel(selCells);
  }

  function onMove(r, c) {
    if (!selecting) return;
    selCells = cellsBetween(selStart[0], selStart[1], r, c);
    highlightSel(selCells);
  }

  function onEnd() {
    if (!selecting) return;
    selecting = false;
    if (!checkWord(selCells)) highlightSel([]);
    selCells = [];
  }

  function attachEvents() {
    const container = $('ws-grid');

    function getRC(e) {
      const el = e.target.closest('.ws-cell');
      if (!el) return null;
      return [+el.dataset.r, +el.dataset.c];
    }

    container.addEventListener('mousedown',  e => { const rc = getRC(e); if (rc) onStart(...rc); });
    container.addEventListener('mousemove',  e => { const rc = getRC(e); if (rc) onMove(...rc); });
    container.addEventListener('mouseup',    () => onEnd());
    container.addEventListener('mouseleave', () => onEnd());

    container.addEventListener('touchstart', e => {
      const t = e.touches[0];
      const el = document.elementFromPoint(t.clientX, t.clientY);
      if (el && el.dataset.r) onStart(+el.dataset.r, +el.dataset.c);
    }, { passive: true });
    container.addEventListener('touchmove', e => {
      const t = e.touches[0];
      const el = document.elementFromPoint(t.clientX, t.clientY);
      if (el && el.dataset.r) onMove(+el.dataset.r, +el.dataset.c);
    }, { passive: true });
    container.addEventListener('touchend', () => onEnd());
  }

  makeGrid();
  WORDS.forEach(placeWord);
  fillRandom();
  buildDOM();
  buildWordList();
  attachEvents();
})();

/* ============================================================
   INTERSECTION OBSERVER — animações ao rolar
   ============================================================ */
function observeAnimations() {
  const opts = { threshold: 0.15 };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, opts);

  document.querySelectorAll(
    '.fade-in-scroll, .timeline-item, .msg-card'
  ).forEach(el => io.observe(el));
}
