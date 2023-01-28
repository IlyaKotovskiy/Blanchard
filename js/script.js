// PRELOADER
window.onload = () => {
  document.getElementById("preloader").style.display = "none";
  document.body.classList.remove('hidden');
};


// LIST DROPDOWN

const dropBtn = document.querySelectorAll('.main-screen-nav__btn');

dropBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const ownDropdown = e.currentTarget;
    ownDropdown.classList.toggle('active');

    dropBtn.forEach(el => {
      if (el !== ownDropdown)
        el.classList.remove('active');
    });
  });
});

// CUSTOM SELECT

// main
const selectsNav = document.querySelectorAll('.second-nav__select');
const selectGalery = document.querySelector('.galery-select');

selectsNav.forEach(select => new Choices(select, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false
}))

const select = new Choices(selectGalery, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  classNames: {
    // containerOuter: 'choices-galery',
  }
})



// MODAL

const modalOpen = document.querySelectorAll('.galery-slide');
const modalClose = document.querySelector('.modal-btn');

modalOpen.forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.galery-modal').classList.add('active');
    document.body.classList.add('hidden');
  });
});

modalClose.addEventListener('click', () => {
  document.querySelector('.galery-modal').classList.remove('active');
  document.body.classList.remove('hidden');
});

// SWIPER

// main
const swiper = new Swiper('.main-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  effect: "fade",
});

// galery
const swiperGalery = new Swiper('.galery-swiper', {
  speed: 500,
  navigation: {
    nextEl: '.galery-slider-button-next',
    prevEl: '.galery-slider-button-prev',
  },
  pagination: {
    el: ".galery-slider-pagination",
    type: "fraction",
  },
  a11y: {
    nextSlideMessage: "Следующая страница",
    prevSlideMessage: "Предыдущая страница",
    slideLabelMessage: "Слайд {{index}} из {{slidesLength}}",
    slideRole: "none",
  },
  breakpoints: {
    1400: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowTouchMove: false,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    577: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      speed: 250,
    }
  }
});

// events
const swiperEvent = new Swiper('.event-swiper', {
  speed: 500,
  navigation: {
    nextEl: '.event-slider-button-next',
    prevEl: '.event-slider-button-prev',
  },
  breakpoints: {
    1400: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1024: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowTouchMove: true,
      pagination: {
        el: ".event-slider-pagination",
        clickable: true,
      },
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: ".event-slider-pagination",
        clickable: true,
      },
    },
    577: {
      spaceBetween: 34,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".event-slider-pagination",
        clickable: true,
      },
    },
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".event-slider-pagination",
        clickable: true,
      },
    }
  }
})

// projects
const swiperProjects = new Swiper('.projects-swiper', {
  slidesPerView: 'auto',
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false // продолжает autoplay если пользователь повзаимодействовал со слайдером или слайдом
  },
  navigation: {
    nextEl: '.projects-slider-button-next',
    prevEl: '.projects-slider-button-prev'
  },
  breakpoints: {
    1400: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    577: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowTouchMove: true,
    }
  }
})

// ACCORDION
const acr = new Accordion('.years-wrap__list', {
  elementClass: 'years-wrap__item',
  triggerClass: 'years-wrap__btn',
  panelClass: 'years-artists',
  duration: 500
});
acr.open(0);


// TAB
const tabArtist = document.querySelectorAll('.artist');
const tabsBtn = document.querySelectorAll('.years-artists__artist');

tabsBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    const acr = e.currentTarget.dataset.acr;

    tabsBtn.forEach((btn) => {
      btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    tabArtist.forEach((el) => {
      el.classList.remove('active');
    })
    document.querySelector(`[data-artist="${acr}"]`).classList.add('active');
  });
});



// YANDEX MAP

ymaps.ready(init);
function init() {
  const geolocationControl = new ymaps.control.GeolocationControl({          // Добавление кнопки навигации на карте
    options: {
      float: 'right',
      position: {
        bottom: '300px',
        right: '10px'
      }
    }
  });

  const zoomControl = new ymaps.control.ZoomControl({                        // Добавление функионала управления масштаба карты
    options: {
      size: "small",
      float: 'right',
      position: {
        top: '300px',
        right: '10px'
      }
    }
  });

  const myMap = new ymaps.Map("map", {                                       // Добавление карты
    center: [55.758463, 37.601079],
    zoom: 14,
    controls: [geolocationControl, zoomControl]
  });
  myMap.behaviors.disable('scrollZoom');                                     // Отключение изменения масштаба карты колесом прокрутки мыши

  const myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {      // Добавление марки на карту
    iconLayout: 'default#image',
    iconImageHref: './img/map-mark.png',
    iconImageSize: [20, 20]
  });

  myMap.geoObjects.add(myPlacemark);
}



// VALIDATION

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

const validation = new JustValidate('.contacts-form__form', {
  errorLabelStyle: {
    color: '#D11616',
  }
});

validation.onSuccess(function () {
  document.querySelector('.contacts-form__form').submit()
});

validation
  .addField('#contactName', [
    {
      rule: 'required',
      errorMessage: 'Как вас зовут?',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не короче 3 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком длинное имя',
    },
  ])
  .addField('#contactPhone', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Телефон не корректный!',
    },
  ]);


// WOW

new WOW().init();



// TOOLTIP

tippy('[data-tippy-content]');



// MOBILE ..START

// BURGER
const burger = document.querySelectorAll('.header-mobile-btn');

burger.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    document.body.classList.toggle('hidden');
  });
});

// SEARCH
const search = document.querySelector('.nav-form__button');
const closeSearch = document.querySelector('.header-mobile-form__cancel-btn');

search.addEventListener('click', () => {
  document.querySelector('.header-mobile-form').classList.add('active');
});
closeSearch.addEventListener('click', () => {
  document.querySelector('.header-mobile-form').classList.remove('active');
})

// MOBILE ..END
