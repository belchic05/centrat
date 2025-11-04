(function(){
  const html=document.documentElement;
  const s=localStorage.getItem("theme")||"dark"; html.dataset.theme=s;
  window.toggleTheme=()=>{const n=html.dataset.theme==="dark"?"light":"dark"; html.dataset.theme=n; localStorage.setItem("theme",n);};

  const btn=document.getElementById("menuToggle");
  const nav=document.getElementById("navLinks");
  if(btn && nav){
    function close(){ nav.classList.remove("open"); btn.setAttribute("aria-expanded","false"); }
    function open(){ nav.classList.add("open"); btn.setAttribute("aria-expanded","true"); }
    btn.addEventListener("click",()=>{ nav.classList.contains("open")?close():open(); });
    nav.addEventListener("click",(e)=>{
      if(e.target.tagName.toLowerCase()==="a"){ close(); }
    });
    document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") close(); });
    document.addEventListener("click",(e)=>{
      if(!e.target.closest(".nav-links") && !e.target.closest("#menuToggle")) close();
    });
  }
})();