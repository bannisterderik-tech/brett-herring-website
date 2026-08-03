
document.addEventListener('DOMContentLoaded',()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:0,rootMargin:'0px 0px 25% 0px'});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  const fall=()=>document.querySelectorAll('.rv:not(.on)').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight*1.3)el.classList.add('on')});
  addEventListener('scroll',fall,{passive:true});setTimeout(fall,250);
  const b=document.querySelector('.nav-burger'),l=document.querySelector('.nav-links');
  if(b)b.addEventListener('click',()=>l.classList.toggle('open'));
});
function askBrett(kind){
  const n=document.getElementById('f-name')?.value||'';
  const p=document.getElementById('f-phone')?.value||'';
  const m=document.getElementById('f-msg')?.value||'';
  const s=encodeURIComponent((kind==='sell'?'Selling':'Buying')+' inquiry from '+n);
  const b=encodeURIComponent('Name: '+n+'\nPhone: '+p+'\n\n'+m);
  location.href='mailto:brett@theoperativegroup.com?subject='+s+'&body='+b;
}
