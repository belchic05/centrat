(function(){
  const html=document.documentElement;
  const s=localStorage.getItem("theme")||"dark"; html.dataset.theme=s;
  window.toggleTheme=()=>{const n=html.dataset.theme==="dark"?"light":"dark"; html.dataset.theme=n; localStorage.setItem("theme",n);};
  document.addEventListener("click",e=>{
    const a=e.target.closest('a[href^="#"]'); if(!a) return;
    const id=a.getAttribute("href").slice(1); const el=document.getElementById(id); if(el){ e.preventDefault(); el.scrollIntoView({behavior:"smooth", block:"start"}); }
  });
})();