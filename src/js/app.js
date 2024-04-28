$('#clock').countdown('2030/10/10', function (event) {
  $('#hours').html(event.strftime('%H'));
  $('#minutes').html(event.strftime('%M'));
  $('#seconds').html(event.strftime('%S'));
});
$('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span class="timer-count heading-SB">%H</span>'
      + '<span class="timer-count heading-SB dots-span">%M</span>'
      + '<span class="timer-count heading-SB">%S</span>'));
    });
});



var swiper = new Swiper(".collection-slider", {
  spaceBetween: 12,
  slidesPerView: 3,
  mousewheel: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".collection-slider2", {
  spaceBetween: 12,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  thumbs: {
    swiper: swiper,
  },
});


var swiper = new Swiper(".collection-slider3", {
  spaceBetween: 12,
  slidesPerView: 3,
  mousewheel: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".collection-slider4", {
  spaceBetween: 12,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  thumbs: {
    swiper: swiper,
  },
});


var swiper = new Swiper(".collection-slider5", {
  spaceBetween: 12,
  slidesPerView: 3,
  mousewheel: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".collection-slider6", {
  spaceBetween: 12,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  thumbs: {
    swiper: swiper,
  },
});




// Select Start Here

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});

// Select End Here



//Share Popup Start Here

$(document).ready(function(){
  $(".share-pop").click(function(){
      $(".share-pop-otr").toggleClass("share-pop-active");
  });
});

//Share Popup End Here


//Filter Start Here

$(document).ready(function(){
  $(".btn-1").click(function(){
      $(".filter-1").toggleClass("filter-active");
  });
  $(".btn-2").click(function(){
      $(".filter-2").toggleClass("filter-active");
  });
  $(".btn-3").click(function(){
      $(".filter-3").toggleClass("filter-active");
  });
  $(".btn-4").click(function(){
      $(".filter-4").toggleClass("filter-active");
  });
  $(".btn-5").click(function(){
      $(".filter-5").toggleClass("filter-active");
  });
  $(".btn-6").click(function(){
      $(".filter-6").toggleClass("filter-active");
  });
  $(".btn-7").click(function(){
      $(".filter-7").toggleClass("filter-active");
  });
  $(".btn-8").click(function(){
      $(".filter-8").toggleClass("filter-active");
  });
  $(".btn-9").click(function(){
      $(".filter-9").toggleClass("filter-active");
  });
  $(".clear-filter").click(function(){
      $(".filter-activity").removeClass("filter-active");
  });
});

//Filter End Here


var swiper8 = new Swiper("#creator-slider1", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 16,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    stopOnLast: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    420: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    575: {
      slidesPerView: 5,
    },
  },
});