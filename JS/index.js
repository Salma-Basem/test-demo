$(document).ready(function() {
  $('.accordion h2').click(function() {
    let $paragraph = $(this).next('p');
    if ($paragraph.is(':visible')) {
      $paragraph.slideUp();
    } else {
      $('.accordion p').slideUp();
      $paragraph.slideDown();
    }
  });
});




  function updateCountDown()
  {
    
let countDownDate = new Date("November 13, 2024 15:37:25").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  let cartona =`
      <div class="col-md-3 ">
      <div class="  d-flex justify-content-center  align-content-center align-items-center">
        <h6 class="border border-1 border-white p-5 text-white fw-bolder"> ${days}D</h6>
      </div>
  </div>
  <div class="col-md-3 ">
    <div class="  d-flex justify-content-center  align-content-center align-items-center">
      <h6 class="border border-1 border-white p-5 text-white fw-bolder">${hours}h</h6>
    </div>
  </div>
  <div class="col-md-3 ">
  <div class="  d-flex justify-content-center  align-content-center align-items-center">
    <h6 class="border border-1 border-white p-5 text-white fw-bolder">${minutes}m</h6>
  </div>
  </div>
  <div class="col-md-3 ">
  <div class="  d-flex justify-content-center  align-content-center align-items-center">
  <h6 class="border border-1 border-white p-5 text-white fw-bolder">${seconds}s</h6>
  </div>`;
   document.getElementById('rowData').innerHTML=cartona
  


  
}, 1000);
  }

  updateCountDown()



//character textbox
let textarea = document.getElementById('myTextarea');
  let counter = document.getElementById('counter');
  textarea.addEventListener('input', function() {
    let text = textarea.value;
    let charCount = text.length;

    if (charCount > 100) {
      document.querySelector('#numberCharacter').innerHTML= 'your available character finished ';

    } else {
     
     document.querySelector('#numberCharacter').innerHTML=(100 - charCount);

    }
  });

  textarea.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      textarea.value = '';
      document.querySelector('#numberCharacter').innerHTML='100  ';
      counter.classList.remove('exceeded');
    }
  });

  textarea.addEventListener('keyup', function() {
    let text = textarea.value;
    let charCount = text.length;

    if (charCount === 0) {
      document.querySelector('#numberCharacter').innerHTML = '100 ';
      counter.classList.remove('exceeded');
    }
  });

  $('a').click(function(e)
{
  let linkHref =$(e.target).attr('href');
  let sectionOffset = $(linkHref).offset().top;
  $('body').animate({scrollTop:sectionOffset },1000)

})






$('#openBtn').click(function()
{
  $('#sideNav').animate({left:'0px'},500);
  $('#openBtn').animate({left:'200px'},500)
})

$('#closeBtn').click(function()
{
  $('#sideNav').animate({left:'-200px'},500);
  $('#openBtn').animate({left:'0px'},500)
})