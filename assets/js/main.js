(function(){
  const html=document.documentElement;
  const s=localStorage.getItem("theme")||"dark"; html.dataset.theme=s;
  window.toggleTheme=()=>{const n=html.dataset.theme==="dark"?"light":"dark"; html.dataset.theme=n; localStorage.setItem("theme",n);};

  function smoothScrollToId(id){
    const el=document.getElementById(id);
    if(!el) return;
    const headerOffset=80; // sticky header height
    const rect=el.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.top - headerOffset;
    window.scrollTo({top: Math.max(targetY,0), behavior:"smooth"});
  }

  document.addEventListener("click",e=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a) return;
    const href=a.getAttribute("href");
    const id = href.slice(1);
    if(!id) return;
    e.preventDefault();
    smoothScrollToId(id);
  });
})();