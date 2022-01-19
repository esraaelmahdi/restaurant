// global $ , alert , console;
var $ = $;
// var scTop = $(window).scrollTop();
$(document).ready(function() {
    'use strict';
    /* ====== start cart-box ===== */
    let
        cartIcon = $('.cart-dv'),
        cartBox = $('.cart-box'),
        overlayDv = $('.ovelay-dv'),
        cartClose = $('.cart-close');
    overlayDv.css({
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'inset': '0',
        'background-color': '#000',
        'opacity': '.6',
        'z-index': '99999999999999',
        'transition': 'all ease-in-out .5s',
        'display': 'none'
    })
    cartIcon.on('click', function() {
        cartBox.addClass('translate-right-0')
        overlayDv.toggle()
    })
    overlayDv.on('click', function() {
        $(this).toggle()
        cartBox.toggleClass('translate-right-0')

    })
    cartClose.on('click', function() {
            cartBox.removeClass('translate-right-0')
            overlayDv.fadeOut()
        })
        /* ====== end cart-box ===== */

    /*===== start cart-box-btn-count =====*/
    let btnCartPlus = document.querySelectorAll('#btn-crt-plus'),
        btnCartMinus = document.querySelectorAll('#btn-crt-minus'),
        cartBoxInput = document.querySelectorAll('#input-text'),
        i;
    // increment
    for (i = 0; i < btnCartPlus.length; i++) {
        btnCartPlus[i].addEventListener('click', function(e) {
            let btnClcked = e.target,
                parE = btnClcked.parentElement.children[1];
            let inputVal = parE.value;
            let newVal = parseInt(inputVal) + 1
            parE.value = newVal
            getPrice()
        })
    }
    // // decrement
    for (i = 0; i < btnCartMinus.length; i++) {
        btnCartMinus[i].addEventListener('click', function(e) {
            let btnClcked = e.target,
                parE = btnClcked.parentElement.children[1];
            let inputVal = parE.value;
            let newVal = parseInt(inputVal) - 1
            parE.value = newVal;
            if (newVal >= 0) {
                parE.value = newVal
            } else {
                parE.value = 0
            }
            getPrice()
        })
    }
    // total-price
    function getPrice() {
        let allInputVal = document.querySelectorAll('#input-text'),
            totalPrice = 0;
        for (var i = 0; i < allInputVal.length; i++) {
            if (parseInt(allInputVal[i].value)) {
                totalPrice += parseInt(allInputVal[i].value)
            }
        }
        document.getElementById('total-price').textContent = totalPrice;
    }

    /*===== end cart-box-btn-count=====*/
    /* ===== start search-full-wd ===== */
    $('.search-dv > a').click(function(e) {
        e.preventDefault();
        $('.search-full-wd').addClass('translateY-0')
    })
    $('.search-full-wd .close-srch-icon').on('click', function() {
            $(this).parent().removeClass('translateY-0')
        })
        /* ===== end search-full-wd ===== */
        /* ===== start login-icon ===== */
    $('.user-dv > a').click(function(ev) {
        ev.preventDefault();
        $('.login-screen').fadeIn(1000);
    })
    $('.login-screen').click(function() {
        $(this).fadeOut()
    })
    $('.login-screen .login-parent').click(function(eve) {
        eve.stopPropagation();
    })
    $('.login-screen .close-user-icon').on('click', function() {
            $(this).parent().fadeOut()
        })
        /* ===== end login-icon ===== */

    /* ===== start hero-swipper ===== */
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        speed: 900,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        }
    });
    /* ===== end hero-swipper ===== */
    /* ===== start header-arrow-down ===== */
    $('.hero-section').on('click', '.bottom-arrow', function() {
            $('html,body').animate({
                scrollTop: $($(this).data('class')).offset().top
            }, 1000)
        })
        /* ===== end header-arrow-down ===== */

    /* ===== start about-slider ===== */
    $('.about .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 10,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            },
            navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"]
        })
        /* ===== end about-slider ===== */
        /* ====== start count ====== */
    $('.number').counterUp({
        delay: 10,
        time: 3000
    });
    /* ====== end count ====== */
    /* ===== start our-parteners ===== */
    $('.owl-products .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 0,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
            // navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"]
        })
        /* ===== end our-parteners ===== */
        /* ===== start our-parteners ===== */
    $('.our-parteners .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            dots: false,
            margin: 40,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        })
        /* ===== end our-parteners ===== */

    /* ===== start fadeInOutBtn ===== */
    let scrollTopBtn = document.querySelector('.scroll-btn')
    window.onscroll = function() {
        if (this.scrollY >= 1000) {
            scrollTopBtn.classList.add('show-btn-top')
        } else {
            scrollTopBtn.classList.remove('show-btn-top')
        }
    }
    scrollTopBtn.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        /* ===== end fadeInOutBtn ===== */


})