// ##_________ loading animation _________##
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function initLoader() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => {
      main.style.opacity = 1;
    }, 20);
  }, 1000);
}
initLoader();

// ##_________ Header scrollable _________##
const header_sticky = document.querySelector("header");
window.addEventListener("scroll", function () {
  header_sticky.classList.toggle("header_sticky", this.window.scrollY > 0);
});

// ##_________ Header link activate _________##
const link = document.querySelectorAll(".linkHeader");
const legoElement = document.getElementById("logo");
const homeLink = document.querySelectorAll(".linkHeader")[0];
const getStarted = document.getElementById("getStarted");
const aboutLink = document.querySelectorAll(".linkHeader")[1];

function activeLink() {
  link.forEach((ele) => {
    ele.classList.remove("active");
  });
  this.classList.add("active");
}
link.forEach((ele) => {
  ele.addEventListener("click", activeLink);
});

// Active Link Scroll
let sectionActiveScroll = document.querySelectorAll(".sectionActiveScroll");
let activeLinkScroll = document.querySelectorAll(".activeLinkScroll");

window.onscroll = () => {
  sectionActiveScroll.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      activeLinkScroll.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".activeLinkScroll[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// This function will be called when the Logo element is clicked
function activateHomeLink() {
  // Here we call the `activeLink` function in the context of the homeLink
  // We use `.call` to set the value of `this` in the activeLink function
  activeLink.call(homeLink);
}
// Add event listener to the Logo element
legoElement.addEventListener("click", activateHomeLink);

// Active About when clicked get started button
function activateAboutLink() {
  activeLink.call(aboutLink);
}
getStarted.addEventListener("click", activateAboutLink);
// ##_________ End of header link activate _________##

// ##_________ Open and Close side menu _________##
let side_menu = document.getElementById("side_menu");
function openSlideMenu() {
  side_menu.style.display = "block";
}

function closeSide() {
  side_menu.style.display = "none";
}

// ##_________ Portfolio _________##
var btn_all = document.getElementById("all_btn");
var app_btn = document.getElementById("app_btn");
var card_btn = document.getElementById("card_btn");
var web_btn = document.getElementById("web_btn");
var element = document.getElementsByClassName("portfolio_box");

// ##_________ Show all images _________##
function allImages() {
  for (a in element) {
    element[a].style.display = "grid";
    btn_all.style.backgroundColor = "#ffc451";
    app_btn.style.backgroundColor = "transparent";
    card_btn.style.backgroundColor = "transparent";
    web_btn.style.backgroundColor = "transparent";
  }
}
// show app images
function appImages() {
  for (a in element) {
    if (element[a].className == "portfolio_box app") {
      element[a].style.display = "grid";
      app_btn.style.backgroundColor = "#ffc451";
      btn_all.style.backgroundColor = "transparent";
      card_btn.style.backgroundColor = "transparent";
      web_btn.style.backgroundColor = "transparent";
    } else {
      element[a].style.display = "none";
    }
  }
}
// show card images
function cardImages() {
  for (var a in element) {
    if (element[a].className == "portfolio_box card") {
      element[a].style.display = "grid";
      card_btn.style.backgroundColor = "#ffc451";
      app_btn.style.backgroundColor = "transparent";
      web_btn.style.backgroundColor = "transparent";
      btn_all.style.backgroundColor = "transparent";
    } else {
      element[a].style.display = "none";
    }
  }
}
// show web images
function webImages() {
  for (a in element) {
    if (element[a].className == "portfolio_box web") {
      element[a].style.display = "grid";
      web_btn.style.backgroundColor = "#ffc451";
      app_btn.style.backgroundColor = "transparent";
      card_btn.style.backgroundColor = "transparent";
      btn_all.style.backgroundColor = "transparent";
    } else {
      element[a].style.display = "none";
    }
  }
}

// ##_________ Portfolio Gallery _________##
let model = document.getElementById("myModel");
let modelImg = document.getElementById("img01");

let plus_1 = document.getElementById("plus_1");
let img_1 = document.getElementById("img_1");
plus_1.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_1.src;
};

let plus_2 = document.getElementById("plus_2");
let img_2 = document.getElementById("img_2");
plus_2.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_2.src;
};

let plus_3 = document.getElementById("plus_3");
let img_3 = document.getElementById("img_3");
plus_3.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_3.src;
};

let plus_4 = document.getElementById("plus_4");
let img_4 = document.getElementById("img_4");
plus_4.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_4.src;
};
let plus_5 = document.getElementById("plus_5");
let img_5 = document.getElementById("img_5");
plus_5.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_5.src;
};

let plus_6 = document.getElementById("plus_6");
let img_6 = document.getElementById("img_6");
plus_6.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_6.src;
};

let plus_7 = document.getElementById("plus_7");
let img_7 = document.getElementById("img_7");
plus_7.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_7.src;
};

let plus_8 = document.getElementById("plus_8");
let img_8 = document.getElementById("img_8");
plus_8.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_8.src;
};

let plus_9 = document.getElementById("plus_9");
let img_9 = document.getElementById("img_9");
plus_9.onclick = function () {
  model.style.display = "block";
  modelImg.src = img_9.src;
};

let closeBtn = document.getElementById("closeBtn");
closeBtn.onclick = function () {
  model.style.display = "none";
};
// ##_________ End of Portfolio _________##

// ##_________ Counter Scroll _________##
let counter_section = document.querySelector(".counter_section");
let counters = document.querySelectorAll(".count_info_box .counter");

let coutnerObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    // Counter
    let speedCounter = 200;
    counters.forEach((counter, index) => {
      function updateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speedCounter;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(updateCounter, 40);
        }
        console.log(initialNumber);
      }
      updateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = "";
      } else {
        counter.parentElement.style.animation = `slide-up-counter 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(counter_section);
  },
  {
    root: null,
    threshold: 0.4,
  }
);
coutnerObserver.observe(counter_section);

// ##_________ End of Counter _________##

// ##_________ Swiper _________##
new Swiper(".testimonials-slider", {
  speed: 700,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
// ##_________ End of swiper _________##

// ##_________ Back to top _________##
window.onload = scrollToTop;
function scrollToTop() {
  let up_arrow = document.getElementById("up_arrow");

  function btnVisibality() {
    if (window.scrollY <= 150) {
      up_arrow.style.cursor = "default";
      up_arrow.fadeOut();
    } else {
      up_arrow.style.cursor = "pointer";
      up_arrow.fadeIn();
    }
  }

  window.addEventListener("scroll", btnVisibality);
  up_arrow.addEventListener("click", function () {
    this.scrollTo(0, 0);
  });
}

// ##_________ Fade in _________##
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
};

Element.prototype.fadeOut = function () {
  myFadeOut(this);
};
// ##_________ End of back to top _________##
