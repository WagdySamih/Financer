// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });


window.addEventListener('scroll',function(){
  if(window.scrollY>150){
    document.querySelector('#navbar').style.opacity = 0.7
  } else {
    document.querySelector('#navbar').style.opacity = 1
  }
})

console.log('here!')
// Smooth scroll JQUERY WAY
$('#navbar a, .btn').on('click', function () {
  console.log('here!')
  if (this.hash !== '') {
    event.preventDefault()
    console.log('here!')
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 800)
  }
})


// Map Box Configuration 
mapboxgl.accessToken = 
  'pk.eyJ1Ijoid2FnZHktc2FtaWgiLCJhIjoiY2s1bjUzZWxxMDNmaTNtbXBlMGc1ZnBrbSJ9.dY8SgSgnfXXk9FtAb9FQcg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [29.9167, 	31.2000],
  zoom: 10
});