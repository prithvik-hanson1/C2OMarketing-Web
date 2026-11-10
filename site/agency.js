(() => {
 document.documentElement.classList.add('js-ready');
 const menu=document.querySelector('.menu'),nav=document.querySelector('#navigation');
 const close=()=>{menu?.setAttribute('aria-expanded','false');nav?.classList.remove('open');};
 menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){close();menu.focus();}});
 nav?.addEventListener('click',e=>{if(e.target.closest('a'))close();});
 window.addEventListener('resize',()=>{if(innerWidth>850)close();},{passive:true});
 const groups=[...document.querySelectorAll('[data-group]')],filters=[...document.querySelectorAll('.filters a')];
 function filter(){if(!groups.length)return;const key=decodeURIComponent(location.hash.slice(1));const target=document.getElementById(key);const group=groups.find(g=>g.id===key)||target?.closest('[data-group]');groups.forEach(g=>{g.hidden=!!group&&g!==group;});filters.forEach(a=>a.setAttribute('aria-current',String(a.hash==='#'+group?.id)));document.querySelector('.filter-status').textContent=group?`Showing ${group.querySelector('h2').textContent}.`:'Showing all services.';}
 filter();window.addEventListener('hashchange',filter);
 document.querySelector('[data-show-all]')?.addEventListener('click',()=>{history.replaceState(null,'',location.pathname);filter();});
 const form=document.querySelector('.enquiry'),select=document.querySelector('[name="service"]');
 if(form){const selected=new URLSearchParams(location.search).get('service');if(selected&&[...select.options].some(o=>o.value===selected))select.value=selected;
 const note=document.querySelector('.selection-note');const update=()=>{note.textContent=select.value?`You’re enquiring about ${select.options[select.selectedIndex].text}. You can change this above.`:'';};update();select.addEventListener('change',update);
 form.addEventListener('submit',async e=>{if(!window.fetch)return;e.preventDefault();if(!form.reportValidity())return;const button=form.querySelector('button[type="submit"]'),status=form.querySelector('.form-status');button.disabled=true;form.setAttribute('aria-busy','true');status.classList.remove('error');status.textContent='Sending your enquiry…';
 try{const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()});if(!response.ok)throw new Error('Submission not accepted');location.assign('/thanks.html');}
 catch{status.classList.add('error');status.textContent='Your enquiry could not be confirmed. Your details are still here. Please check your connection and try again.';button.disabled=false;form.removeAttribute('aria-busy');}
 });}
})();

