/* Hero parallax: fade, lift and zoom the slider as the page scrolls. */
(function(){
var hs=document.querySelector('.hs'); if(!hs) return;
var ticking=false;
function upd(){ticking=false;
  var h=hs.offsetHeight||1, y=Math.min(Math.max(window.scrollY,0),h);
  var p=y/h;
  hs.style.setProperty('--ho',(1-p*1.6).toFixed(3));
  hs.style.setProperty('--hy',(-p*80).toFixed(1)+'px');
  hs.style.setProperty('--hz',(1+p*0.08).toFixed(4));
}
window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(upd);}},{passive:true});
upd();
})();
