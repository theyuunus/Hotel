let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll(".contact .row .faq .box h3").forEach((faqBox) => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle("active");
  };
});

var swiper = new Swiper(".home-slider", {
  loop: true,
  effect: "coverflow",
  spaceBetween: 30,
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
  },
});

var telegram_bot_id = "Your_Telegram_Bot_id";
var chat_id = Your_Chat_Id;
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  number = document.getElementById("number").value;
  message = document.getElementById("message").value;
  message =
    "Ismi: " +
    u_name +
    "\nEmail: " +
    email +
    "\nnumber: " +
    number +
    "\nIzoh: " +
    message;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return false;
};
