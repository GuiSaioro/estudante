
$(document).ready(function () {

// menu
    $('.icone-mobile').click(function () {
        if (!$('.page-wrap').hasClass('nav-on'))
        {
            $('.page-wrap').addClass('nav-on');
            adiciona_menu_backdrop();

        } else
        {
            $('.page-wrap').removeClass('nav-on');
            remove_menu_backdrop();
        }
    });
    function adiciona_menu_backdrop() {
        var altura_menu_backdrop = $(document).outerHeight() - 45;
        $('.page-wrap').prepend('<div class="menu-backdrop" style="height:' + altura_menu_backdrop + 'px; top: 45px"><div></div></div>');
        $('.menu-backdrop').click(function () {
            remove_menu_backdrop();
            $('.page-wrap').removeClass('nav-on');

        });
    }
    function remove_menu_backdrop() {
        $('.menu-backdrop').remove();
    }
    function identifica_mobile() {
        if ($(this).width() < 768) {
            $('body').addClass('mobile');
        } else {
            $('body').removeClass('mobile');
        }
    }
//// SCROLLTOP ////////////////////////////
//Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

///////////////////////////////////////////////////

// alterna o tamanho do cabeÃ§alho
    function init() {
        window.addEventListener('scroll', function (e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    shrinkOn = 90,
                    header = $(".site-header");
            if (distanceY > shrinkOn) {
                header.addClass("encolhido");
            } else {
                header.removeClass("encolhido");
            }
        });

        identifica_mobile();

        $(window).resize(function () {
            identifica_mobile();
        });
    }

    function ajustesLayout() {
        $('body').css('padding-bottom', $('footer').height());
        $('#resultado').css('padding-top', $('#resultado header').height()+60);
    }
    ajustesLayout();

    $(window).resize(function () {
        ajustesLayout();
    });

    window.onload = init();
});

