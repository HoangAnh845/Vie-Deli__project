$(document).ready(function () {

    //slider home page
    $('#main-slide').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', ' <i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });

    $('#partner').owlCarousel({
        loop: true,
        items: 4,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    //slider product-box__list
    $('#main_product-box').owlCarousel({
        loop: true,
        items: 3,
        nav: true,
        dots: false,
    });

    //slider simply-coffee
    $('#simply-coffee').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
    });

    $('#simply-coffe-MuiriAA').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
    });


    // validate form liên hệ
    $('#commentForm').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required"
        },
        messages: {
            name: "* Vui lòng nhập tên *",
            email: {
                required: "* Vui lòng nhập email *",
                email: "* Địa chỉ email không hợp lệ *"
            },
            phone: "* Vui lòng nhập số điện thoại *"
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (errors > 0) {
                    alert(`Vui lòng điền thêm ${errors} thông tin`);
                } else {
                    $('.msg').html('');
                }
            }
        },
        submitHandler: function (form) {
            alert('Nhập thông tin thành công');
            $('.msg').html('');
        }
    });

    //ấn hiện cho nút search
    let searchObjec = $('.search span');
    let searchItem = $('.search-item');
    searchItem.hide();
    searchObjec.on('click', function () {
        if (searchObjec.length > 0) {
            searchItem.toggle();
        }
    });

    // ẩn hiển cho nút .location-box
    $('.location-box__item p').eq(1).hide();
    $('.more').click(function (e) {
        e.preventDefault();
        if (!$('.location-box__item p').eq(1).hasClass('show')) {
            $('.location-box__item p').eq(1).addClass('show');
            $('.location-box__item p').eq(1).show();
        } else {
            $('.location-box__item p').eq(1).removeClass('show');
            $('.location-box__item p').eq(1).hide();
        }
    });

    // sự kiện onload
    setTimeout(function () {
        $('.preLoader').css('display', 'none');
    }, 1500);

    /*Back to top*/
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });


});





