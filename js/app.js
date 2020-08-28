$(document).ready(function(){
    $('.food-slider').slick({
      autoplay:true,
      slidesToShow:3, 
      slidesToScroll: 1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
        {
        breakpoint: 992,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }
      
    ]  

    });
    
    $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
    })
});
//Get the button
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

 //When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


