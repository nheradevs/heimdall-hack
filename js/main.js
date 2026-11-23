(function(){
  var topbar=document.getElementById('topbar');
  addEventListener('scroll',function(){topbar.classList.toggle('solid',scrollY>24)},{passive:true});
  // soft reveals
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  // hero parallax (reduced-motion aware)
  var bg=document.getElementById('heroBg');
  var mq=matchMedia('(prefers-reduced-motion: reduce)');
  if(!mq.matches){addEventListener('scroll',function(){bg.style.transform='translateY('+(scrollY*.12)+'px)'},{passive:true})}
  // mobile menu
  var burger=document.getElementById('burger'),menu=document.getElementById('mobile-menu');
  burger.addEventListener('click',function(){
    var open=menu.classList.toggle('open');
    burger.setAttribute('aria-expanded',open?'true':'false');
  });
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')})});
  // i18n
  var T={
    en:{
      nav_speakers:"Speakers",nav_talks:"Talks 2024",nav_sponsors:"Sponsors",nav_faq:"FAQ",nav_contact:"Contact us",
      h1:"Three days of hands-on cybersecurity, online and free.",
      lede:"Workshops where you write code, 30-minute talks and a 24-hour CTF. For starting from zero or going deeper, from wherever you are.",
      when:"Sep 24 to 26",where:"Online, from anywhere on Earth",cta:"Get my seat",
      h_speakers:"Speakers",
      r1:"Distributed systems engineer",r2:"Cloud security researcher",r3:"DevSecOps platform developer",r4:"Cloud services architect",r5:"Networks and protocols specialist",r6:"Machine learning engineer",r7:"Data analysis and visualization",r8:"Accessible interfaces developer",
      h_talks:"Talks 2024",
      t1:"From code to breach: anatomy of an intrusion",t2:"Phishing: what attackers see when they look at you",t3:"Automated recon without tripping alarms",
      h_about:"Heimdall Hack 2025",
      a1:"Three days online with workshops where you actually write code, talks with no filler and a 24-hour CTF. All you need is a computer, a stable connection and zero excuses.",
      a2:"No experience? No problem: every workshop lists its level and there are starter tracks. What matters is practicing and connecting with the community; leave the ego at home.",
      cta2:"I want to join the challenge",
      h_sponsors:"Sponsors",sponsors_note:"Demo brands. Your logo could be here: write to us.",
      h_faq:"FAQ",
      q1:"Do I need prior experience?",a1:"All you need is curiosity and the will to learn. There are starter tracks and every workshop lists its level.",
      q2:"Should I bring anything special?",a2:"A laptop and charger. For workshops and the CTF you need permission to install tools on your machine.",
      q3:"Do the talks cost anything?",a3:"Admission is free. Workshop seats are limited and confirmed in registration order, not by insistence.",
      q4:"Does the CTF cost anything? Are there prizes?",a4:"It is free and it pays out: the prize list is published in the talks section two weeks before the event.",
      q5:"Can I join from any country?",a5:"Yes. The event is online: live talks and the CTF on the event platform. Your location matters less than your connection.",
      h_contact:"Contact us",demo:"Demo site: this form does not send data.",
      f_email:"Email",f_name:"Full name",f_msg:"Message",f_send:"Send message",
      foot_tag:"Three days of challenges, community and learning",
      rights:"All rights reserved Heimdall Hack © 2025",site_by:"Site built by Karen Gil",
      legal:"Legal",l_priv:"Privacy Policy",l_cook:"Cookie Policy",l_notice:"Legal Notice",l_a11y:"Accessibility Statement",
      follow:"Follow us",demo2:"Demo page built for a portfolio. No data is collected or sent."
    }
  };
  var es={},n=document.querySelectorAll('[data-i18n]');
  n.forEach(function(x){es[x.dataset.i18n]=x.textContent});
  document.getElementById('langBtn').addEventListener('click',function(){
    var en=document.documentElement.lang!=='en';
    document.documentElement.lang=en?'en':'es';
    this.textContent=en?'ES':'EN';
    this.setAttribute('aria-label',en?'Switch language':'Cambiar idioma');
    n.forEach(function(x){x.textContent=en?T.en[x.dataset.i18n]:es[x.dataset.i18n]});
  });
})();