$(document).ready(function () {

  $('#btn_more').on('click', function(){
    if( $('#about').hasClass('about_visible') ){
      $(this).html('Читати більше');
    } else {
      $(this).html('Читати менше');
    }
    $('#about').toggleClass('about_visible');
  })
                         
    $('#add').on('click', function(){
      let counter = parseInt($('#counter').html(), 10);
      $('#counter').html(counter + 1);
      
      $('.header__counter_field').removeClass('hide_elem');
      $('.header__counter_field').fadeIn(1000, function(){
        setTimeout(function(){
          $('.header__counter_field').fadeOut(1000);
        })
      })
    });

  $('.team_slick').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick_arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick_arrow slick-next"></button>',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.header__menu_btn').on('click', function () {
    if( !$('.for_toggle').hasClass('active') ){
      $('.for_toggle').addClass('active');
      $('.header__menu').slideDown(500);
    } else {
      $('.header__menu').slideUp(500)
        .promise().done(function(){
          $('.for_toggle').removeClass('active');
        });
    }
  });
})
