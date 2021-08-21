$('.callback-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="ico/prev.svg" alt=""></button>',
               nextArrow: '<button type="button" class="slick-btn slick-next"><img src="ico/next.svg" alt=""></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.track-slider').slick({
    nextArrow: '<button type="button" class="track-btn track-next"><img src="ico/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="track-btn track-prev"><img src="ico/prev.svg" alt=""></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 9000,
    
    infinite: false,
    focusOnSelect: false,
  });

  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
  })

  