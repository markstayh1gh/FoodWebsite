'use strict';

const log = function(a,b,...classes){ // rest оператор 
    console.log(a, b, classes);
}

log('213', '123', '111', '101', '222');

function calcOrDouble(num, basis = 2){ // параметр по умолчанию присваивается именно в функции
    console.log(num * basis);

}

calcOrDouble(3);


Math.ceil(Math.sqrt(n)) // для рассчета столбцов


function solution(n, width, height){
    const arr = [
      obj = {},
    ]
}


// window.addEventListener('DOMContentLoaded', () => {
//     // TABS
//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent(){
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent (i = 0){
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');

//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;

//         if(target && target.classList.contains('tabheader__item')){
//             tabs.forEach((item, i) =>{
//                 if(target == item){
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });



//     // TIMER

//     const deadLine = '2022-10-29';

//     function getTimeRemaning(endtime){
//         let days, hours , minutes , seconds;
//         const t = Date.parse(endtime) - Date.parse(new Date());

//         if(t<= 0){
//             days = 0;
//             hours = 0;
//             minutes = 0;
//             seconds = 0;
//         }else{
//             days = Math.floor(t / (1000*60*60*24)),
//             hours = Math.floor((t/(1000 * 60 * 60))%24),
//             minutes = Math.floor((t/1000/60)%60),
//             seconds = Math.floor((t/ 1000)%60);
//         }
             

//         return {
//             'total' : t,
//             'days' : days,
//             'hours' : hours,
//             'minutes' : minutes,
//             'seconds' : seconds,
//         };
//     }

//     function getZero(num){
//         if(num >= 0 && num < 10){
//             return `0${num}`;
//         }else {
//             return num;
//         }
//     }


//     function setClock(selector, endtime){
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timeInterval = setInterval(updateClock, 1000);

//         updateClock();

//         function updateClock(){
//             const t = getTimeRemaning(endtime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);


//             if(t.total <= 0){
//                 clearInterval(timeInterval);
//             }
//         }

//     }

//     setClock('.timer', deadLine);


//     // MODAL WINDOW

//     function openModal(){
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(modalTimerId);
//     }

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modal = document.querySelector('.modal');         
    
//     modalTrigger.forEach( btn => {
//         btn.addEventListener('click' , openModal);
//     });

   


//     function closeModal(){
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         document.body.style.overflow = '';
//     }
    
    

    

//     modal.addEventListener('click' , (event) =>{
//         if(event.target == modal || event.target.getAttribute('data-close') == ''){
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if(e.code === 'Escape' && modal.classList.contains('show')){
//             closeModal();
//         }
//     });

//     const modalTimerId = setTimeout(openModal, 30000);

//     function showModalByScroll() {
//         if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ){
//             openModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }

//     window.addEventListener('scroll', showModalByScroll);
    

//     // КЛАССЫ ДЛЯ КАРТОЧЕК

//     class MenuCard {
//         constructor(src, alt,  title, descr, price, parentSelector,...classes){
//             this.parent = document.querySelector(parentSelector);
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.classes = classes;
//             this.transfer = 62;
//             this.chnageToRUB();
//         }

//         chnageToRUB(){
//             this.price = this.price * this.transfer;
//         }

//         render(){
//             const element = document.createElement('div');

//             if(this.classes.length === 0 ){
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             }else{
//                 this.classes.forEach(className => element.classList.add(className));
//             }
           
//             element.innerHTML = `
//                                     <img src=${this.src} alt=${this.alt}>
//                                     <h3 class="menu__item-subtitle">${this.title}</h3>
//                                     <div class="menu__item-descr">${this.descr}</div>
//                                     <div class="menu__item-divider"></div>
//                                     <div class="menu__item-price">
//                                         <div class="menu__item-cost">Цена:</div>
//                                         <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
//                                     </div>
//             `;
//             this.parent.append(element);
//         }
//     }

//     const getResource = async (url) => {
//         const res = await fetch(url);

//         if(!res.ok){
//            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
//         }
    
//         return await res.json();
//     };

//     // getResource('http://localhost:3000/menu')
//     //     .then(data => {
//     //         data.forEach(({img, altimg, title, descr, price}) => {
//     //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//     //         });
//     //     });

    
//     axios.get(' http://localhost:3000/menu')
//         .then(data => {
//             data.data.forEach(({img, altimg, title, descr, price}) => {
//                             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//                         });
//         });

//         /// АЛЬТЕРНАТИВНЫЙ СПОСОБ СОЗДАНИЯ КАРТОЧЕК , ПУШИТ ПРЯМО НА СТРАНИЦУ (ХОРОШО ИСПОЛЬЗОВАТЬ , КОГДА НЕ НУЖНА ШАБЛОНИЗАЦИЯ И ЭЛЕМЕНТ НУЖНО СОЗДАТЬ ВСЕГО 1 РАЗ )
//     // getResource('http://localhost:3000/menu')
//     //     .then(data => createCard(data));
    
//     // function createCard(data){
//     //     data.forEach(({img, altimg, title, descr, price}) => {
//     //         const element = document.createElement('div');

//     //         element.classList.add('menu__item');
//     //         element.innerHTML = `
//     //             <img src=${img} alt=${altimg}>
//     //             <h3 class="menu__item-subtitle">${title}</h3>
//     //             <div class="menu__item-descr">${descr}</div>
//     //             <div class="menu__item-divider"></div>
//     //             <div class="menu__item-price">
//     //                 <div class="menu__item-cost">Цена:</div>
//     //                 <div class="menu__item-total"><span>${price}</span> руб/день</div>
//     //             </div>
//     //         `;
//     //         document.querySelector('.menu .container').append(element);
//     //     });
//     // }
    



// // forms

// const forms = document.querySelectorAll('form');

// const message = {
//     loading:"img/form/spinner.svg",
//     success:"Спасибо , скоро с Вами свяжемся",
//     failure:"Что-то пошло не так(",
// };

// forms.forEach(item => {
//     bindPostData(item);
// });

// const postData = async (url, data) => {
//     const res = await fetch(url, {
//         method: "POST",
//             headers:{
//                 'Content-type':'application/json',
//             },
//             body:data,
//     });

//     return await res.json();
// };



// function bindPostData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const statusMessage = document.createElement('img');
//         statusMessage.src = message.loading;
//         statusMessage.style.cssText = `
//             display: block;
//             margin: 0 auto;
//         `;
       
//         form.insertAdjacentElement('afterend', statusMessage);

//         // КОГДА ИСПОЛЬЗУЕМ СВЯЗКУ XMLHTTPREQUEST ОБЕКТА + ФОРМ ДЕЙТА , ТО ЗАГОЛОВОК НЕ НУЖЕН!!!!!!!!
        
  

         
//         const formData = new FormData(form);

//         const json = JSON.stringify(Object.fromEntries(formData.entries()));

        
//         postData('http://localhost:3000/requests', json)
//         .then(data => {
//                 console.log(data);
//                 showThanksModal(message.success);
//                 form.reset();
//                 statusMessage.remove();

//         })
//         .catch(() => {
//             showThanksModal(message.failure);
//         })
//         .finally(() => {
//             form.reset();
//         });

//         // request.addEventListener('load', () =>{
//         //     if(request.status === 200){
//         //         console.log(request.response);
//         //          showThanksModal(message.success);
//         //         form.reset();
//         //         statusMessage.remove();
//         //     }else{
//         //         showThanksModal(message.failure);
//         //     }
//         // });
//     });
// }


//     function showThanksModal(message){
//         const prevModalDialog = document.querySelector('.modal__dialog');
//         prevModalDialog.classList.add('hide');
//         openModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//         <div class = "modal__content">
//             <div class ="modal__close" data-close>×</div>
//             <div class="modal__title">${message}</div>
//         </div>
//         `;

//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() =>{
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();
//         },4000);
//     }

//     //SLIDER VERSION 1.0

//     const slides = document.querySelectorAll('.offer__slide'),
//           prev = document.querySelector('.offer__slider-prev'),
//           next = document.querySelector('.offer__slider-next'),
//           total = document.querySelector('#total'),
//           current = document.querySelector('#current'),
//           slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//           slidesField = document.querySelector('.offer__slider-inner'),
//           width = window.getComputedStyle(slidesWrapper).width,
//           slider = document.querySelector('.offer__slider');

//     let slideIndex = 1;
//     let offset = 0;

//     if(slides.length < 10){
//             total.textContent = `0${slides.length}`;
//             current.textContent = `0${slideIndex}`;
    
//         }else{
//             total.textContent = slides.length;
//             current.textContent = slideIndex;

//         }

//     slidesField.style.width = 100 * slides.length + '%';
//     slidesField.style.display = 'flex';
//     slidesField.style.transition = '0.7s all';

//     slidesWrapper.style.overflow = 'hidden';

//     slides.forEach(slide => {
//         slide.style.width = width;
//     });

//     slider.style.position = 'relative';

//     const indicators = document.createElement('ol'),
//           dots = [];

//     indicators.classList.add('carousel-indicators');
//     indicators.style.cssText = `
//             position: absolute;
//             right: 0;
//             bottom: 0;
//             left: 0;
//             z-index: 15;
//             display: flex;
//             justify-content: center;
//             margin-right: 15%;
//             margin-left: 15%;
//             list-style: none;
//     `;
//     slider.append(indicators);

//     for (let i = 0; i < slides.length; i++){
//         const dot = document.createElement('li');
//         dot.setAttribute('data-slide-to', i + 1);
//         dot.style.cssText = `
//             box-sizing: content-box;
//             flex: 0 1 auto;
//             width: 30px;
//             height: 6px;
//             margin-right: 3px;
//             margin-left: 3px;
//             cursor: pointer;
//             background-color: #fff;
//             background-clip: padding-box;
//             border-top: 10px solid transparent;
//             border-bottom: 10px solid transparent;
//             opacity: .5;
//             transition: opacity .6s ease;
//         `;
//         if(i == 0){
//             dot.style.opacity = 1;
//         }
//         indicators.append(dot);
//         dots.push(dot);
//     }

//     function deleteNoDigits(str){
//         return +str.replace(/\D/g, '');
//       }

//     next.addEventListener('click', () => {
//         if(offset == deleteNoDigits(width) * (slides.length - 1)){
//             offset = 0;
//         }else{
//             offset += +width.replace(/\D/g, '');
//         }

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if(slideIndex == slides.length){
//             slideIndex = 1;
//         }else{
//             slideIndex++;
//         }

//         if(slides.length < 10){
//             current.textContent = `0${slideIndex}`;
//         }else{
//             current.textContent = slideIndex;
//         }

//         dots.forEach(dot => dot.style.opacity = '.5');
//         dots[slideIndex - 1].style.opacity = 1;
//     });

//     prev.addEventListener('click', () => {
//         if(offset == 0){
//             offset = deleteNoDigits(width) * (slides.length - 1);
//         }else{
//             offset -= deleteNoDigits(width);
//         }

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if(slideIndex == 1){
//             slideIndex = slides.length;
//         }else{
//             slideIndex--;
//         }

//         if(slides.length < 10){
//             current.textContent = `0${slideIndex}`;
//         }else{
//             current.textContent = slideIndex;
//         }

//         dots.forEach(dot => dot.style.opacity = '.5');
//         dots[slideIndex - 1].style.opacity = 1;
//     });
    
//     dots.forEach(dot => {
//         dot.addEventListener('click', (e) => {
//             const slideTo = e.target.getAttribute('data-slide-to');

//             slideIndex = slideTo;
//             offset = deleteNoDigits(width) * (slideTo- 1);

//             slidesField.style.transform = `translateX(-${offset}px)`;

//             if(slides.length < 10){
//                 current.textContent = `0${slideIndex}`;
//             }else{
//                 current.textContent = slideIndex;
//             } 

//             dots.forEach(dot => dot.style.opacity = '.5');
//             dots[slideIndex - 1].style.opacity = 1;

//         });


//         // CALC
       
//         const result = document.querySelector('.calculating__result span');
//         let sex, height, weight, age, ratio;

//         function calcTotal(){
//             if(!sex || !height || !weight || !age || !ratio){
//                 result.textContent = '____';
//                 return;
//             }
            
//             if(sex === 'female'){
//                 result.textContent = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio;
//             }else{
//                 result.textContent = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio;
//             }
//         }

//         calcTotal();

//         function getStaticInfo(parentSelector, activeClass){
//             const elements = document.querySelectorAll(`${parentSelector} div`);

//             document.querySelector(parentSelector).addEventListener('click', (e) =>{
//                 if(e.target.getAttribute('data-ratio')){
//                     ratio = +e.target.getAttribute('data-ratio');
//                 }else{
//                     sex = e.target.getAttribute('id');
//                 }

//                 elements.forEach(item => {
//                     item.classList.remove(activeClass);

//                 });

//                 e.target.classList.add(activeClass);

                
//             });

//             calcTotal();

            
//         }

        

//         getStaticInfo('#gender', 'calculating__choose-item_active');
//         getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

//         function getDynamicInfo(selector){
//             const input = document.querySelector(selector);

//             input.addEventListener('input', () => {
//                 switch(input.getAttribute('id')){
//                     case 'height':
//                         height = +input.value;
//                         break;
//                     case 'weight':
//                         weight = +input.value;
//                         break;
//                     case 'age':
//                         age = +input.value;
//                         break;
//                 }

//                 calcTotal();
//             });

            
//         }

//         getDynamicInfo('#height');
//         getDynamicInfo('#weight');
//         getDynamicInfo('#age');
//     });


    
        

//     // showSlides(slideIndex);

//     // if(slides.length < 10){
//     //     total.textContent = `0${slides.length}`;

//     // }else{
//     //     total.textContent = slides.length;
//     // }

//     // function showSlides(n){
//     //     if(n > slides.length){
//     //         slideIndex = 1;
//     //     }

//     //     if(n < 1){
//     //         slideIndex = slides.length;
//     //     }

//     //     slides.forEach(item => {
//     //         item.style.display = 'none';
//     //     });

//     //     slides[slideIndex - 1].style.display = 'block';

//     //     if(slides.length < 10){
//     //         current.textContent = `0${slideIndex}`;
    
//     //     }else{
//     //         current.textContent = slideIndex;
//     //     }
//     // }

//     // function plusSlide(n){
//     //     showSlides(slideIndex += n);
//     // }

//     // prev.addEventListener('click', () => {
//     //     plusSlide(-1);
//     // });

//     // next.addEventListener('click', () => {
//     //     plusSlide(1);
//     // });


//     // fetch('https://jsonplaceholder.typicode.com/posts', {
//     //     method: "POST",
//     //     body: JSON.stringify({name: 'Alex'}),
//     //     headers: {
//     //         'Content-type': "application/json",
//     //     }
//     // })
//     //     .then(response => response.json())
//     //     .then(json => console.log(json));

//     // fetch('http://localhost:3000/menu')
//     //     .then(data => data.json())
//     //     .then(res => console.log(res));

// });