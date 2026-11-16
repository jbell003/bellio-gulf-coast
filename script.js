(function(){
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  if(btn && menu){
    function setOpen(o){menu.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu');}
    btn.addEventListener('click',function(){setOpen(!menu.classList.contains('open'));});
    menu.addEventListener('click',function(e){if(e.target.tagName==='A')setOpen(false);});
  }
  var form=document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var f=new FormData(form);
    var body='Name: '+f.get('name')+'\nBusiness: '+f.get('business')+'\nReply to: '+f.get('reply')+'\nInterested in: '+f.get('interest')+'\n\n'+f.get('message');
    var subject='Bellio Gulf Coast inquiry from '+f.get('name');
    window.location.href='mailto:belljonathan45@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
})();
