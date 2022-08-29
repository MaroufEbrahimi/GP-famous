
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