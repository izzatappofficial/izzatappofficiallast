/*================================================
*
* Template name : Ones
* Version       : 1.2.2
* Author        : FlaTheme
* Author URL    : http://themeforest.net/user/flatheme
*
* Table of Contents :
* 1.  Page Preloaders
* 2.  Scrollspy
* 3.  Smoothscroll links
* 4.  Scroll To Top
* 5.  Scroll Animations Library
* 6.  Header Menu
* 7.  Fullscreen Menu
* 8.  Sidebar Menu
* 9.  Background Image
* 10. Parallax
* 11. Sliders
* 12. Portfolio Masonry
* 13. Portfolio Grid
* 14. Justified Gallery
* 15. Masonry Grid
* 16. Lightbox
* 17. Accordion
* 18. Counter
* 19. Countdown
* 20. Google Maps
* 21. Contact Form
*
================================================*/
"use strict";

var $htmlBody = $("html,body");
var $body = $("body");
var $windowWidth = $(window).width();


/*===============================================
  1. Page Preloaders
===============================================*/
$(window).on("load", function () {
  $body.addClass("loaded");
});

if ($body.attr("data-preloader") === "light") {
  $body.append($("<div class='preloader'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"));
}
else if ($body.attr("data-preloader") === "dark") {
  $body.append($("<div class='preloader dark'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"));
}
else if ($body.attr("data-preloader") === "black") {
  $body.append($("<div class='preloader black'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"));
}


/*===============================================
  2. Scrollspy
===============================================*/
$body.scrollspy({ target: '.header-menu' });


/*===============================================
  3. Smoothscroll links
===============================================*/
var $smoothscroll = $(".smoothscroll, .nav-link:not(.nav-dropdown-toggle)");

$smoothscroll.on("click", function(e) {
  $htmlBody.animate({scrollTop: $(this.hash).offset().top}, 450, "easeInOutQuart");
  e.preventDefault();
});


/*===============================================
  4. Scroll to Top
===============================================*/
var $scrollToTop = $(".scrolltotop");

$(window).on("scroll", function(){
  if ($(this).scrollTop() > 700) { // 700px from top
    $scrollToTop.addClass("scrolltotop-show");
  }
  else {
    $scrollToTop.removeClass("scrolltotop-show");
  }
});

$scrollToTop.on("click", function(e) {
  $htmlBody.animate({scrollTop : 0}, 450, "easeInOutQuart");
  e.preventDefault();
});


/*===============================================
  5. Scroll Animations Library
===============================================*/
sal({ duration: 500 });


/*===============================================
  6. Header Menu
===============================================*/
//
// Auto Hide //
//
var c, currentScrollTop = 0, header = $(".header.sticky-autohide");

$(window).on("scroll", function () {
  var a = $(window).scrollTop();
  currentScrollTop = a;

  if (c < currentScrollTop && a > 210) {
    header.addClass("hide");
  } else if (c > currentScrollTop && !(a <= 210)) {
    header.removeClass("hide");
  }

  c = currentScrollTop;
});

if ($(".header.sticky-autohide:not(.header-lg, .header-xl, .absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder'></div>").insertBefore(".header.sticky-autohide");
}
if ($(".header-lg.sticky-autohide:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-lg'></div>").insertBefore(".header-lg.sticky-autohide");
}
if ($(".header-xl.sticky-autohide:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-xl'></div>").insertBefore(".header-xl.sticky-autohide");
}

//
// Sticky //
//
if ($(".header.sticky:not(.header-lg, .header-xl, .absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder'></div>").insertBefore(".header.sticky");
}
if ($(".header-lg.sticky:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-lg'></div>").insertBefore(".header-lg.sticky");
}
if ($(".header-xl.sticky:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-xl'></div>").insertBefore(".header-xl.sticky");
}

//
// Absolute //
//
if ($(".absolute-light").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.sticky-autohide, .header.sticky");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-light");
    }
    else {
      headerFixed.addClass("absolute-light");
    }
  });
}
if ($(".absolute-dark").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.sticky-autohide, .header.sticky");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-dark");
    }
    else {
      headerFixed.addClass("absolute-dark");
    }
  });
}

//
// Open/Close Header Menu //
//
var headerMenu = $(".header-menu");
var headerToggle = $(".header-toggle");

headerToggle.on("click", function() {
  if (headerMenu.hasClass("show")) {
    headerMenu.removeClass("show");
    headerToggle.removeClass("toggle-close");
  }
  else {
    headerMenu.addClass("show");
    headerToggle.addClass("toggle-close");
  }
});

$(document).on("click", function(e) {
  if ( $(e.target).closest(".header-menu, .header-toggle").length === 0 ) {
    if (headerMenu.hasClass("show")) {
      headerMenu.removeClass("show");
      headerToggle.removeClass("toggle-close");
    }
  }
});

//
// Dropdown Menu //
//
$(".nav-dropdown-toggle").each(function() {
  var $this = $(this);
  if ($this.parent(".nav-item").children(".nav-dropdown").length) {
    var navDropdown = $this.parent(".nav-item").children(".nav-dropdown");
    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        navDropdown.removeClass("show");
      }
      else {
        $this.addClass("active");
        navDropdown.addClass("show");
      }
      e.preventDefault();
    });
  }
});

//
// Subdropdown Menu //
//
$(".nav-subdropdown-toggle").each(function() {
  var $this = $(this);
  if ($this.parent(".nav-dropdown-item").children(".nav-subdropdown").length) {
    var navSubDropdown = $this.parent(".nav-dropdown-item").children(".nav-subdropdown");
    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        navSubDropdown.removeClass("show");
      }
      else {
        $this.addClass("active");
        navSubDropdown.addClass("show");
      }
      e.preventDefault();
    });
  }
});


/*===============================================
  7. Fullscreen Menu
===============================================*/
var $fmToggle = $(".fm-toggle");
var $fmClose = $(".fm-close");
var $fmWrapper = $(".fm-wrapper");

$fmToggle.on("click", function() {
  $fmWrapper.addClass("fm-show");
});

$fmClose.on("click", function() {
  $fmWrapper.removeClass("fm-show");
});


/*===============================================
  8. Sidebar Menu
===============================================*/
var $sm = $(".sm-middle");
var $smWrapper = $(".sm-wrapper");
var $smToggle = $(".sm-toggle");

if ($(".sm-wrapper.sm-left").length) {
  $body.addClass("sm-spacer-left");
}
if ($(".sm-wrapper.sm-right").length) {
  $body.addClass("sm-spacer-right");
}

$smToggle.on("click", function() {
  if ($sm.hasClass("sm-show")) {
    $sm.removeClass("sm-show");
    $smToggle.removeClass("sm-close");
  }
  else {
    $sm.addClass("sm-show");
    $smToggle.addClass("sm-close");
  }
});

$(document).on("click", function(e) {
  if ( $(e.target).closest(".sm-wrapper, .sm-toggle").length === 0 ) {
    if ($sm.hasClass("sm-show")) {
      $sm.removeClass("sm-show");
      $smToggle.removeClass("sm-close");
    }
  }
});


/*===============================================
  9. Background Image
===============================================*/
$(".bg-image").each(function() {
  var bgData = $(this).attr("data-bg-src");
  $(this).css('background-image', 'url(' +bgData+ ')');
});


/*===============================================
  10. Parallax
===============================================*/
if ($windowWidth > 1200) {
  var $parallax = $(".parallax");

  if ($parallax.length) {
    $parallax.each(function() {
      $(this).parallaxie({
        speed: 0.2
      });
    });
  }
}


/*===============================================
  11. Sliders
===============================================*/
var singleImageSlider = new Swiper ('.single-image-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

var clientsSlider = new Swiper ('.clients-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  }
});

var testimonialSlider = new Swiper ('.testimonial-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

var fullscreenProgressbarSlider = new Swiper ('.fullscreen-progressbar-slider', {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var fullscreenDotsSlider = new Swiper ('.fullscreen-dots-slider', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination', 
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var heroDotsSlider = new Swiper ('.hero-dots-slider', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination', 
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var freescrollSlider2 = new Swiper ('.freescroll-slider-2', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
  freeMode: true,
  grabCursor: true,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

var freescrollSlider2lg = new Swiper ('.freescroll-slider-2-lg', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    }
  },
  freeMode: true,
  grabCursor: true,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

var freescrollSlider3 = new Swiper ('.freescroll-slider-3', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
  freeMode: true,
  grabCursor: true,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});


/*===============================================
  12. Portfolio Masonry
===============================================*/
var $portfolioMasonry = $(".portfolio-masonry");

if ($portfolioMasonry.length) {
  $portfolioMasonry.imagesLoaded(function() {
    var $portfolioWrapper = $(".portfolio-masonry").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 300 // 0.3 second
    });

    // Portfolio Filter //
    var filter = $(".portfolio-filter li, .portfolio-side-filter li");

    filter.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $portfolioWrapper.isotope({ filter: filterValue });

      filter.removeClass("active");
      $(this).addClass("active");
    });
  });
}


/*===============================================
  13. Portfolio Grid
===============================================*/
var $portfolioGrid = $(".portfolio-grid");

if ($portfolioGrid.length) {
  var mixer = mixitup('.portfolio-grid', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
  });
}


/*===============================================
  14. Justified Gallery
===============================================*/
var $justifiedGallery = $(".justified-gallery");

if ($justifiedGallery.length) {
  $justifiedGallery.justifiedGallery({
    rowHeight: 300, 
    margins: 10,
    lastRow: 'justify'
  });
  $justifiedGallery.each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });
}


/*===============================================
  15. Masonry Grid
===============================================*/
var $masonryGrid = $(".masonry").imagesLoaded( function() {
  $masonryGrid.masonry({
    itemSelector: '.masonry-item', 
    columnWidth: '.masonry-item', 
    gutter: 0
  });
});


/*===============================================
  16. Lightbox
===============================================*/
//
// Lightbox - Image //
//
var $lightboxImage = $(".lightbox-image-link, .lightbox-image-box");

$lightboxImage.each(function () {
  var $this = $(this);
  $this.magnificPopup({
    type: 'image',
    fixedContentPos: false,
    removalDelay: 200,
    closeOnContentClick: true, 
    image: {
      titleSrc: 'data-image-title'
    }
  });
});

//
// Lightbox - Media //
//
var $lightboxMedia = $(".lightbox-media-link, .lightbox-media-box");

$lightboxMedia.each(function() {
  var $this = $(this);
  $this.magnificPopup({
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
        },
          vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      },
      srcAction: "iframe_src" 
    }
  });
});

//
// Lightbox - Gallery //
//
var $gallery = $(".gallery");

if ($gallery.length) {
  $gallery.each(function() {
    var $this = $(this);
    $this.magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });
}


/*===============================================
  17. Accordion
===============================================*/
$(".accordion-title").each(function() {
  var $this = $(this);
  $this.on("click", function() {
    var accordionList = $this.parent("li");
    var accordionContent = this.nextElementSibling;
    if (accordionList.hasClass("active")) {
      accordionList.removeClass("active");
      accordionContent.style.maxHeight = null;
    }
    else {
      accordionList.addClass("active");
      if ($this.closest(".accordion").hasClass("single-open")) {
        $this.closest(".accordion").children("li").removeClass("active");
        accordionList.addClass("active");
        $this.parents(".single-open").find(".accordion-content").css("max-height", "0");
      }
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
  //
  // Give max-height to Accordion's active content //
  //
  if ($this.parents(".accordion").find("li").hasClass("active")) {
    var accordionActiveContent = $this.parents(".accordion").find("li.active").children(".accordion-content");
    var accordionHeight = accordionActiveContent.prop("scrollHeight");
    
    accordionActiveContent.css({'max-height': accordionHeight + "px"});
  }
});


/*===============================================
  18. Counter
===============================================*/
var $counter = $(".counter");

if ($counter.length) {
  $counter.appear(function() {
    $(this).each(function () {
      $(this).prop("Counter",0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: "swing",
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
    
  },{accX: 0, accY: -10});
}


/*===============================================
  19. Countdown
===============================================*/
var $countdown = $(".countdown");

if ($countdown.length) {
  $countdown.each(function() {
    var finalDate = $(this).attr('data-countdown');

    $(this).countdown(finalDate, function(event) {
      $(this).html(event.strftime('%D days %H:%M:%S'));
    });
  });
}


/*===============================================
  20. Google Maps
===============================================*/
var mapCanvas = $(".gmap");
var m,divId,initLatitude, initLongitude, map;

if (mapCanvas.length) {
  for (var i = 0; i < mapCanvas.length; i++) {
    m = mapCanvas[i];

    initLatitude = m.dataset["latitude"];
    initLongitude = m.dataset["longitude"];
    divId = "#"+ m["id"];

    map = new GMaps({
      el: divId,
      lat: initLatitude,
      lng: initLongitude,
      zoom: 16,
      scrollwheel: false,
      styles: [
        /* style your map at https://snazzymaps.com/editor and paste JSON here */
      ]
    });

    map.addMarker({
      lat : initLatitude,
      lng : initLongitude
    });
  }
}


/*===============================================
  21. Contact Form
===============================================*/
$("#contact-form").on("submit", function(e) {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if (name === "") {
    $("#name").addClass("error-color");
  }
  if (email === "") {
    $("#email").addClass("error-color");
  }
  if (subject === "") {
    $("#subject").addClass("error-color");
  }
  if (message === "") {
    $("#message").addClass("error-color");
  }

  else {
    $.ajax({
      url:"assets/php/contact-form.php",
      data:$(this).serialize(),
      type:"POST",
      success:function(data){
        $("#success").addClass("show-result"); // Show Success Message
        $("#contact-form").each(function(){
          this.reset();
        });
      },
      error:function(data){
        $("#error").addClass("show-result"); // Show Error Message
      }
    });
    var forms = $("#contact-form input, #contact-form textarea");
    forms.removeClass("error-color");
  }

  e.preventDefault();
});