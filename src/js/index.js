import '../scss/main.scss';
import 'intersection-observer';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';

import '../img/chest_lock.png';
import '../img/chest_empty.png';
import '../img/chest_diamond.png';
import '../img/chest_crown.png';

$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }
});

$(function () {
    let steps = 0;

    let modalStep0 = $('#modal_step_0');
    let modalStep1 = $('#modal_step_1');
    let modalStep2 = $('#modal_step_2');
    let modalStep3 = $('#modal_step_3');

    modalStep0.modal({
        backdrop: 'static',
        show: true,
    });

// Привязываем один обработчик к родительскому контейнеру
    $('.lottery').on('click', '.lottery__chest img', function (e) {
        if (steps === 1) {
            $(this).attr('src', 'img/chest_diamond.png');
            modalStep2.modal({
                backdrop: 'static',
                show: true,
            });
        }
        else if (steps === 2) {
            $(this).attr('src', 'img/chest_crown.png');
            modalStep3.modal(
                {
                backdrop: 'static',
                show: true,
            });
        }
        else {
            $(this).attr('src', 'img/chest_empty.png');
            modalStep1.modal({
                backdrop: 'static',
                show: true,
            });
        }

        steps++
    });
});