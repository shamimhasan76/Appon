$( document ).ready(function(){

    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        
        if(scrolling >= 108){
            $(".header").addClass("header-fixed");
        }
        else{
            $(".header").removeClass("header-fixed");
        }

    });

    $(".ss-slide").slick({
        slidesToShow: 5,
        arrows: false,
        dots: true,
        centerMode: true,
    });

    $('.fdbk').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.user'
        
      });
      $('.user').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.fdbk',
        arrows: false,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
      });

    new VenoBox({
        selector: '.my-video-links',
        maxWidth: '50%',
        spinners: 'pulse', 
        overlayColor: '#bb3b3b5b',
        ratio: '1x1',
        share: 'true',
    });

    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        spinner: 'rotating-plane'
    });
});

