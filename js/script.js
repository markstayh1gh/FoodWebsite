require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import slider from './modules/slider';
import cards from './modules/cards';
import forms from './modules/forms';
import {openModal} from './modules/modal.js';


window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-10-22');
    calc();
    cards();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        totalCounter: '#total',
        currentCounter: '#current',
        field: '.offer__slider-inner',
    });


    // Tabs
    // Timer
    // Modal
    // Используем классы для создание карточек меню
    // Forms
    // Slider
    // Calculator
});