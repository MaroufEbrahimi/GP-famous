
// loading animation
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function initLoader() {
   setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = 'none';

      main.style.display = 'block';
      setTimeout(() => {
         main.style.opacity = 1;
      }, 20);
   }, 1000);
}
initLoader();

// header scrollable
const header_sticky = document.querySelector('header');
window.addEventListener('scroll', function () {
   header_sticky.classList.toggle('header_sticky', this.window.scrollY > 0);
});

// header link activate
const link = document.querySelectorAll('.linkHeader');
function activeLink() {
   link.forEach((ele) => {
      ele.classList.remove('active');
   });
   this.classList.add('active');
}
link.forEach((ele) => {
   ele.addEventListener('click', activeLink);
});
// End of header link activate

// Open and Close side menu
let side_menu = document.getElementById('side_menu');
function openSlideMenu() {
   side_menu.style.display = 'block';
}

function closeSide() {
   side_menu.style.display = 'none';
}

// Portfolio
var btn_all = document.getElementById('all_btn');
var app_btn = document.getElementById('app_btn');
var card_btn = document.getElementById('card_btn');
var web_btn = document.getElementById('web_btn');
var element = document.getElementsByClassName('portfolio_box');

// show all images
function allImages() {
   for (a in element) {
      element[a].style.display = "grid";
      btn_all.style.backgroundColor = '#ffc451';
      app_btn.style.backgroundColor = 'transparent';
      card_btn.style.backgroundColor = 'transparent';
      web_btn.style.backgroundColor = 'transparent';
   }
}
// show app images
function appImages() {
   for (a in element) {
      if (element[a].className == 'portfolio_box app') {
         element[a].style.display = "grid";
         app_btn.style.backgroundColor = '#ffc451';
         btn_all.style.backgroundColor = 'transparent';
         card_btn.style.backgroundColor = 'transparent';
         web_btn.style.backgroundColor = 'transparent';
      } else {
         element[a].style.display = "none";
      }
   }
}
// show card images
function cardImages() {
   for (var a in element) {
      if (element[a].className == 'portfolio_box card') {
         element[a].style.display = "grid";
         card_btn.style.backgroundColor = '#ffc451';
         app_btn.style.backgroundColor = 'transparent';
         web_btn.style.backgroundColor = 'transparent';
         btn_all.style.backgroundColor = 'transparent';
      } else {
         element[a].style.display = "none";
      }
   }
}
// show web images
function webImages() {
   for (a in element) {
      if (element[a].className == 'portfolio_box web') {
         element[a].style.display = "grid";
         web_btn.style.backgroundColor = '#ffc451';
         app_btn.style.backgroundColor = 'transparent';
         card_btn.style.backgroundColor = 'transparent';
         btn_all.style.backgroundColor = 'transparent';
      } else {
         element[a].style.display = "none";
      }
   }
}

// Portfolio Gallery
let model = document.getElementById('myModel');
let modelImg = document.getElementById('img01');

let plus_1 = document.getElementById('plus_1');
let img_1 = document.getElementById('img_1');
plus_1.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_1.src;
}

let plus_2 = document.getElementById('plus_2');
let img_2 = document.getElementById('img_2');
plus_2.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_2.src;
}

let plus_3 = document.getElementById('plus_3');
let img_3 = document.getElementById('img_3');
plus_3.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_3.src;
}

let plus_4 = document.getElementById('plus_4');
let img_4 = document.getElementById('img_4');
plus_4.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_4.src;
}
let plus_5 = document.getElementById('plus_5');
let img_5 = document.getElementById('img_5');
plus_5.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_5.src;
}

let plus_6 = document.getElementById('plus_6');
let img_6 = document.getElementById('img_6');
plus_6.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_6.src;
}

let plus_7 = document.getElementById('plus_7');
let img_7 = document.getElementById('img_7');
plus_7.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_7.src;
}

let plus_8 = document.getElementById('plus_8');
let img_8 = document.getElementById('img_8');
plus_8.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_8.src;
}

let plus_9 = document.getElementById('plus_9');
let img_9 = document.getElementById('img_9');
plus_9.onclick = function () {
   model.style.display = 'block';
   modelImg.src = img_9.src;
}

let closeBtn = document.getElementById('closeBtn');
closeBtn.onclick = function () {
   model.style.display = 'none';
}
// End of Portfolio

// Count 
let count_timer = document.getElementById('count_timer');
let count_timer2 = document.getElementById('count_timer2');
let count_timer3 = document.getElementById('count_timer3');
let count_timer4 = document.getElementById('count_timer4');

function countStart() {
   if (Number(count_timer.innerHTML) >= 65) {
      return;
   }
   count_timer.innerHTML = Number(count_timer.innerHTML) + 1;
   count_timer2.innerHTML = Number(count_timer2.innerHTML) + 1;
   count_timer3.innerHTML = Number(count_timer3.innerHTML) + 1;
   count_timer4.innerHTML = Number(count_timer4.innerHTML) + 1;
   setTimeout(() => {
      countStart();
   }, 100);
}

window.addEventListener('scroll', function () {
   if (this.window.scrollY > 4250) {
      countStart();
   }
})

// End of Count

// Swiper
new Swiper('.testimonials-slider', {
   speed: 700,
   loop: true,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   slidesPerView: 'auto',
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   }
})
// End of swiper

// back to top
window.onload = scrollToTop;
function scrollToTop() {
   let up_arrow = document.getElementById('up_arrow');

   function btnVisibality() {
      if (window.scrollY <= 150) {
         up_arrow.style.cursor = 'default';
         up_arrow.fadeOut();
      } else {
         up_arrow.style.cursor = 'pointer';
         up_arrow.fadeIn();
      }
   }

   window.addEventListener('scroll', btnVisibality);
   up_arrow.addEventListener('click', function () {
      this.scrollTo(0, 0);
   });
};

// fade in
function myFadeIn(e) {
   let eleOpacity = Number(getComputedStyle(e).opacity).toPrecision(2);
   e.style.opacity = eleOpacity;
   if (eleOpacity >= 1) {
      return;
   }

   e.style.opacity = Number(eleOpacity) + 1;
   setTimeout(() => {
      myFadeIn(e);
   }, 10);
}
// fade out
function myFadeOut(e) {
   let eleOpacity = Number(getComputedStyle(e).opacity).toPrecision(2);

   if (eleOpacity <= 0) {
      return;
   }
   setTimeout(() => {
      myFadeOut(e);
   }, 10);

   e.style.opacity = Number(eleOpacity) - 1;
}

Element.prototype.fadeIn = function () {
   myFadeIn(this);
}

Element.prototype.fadeOut = function () {
   myFadeOut(this);
}
// End of back to top
