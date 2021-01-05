// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  $(".panel").click(function(){
    $(".panel").removeClass("active");
    $(this).addClass("active");
    
    
 });

var typed = new Typed('.typ2', {
  strings: ['Create Your', 'Own Design'],
  smartBackspace: true,
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  showCursor: false
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:40,
  nav:true,
  stagePadding: 100,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

var typed = new Typed('.typ3', {
  strings: ['Some OF Our', 'Product Categories'],
  smartBackspace: true,
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  showCursor: false
});


anime({
  targets: '.cr45',
  keyframes: [
    {backgroundColor: '#a3d2ca'},
    {backgroundColor: '#e6b566'},
    {backgroundColor: '#5eaaa8'}
  ],
  duration: 10000,
  loop: true
});

$(window).on("load",function(){
  $(".loader").fadeOut("slow");
});


















