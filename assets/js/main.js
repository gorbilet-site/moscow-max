document.documentElement.classList.add('js');
(function(){
  var hdr=document.getElementById('hdr');
  var prog=document.getElementById('progress');
  function onScroll(){
    var y=window.scrollY||document.documentElement.scrollTop;
    if(y>window.innerHeight*0.72){hdr.classList.add('scrolled');}else{hdr.classList.remove('scrolled');}
    var h=document.documentElement.scrollHeight-window.innerHeight;
    prog.style.width=(h>0?(y/h*100):0)+'%';
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
