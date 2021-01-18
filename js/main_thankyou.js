$(document).ready(function() {

    $('#up').click(function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	})

    const burgerMenuHeaderBtn = $('.header__burger-menu');
    const burgerMenuMobileBtn = $('.mobile-menu__burger-menu');

    burgerMenuHeaderBtn.on('click', function() {
        $('.mobile-menu').removeClass('mobile-menu_hidden');
        $('.mobile-menu').addClass('mobile-menu_scrolling');
        $('body').addClass('body_scrollles');
        burgerMenuMobileBtn.removeClass('mobile-menu__burger-menu_hidden');
    })
    burgerMenuMobileBtn.on('click', function() {
        $('.mobile-menu').addClass('mobile-menu_hidden');
        $('.mobile-menu').removeClass('mobile-menu_scrolling');
        $('body').removeClass('body_scrollles');
        burgerMenuMobileBtn.addClass('mobile-menu__burger-menu_hidden');

    })

    const feedback = $('#feedback');
    const modalCloseFeedback = $('#modal-close-feedback');
    const modal = $('#modal_feedback');
    const modalDialog = $('#modal-dialog_feedback');

    feedback.on('click', function() {
        modalDialog.removeClass('modal-dialog_hidden');
        modal.removeClass('modal_hidden');
        $('body').addClass('body_scrollles');
        modalDialog.addClass('modal-dialog_scrolling');
    })
    modalCloseFeedback.on('click', function() {
        modalDialog.addClass('modal-dialog_hidden');
        modal.addClass('modal_hidden');
        $('body').removeClass('body_scrollles');
        modalDialog.removeClass('modal-dialog_scrolling');
    })
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            modalDialog.addClass('modal-dialog_hidden');
            modal.addClass('modal_hidden');
            $('body').removeClass('body_scrollles');
            modalDialog.removeClass('modal-dialog_scrolling');
        }
    });
    modal.on('mousedown', function(event) {
        if ($(event.target).hasClass('modal')) {
            modalDialog.addClass('modal-dialog_hidden');
            modal.addClass('modal_hidden');
            $('body').removeClass('body_scrollles');
            modalDialog.removeClass('modal-dialog_scrolling');
        }
    })


    $('.form_subscription').validate({ 
        rules: {
          email_subscription: {
            required: true,
            email: true
          }
        },
        messages: {
          email_subscription: {
              email: "Пожалуйста, укажите Email в формате name@domain.com",
              required: 'Пожалуйста, заполните поле "Email"'

            }
          }
        });

    $('.form_modal').validate({ 
    rules: {
        email_feedback: {
          required: true,
          email: true
        },
        message_feedback: {
            required: true,
        },
        agreement_checkbox: {
            required: true,
        },
        theme_feedback: {
            required: true,
        }

      },
      messages: {

        email_feedback: {
            email: "Пожалуйста, укажите Email в формате name@domain.com",
            required: 'Пожалуйста, заполните поле "Email"'
        },
        message_feedback: {
            required: 'Пожалуйста, заполните поле "Сообщение"'
        },
        agreement_checkbox: {
            required: 'Пожалуйста, поставьте галочку рядом с полем "Согласен с обработкой данных"'
        },
        theme_feedback: {
            required: 'Пожалуйста, выберите тему'
        }
      },
    });

    const bookMark = $('.icon_bookmark_small');
    bookMark.on('click', function() {
        if ($(this).hasClass('icon_bookmark_red')) { 
            $(this).removeClass('icon_bookmark_red');
        } else {
            $(this).addClass('icon_bookmark_red');
        }
    })
})