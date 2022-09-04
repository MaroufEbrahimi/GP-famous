
function myFun() {
   alert('Waiting For Future')
}


// hader link activate
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

// Portfolio
var btn_all = document.getElementById('all_btn');
var app_btn = document.getElementById('app_btn');
var card_btn = document.getElementById('card_btn');
var web_btn = document.getElementById('web_btn');
var element = document.getElementsByClassName('box');

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
      if (element[a].className == 'box app') {
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
      if (element[a].className == 'box card') {
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
      if (element[a].className == 'box web') {
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
let model = document.getElementById('myModal');
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

let close = document.getElementById('close');
close.onclick = function () {
   model.style.display = 'none';
}