new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000
});

$('.vw-nav-menu').on('click', '.vw-nav-link', function (evt) {
    if (evt.target.hash !== '') {
        $('html, body').animate({scrollTop: $(evt.target.hash).offset().top - 5}, 1000);
        return false;
    }
});


$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function (i) {
        if ($(this).position().top - 10 <= scrollDistance) {
            $('.vw-nav-menu a.active_nav_a').removeClass('active_nav_a');
            $('.vw-nav-menu a').eq(i).addClass('active_nav_a');
        }
    });
}).scroll();


new WOW().init();
$('#toggler').on('click', function () {
    var nav = $('#nav');
    var toggler = $('#toggler i');
    if (nav.css('left') === '0px') {
        nav.css('left', '-240px');
        toggler.removeClass('fa-times').addClass('fas-bars');
    } else {
        nav.css('left', '0');
        toggler.removeClass('fas-bars').addClass('fa-times');
    }
});

$('.vw-nav-link').on('click', function () {
    var nav = $('#nav');
    var toggler = $('#toggler i');
    if (nav.css('left') === '0px') {
        nav.css('left', '-240px');
        toggler.removeClass('fa-times').addClass('fas-bars');
    } else {
        nav.css('left', '0');
        toggler.removeClass('fas-bars').addClass('fa-times');
    }
});

$(window).on('scroll load', function () {
    var linkColor = $('.link-color a');
    if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
    }
    if ($(window).scrollTop() > 120) {
        $('#navbar').css('background-color', 'rgba(245 , 245 , 245 , 1)').css('padding', '10px 0').css('position', 'fixed');
    } else {
        $('#navbar').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px 0').css('position', 'static');
    }
    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity', '1').css('visibility', 'visible');
    } else {
        $('#go-to-top').css('opacity', '0').css('visibility', 'hidden');
    }
    if ($(window).scrollTop() > 120) {
        $('.vw-nav-menu_two').css('top', '60px').css('background-color', 'rgba(245, 245, 245 ,1)');
        linkColor.css('color', '#707070');
        $('.vw-nav-menu_one').css('top', '60px');
    } else {
        $('.vw-nav-menu_two').css('top', '80px').css('background-color', 'rgba(41, 25, 82 ,0.85)');
        linkColor.css('color', '#ffffff');
        $('.vw-nav-menu_one').css('top', '80px');
    }

});


$(window).scroll(function () {

    var top = $(window).scrollTop();
    if (top >= 100) {
        $('.navbar').css('background', '#353c4d');
    } else if ($('.navbar').css(
        'background',
        'linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)'
    )) {

        $('.navbar').css(
            'background',
            'linear-gradient(135deg, rgba(44, 51, 56, 0) 0%, rgba(44, 51, 56, 0) 100%)'
        );
    }
});


// Function to reveal youtube-video and adding YouTube autoplay
function revealVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video+'&autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
}

// Hiding the youtube-video and removing YouTube autoplay
function hideVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}


$(document).ready(function () {
    $('a[href="#search"]').on('click', function (event) {
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});


lightbox.option({
    'resizeDuration': 300,
});

var portfolio = $('#portfolio-container').isotope();

$('#portfolio-filter li').on('click', function () {
    $("#portfolio-filter li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolio.isotope({
        filter: $(this).data('filter')
    });
});

var $grid = $('.grid').isotope({
});
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


portfolio.on('arrangeComplete', function () {
    if ($(window).scrollTop() % 2 == 0)
        $(window).scrollTop($(window).scrollTop() - 1);
    else {
        $(window).scrollTop($(window).scrollTop() + 1);
    }
});

$('.owl-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    animateOut: 'fadeOut',
    smartSpeed: 1000,
    autoplayTimeout: 13000,
    responsive: {
        0: {
            items: 1
        },
    }
})

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
