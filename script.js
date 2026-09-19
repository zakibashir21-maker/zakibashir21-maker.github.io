const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card=>{card.hidden = f!=='all' && !card.dataset.category.split(' ').includes(f)});
}));

document.querySelectorAll('.details-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  const d=btn.nextElementSibling; const open=d.classList.toggle('open');
  btn.textContent = btn.textContent.replace(open ? '+' : '−', open ? '−' : '+');
}));

document.getElementById('year').textContent=new Date().getFullYear();
