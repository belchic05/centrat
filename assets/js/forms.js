const FORMSPREE_ENDPOINT = "";
const APPS_SCRIPT_URL = "";
async function sendForm(form){
  const data = Object.fromEntries(new FormData(form));
  data.source = "centrat-landing"; data.page = location.pathname;
  const body=JSON.stringify(data), headers={"Content-Type":"application/json"};
  let ok=false, via="";
  try {
    if(APPS_SCRIPT_URL){ const r=await fetch(APPS_SCRIPT_URL,{method:"POST",headers,body}); ok=r.ok; via="Google Apps Script"; }
    else if(FORMSPREE_ENDPOINT){ const r=await fetch(FORMSPREE_ENDPOINT,{method:"POST",headers,body}); ok=r.ok; via="Formspree"; }
    else { window.location.href=`mailto:info@centrat.ru?subject=Запрос%20КП&body=${encodeURIComponent((data.name||"")+"%0A"+(data.email||data.phone||"")+"%0A"+(data.message||""))}`; return; }
  } catch(err) { console.error(err); }
  const msg=form.querySelector(".form-msg");
  if(ok){ if(msg) msg.textContent=`Спасибо! Заявка отправлена (${via}).`; form.reset(); }
  else  { if(msg) msg.textContent="Ошибка отправки. Напишите на info@centrat.ru"; }
}
document.addEventListener("submit", e=>{ const form=e.target.closest("form[data-ajax]"); if(!form) return; e.preventDefault(); sendForm(form); });