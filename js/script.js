$(document).ready(function () {

    //slider home page
    $('#main-slide').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', ' <i class="fa fa-angle-right" aria-hidden="true"></i>'],
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
        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true
    });

    // slider đối tác
    $('#partner').owlCarousel({
        loop: true,
        items: 4,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
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

    
});