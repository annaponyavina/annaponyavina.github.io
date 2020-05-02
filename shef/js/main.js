$(document).ready(() => {
    $('.products').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.open-modal').click(() => {
        $('#popup-container').css('display', 'flex');
    });

    $('#popup-container').click((e) => {
        if (e.target.id === 'popup-container') {
            $('#popup-container').hide();
        }
    });

    function makeRequest(name, phone, time) {
        let data = 'name=' + name + '&phone=' + phone;
        if (time) {
            data += '&time=' + time;
        }
        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: data,
            success: () => {
                $('#popup-container').hide();
                alert('успех');
            },
            error: () => {
                $('#popup-container').hide();
                alert('Ошибка, свяжитесь по телефону.');
            }
        });
    }

    $('.btn-request').click(() => {
        let name = $('.name1');
        let phone = $('.phone1');
        if (name.val() && phone.val()) {
            makeRequest(name.val(), phone.val());
        } else {
            $('#request-error').css('color', 'red');
        }
    });

    $('.btn-request1').click(() => {
        let name1 = $('.name');
        let phone1 = $('.phone');
        let time1 = $('.time');
        if (name1.val() && phone1.val() && time1.val()) {
            makeRequest(name1.val(), phone1.val(), time1.val());
        } else {
            $('#call-error').css('color', 'red');
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
        $('body').css('overflow', 'hidden');
        $('#header .logo').css('opacity', '0.2');
        $('#header #burger').css('visibility', 'hidden');
        $('.for-i-cross').show();
    });

    $('#header').on('click', '.menu-item', () => {
        $('#header').removeClass('menu-open');
        $('body').css('overflow', 'initial');
        $('#header .logo').css('opacity', '1');
        $('#header #burger').css('visibility', 'visible');
        $('.for-i-cross').hide();
    });

    $('.fas.fa-times').click(() => {
        $('#header').removeClass('menu-open');
        $('body').css('overflow', 'initial');
        $('#header .logo').css('opacity', '1');
        $('#header #burger').css('visibility', 'visible');
        $('.for-i-cross').hide();
    });

    new WOW().init();

});



// $('.btn-request').click(() => {
//     let name = $('.name1');
//     let phone = $('.phone1');
//
//     if (name.val() && phone.val()) {
//         $.ajax({
//             type: 'post',
//             url: 'mail.php',
//             data: 'name=' + name.val() + '&phone=' + phone.val(),
//             success: () => {
//                 $('#popup-container').hide();
//             },
//             error: () => {
//                 $('#popup-container').hide();
//                 alert('Ошибка, свяжитесь по телефону.')
//             }
//         });
//     } else {
//         $('#request-error').css('color', 'red');
//     }
// });
//
// $('.btn-request1').click(() => {
//     let name1 = $('.name');
//     let phone1 = $('.phone');
//     let time1 = $('.time');
//
//     if (name1.val() && phone1.val() && time1.val()) {
//         $.ajax({
//             type: 'post',
//             url: 'mail.php',
//             data: 'name=' + name1.val() + '&phone=' + phone1.val() + '&time=' + time1.val(),
//             success: () => {
//                 alert('Успех')
//             },
//             error: () => {
//                 alert('Ошибка, свяжитесь по телефону.')
//             }
//         });
//     } else {
//         $('#call-error').css('color', 'red');
//     }
// });


