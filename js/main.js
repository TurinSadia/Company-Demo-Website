
//MENU BAR

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {

        MenuItems.style.maxHeight = "100%";
    } else {

        MenuItems.style.maxHeight = "0px";
    }

}


//scroll-top
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 60){
      $('#topBtn').fadeIn();
    }
     else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});


//MIX-IT UP

$(document).ready(function () {

  //mixitup(PROJECT-SECTION)
  var mixer = mixitup('.container-box')



});


//for logo slider

const nextIcon = '<i class="fas fa-chevron-right"></i>';
const prevIcon = '<i class="fas fa-chevron-left"></i>';

$('#logo-slider').owlCarousel({
  loop:true,
  autoplay: false,
  margin:10,
  dots:false,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      800:{
        items:2
    },
      900:{
          items:2
      },
      1000:{
          items:4
      }
  }
})


//for testimonial section


const nextPg = '<i class="fas fa-long-arrow-alt-right"></i>';
const prevPg = '<i class="fas fa-long-arrow-alt-left"></i>';

$('#quote-card').owlCarousel({
  loop:true,
  autoplay: false,
  margin:5,
  dots:false,
  nav: true,
  navText: [
  prevPg,
  nextPg
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      800:{
        items:1
    },
      900:{
          items:1
      },
      1000:{
          items:1
      }
  }
})




$('#team-slider').owlCarousel({
  loop:true,
  autoplay: false,
  margin:10,
  dots:false,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      800:{
        items:2
    },
      900:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
