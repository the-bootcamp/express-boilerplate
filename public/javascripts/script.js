document.addEventListener('DOMContentLoaded', () => {

  console.log('JS static file loaded :)');

}, false);

$('.carousel').carousel({
  interval: 6000,
  pause: "false",
  wrap:true
});

$('.carousel-item:first-child').addClass('active')
