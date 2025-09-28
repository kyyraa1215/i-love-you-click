// Tiny helper: read query params
const params = new URLSearchParams(location.search);
const who = params.get('to') || params.get('name') || 'ゆきな';
const perClick = Math.min(Math.max(parseInt(params.get('count') || '80', 10), 1), 500);
const text = (params.get('text') || 'i love you ❤️').trim();

// Personalize headline
document.getElementById('who').textContent = who;

// Elements
const spawn = document.getElementById('spawn');
const grid  = document.getElementById('grid');
const heartsLayer = document.getElementById('hearts');

function rand(min, max){ return Math.random() * (max - min) + min; }

function burstHearts(x, y, amount=30){
  const rect = document.body.getBoundingClientRect();
  for(let i=0;i<amount;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = Math.random() < 0.6 ? '❤️' : (Math.random() < .5 ? '💖' : '💘');
    const startX = x ?? rand(0, rect.width);
    const startY = y ?? rect.height - 20;
    h.style.setProperty('--x', `${startX - rand(40,60)}px`);
    h.style.setProperty('--y', `${startY + rand(0,60)}px`);
    h.style.setProperty('--dur', `${rand(2.6, 4.2)}s`);
    heartsLayer.appendChild(h);
    // cleanup
    h.addEventListener('animationend', ()=> h.remove());
  }
}

function addChips(n=perClick){
  const frag = document.createDocumentFragment();
  for(let i=0;i<n;i++){
    const d = document.createElement('div');
    d.className = 'chip';
    d.textContent = text;
    frag.appendChild(d);
  }
  grid.appendChild(frag);
}

// Button click
spawn.addEventListener('click', (e)=>{
  e.preventDefault();
  const rect = e.target.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  burstHearts(cx, cy, Math.min(60, Math.ceil(perClick/2)));
  addChips(perClick);
  // polite announce
  grid.setAttribute('aria-busy','true');
  setTimeout(()=> grid.setAttribute('aria-busy','false'), 300);
});

// Also burst on first load for a subtle tease
window.addEventListener('load', ()=> burstHearts());
