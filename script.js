let menu= document.querySelector('#menu-bars');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay:7400,
      disableOnInteraction: false,
    },
    pagination: {
      el:".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay:7400,
      disableOnInteraction: false,
    },
    
    loop:true,
    breakpoints:{
      0:{
        slidesperview: 1,
      },
      640:{
        slidesperview: 2,
      },
      768:{
        slidesperview: 2,
      },
      1024:{
      slidesperview:3,
      },
    },
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

  }

  function fadeOut(){
    setInterval(loader,6900);
  }
  window.onload = fadeOut;