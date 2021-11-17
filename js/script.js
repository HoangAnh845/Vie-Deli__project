$(document).ready(function(){
    $('#main-slide').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',' <i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('#partner').owlCarousel({
        loop:true,
        // margin:0,
        items:4,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });


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
            // 'this' refers to the form
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (errors > 0) {
                    $('.msg').html(`Đã có ${errors} xảy ra`);
                } else {
                    $('.msg').html('');
                }
            }
        },
    
        submitHandler: function (form) {
            alert('Valide thành công');
            $('.msg').html('');
        }
    });
});