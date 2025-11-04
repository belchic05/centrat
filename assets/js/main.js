
(function(){
  // apply saved theme
  const saved = localStorage.getItem('theme');
  if(saved==='light'){ document.body.classList.add('light'); }

  // logo swapper
  const logo = document.getElementById('brand-logo');
  function applyLogo(){
    if(!logo) return;
    logo.src = document.body.classList.contains('light')
      ? 'assets/img/logo-light.png'
      : 'assets/img/logo-dark.png';
  }
  applyLogo();

  // theme toggle
  const btn = document.querySelector('.theme-btn');
  if(btn){
    btn.addEventListener('click', ()=>{
      document.body.classList.toggle('light');
      localStorage.setItem('theme', document.body.classList.contains('light')?'light':'dark');
      applyLogo();
    });
  }

  // CTA scroll to contacts
  const contact = document.getElementById('contact');
  if(contact){
    document.querySelectorAll('a[href="#contact"], .js-scroll-contact').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        contact.scrollIntoView({behavior:'smooth', block:'start'});
        contact.classList.add('highlight-contact');
        setTimeout(()=>contact.classList.remove('highlight-contact'), 2200);
      });
    });
  }
})();
