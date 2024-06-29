const lft1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
      // else{
      //   entry.target.classList.remove('show');
      // }
    });
  });
  
  const lft = document.querySelectorAll('.left');
  lft.forEach((el)=> lft1.observe(el));
  
  
  
  const elias = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('seeme');
      }
      // else{
      //   entry.target.classList.remove('seeme');
      // }
    });
  });
  
  
  const contactme = document.querySelectorAll('.right');
  contactme.forEach((el)=> elias.observe(el));
  
  const btm = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('seeme');
      }
      // else{
      //   entry.target.classList.remove('seeme');
      // }
    });
  });
  
  
  const bm = document.querySelectorAll('.botom');
  bm.forEach((el)=> btm.observe(el));
  
  
  const za = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('zaq11');
      }
      // else{
      //   entry.target.classList.remove('zaq11');
      // }
    });
  });
  
  
  const zaa = document.querySelectorAll('.zaq1');
  zaa.forEach((el)=> za.observe(el));


  let goTopBtn = document.querySelector("#goTopBtn");
  window.onscroll = function(){
    scrollFunction();
  };

  function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      goTopBtn.style.display = "flex";
    }else{
      goTopBtn.style.display = "none";
    }
  }