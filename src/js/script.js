// accordion

let accordionBtn=Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
  })
})

// menu

let hamIcon = document.getElementById('hamIcon');

hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
})


// swiper
var services= new Swiper(".services", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
var currencies= new Swiper(".currencies", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: .8,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var walletServices= new Swiper(".walletServices", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
var testimonials= new Swiper(".testimonials", {
  loop: true,
  spaceBetween: 22,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2.3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
var blogSwiper= new Swiper(".blogSwiper", {
  loop: true,
  spaceBetween: 22,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiperComment = new Swiper(".swiperComment", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  autoplay: true,
  breakpoints: {
    768: {
    },
    992: {
      slidesPerView: 2,
      direction: "vertical",
    }
  },
});