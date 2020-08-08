(function () {
  const DESKTOP = 1200;
  const TABLET = 768;
  const MOBILE = 320;
  const DESKTOP_SLIDER_COUNT = 4;
  const TABLET_SLIDER_COUNT = 2;
  const MOBILE_SLIDER_COUNT = 1;
  let buttonLeft = document.querySelector(`.coaches__button--left`);
  let buttonRight = document.querySelector(`.coaches__button--right`);
  let slides = document.querySelectorAll(`.coaches__slider-item`);
  let slideIndex;
  let slideLength;
  let summand;

  let mediaQueries = (query) => window.matchMedia(`(min-width:` + query + `px)`).matches;
  let sliderPagination = (cond, exp) => {
    if (cond) {
      for (let i = slideIndex; i < slideLength; i++) {
        slides[i].classList.remove(`coaches__slider-item--active`);
        slides[i + exp].classList.add(`coaches__slider-item--active`);
      }

      slideLength = slideLength + exp;
      slideIndex = slideIndex + exp;
    }
  };

  let updatedSummand;
  let summandUpdate = () => {
    if (mediaQueries(DESKTOP)) {
      updatedSummand = DESKTOP_SLIDER_COUNT;
    } else if (mediaQueries(TABLET)) {
      updatedSummand = TABLET_SLIDER_COUNT;
    } else if (mediaQueries(MOBILE)) {
      updatedSummand = MOBILE_SLIDER_COUNT;
    }

    return updatedSummand;
  };
  let slideCount = () => {
    if (mediaQueries(DESKTOP)) {
      summand = DESKTOP_SLIDER_COUNT;
      slideLength = DESKTOP_SLIDER_COUNT;
    } else if (mediaQueries(TABLET)) {
      summand = TABLET_SLIDER_COUNT;
      slideLength = TABLET_SLIDER_COUNT;
    } else if (mediaQueries(MOBILE)) {
      summand = MOBILE_SLIDER_COUNT;
      slideLength = MOBILE_SLIDER_COUNT;
    }

    slideIndex = 0;

    for (let l = 0; l < slides.length; l++) {
      slides[l].classList.remove(`coaches__slider-item--active`);
    }
    for (let j = 0; j < slideLength; j++) {
      slides[j].classList.add(`coaches__slider-item--active`);
    }

    buttonLeft.disabled = true;
    buttonRight.disabled = false;
    window.setCursor(buttonLeft);
    window.setCursor(buttonRight);
  };

  window.setCursor = (button) => {
    if (button.disabled === true) {
      button.style.cursor = `not-allowed`;
    } else {
      button.style.cursor = `pointer`;
    }
  };

  slideCount();
  window.addEventListener(`resize`, slideCount);

  buttonRight.addEventListener(`click`, () => {
    if (slides.length - slideLength >= summandUpdate()) {
      sliderPagination(slideLength < slides.length, +summand);
      buttonLeft.disabled = false;
      window.setCursor(buttonLeft);
    } else {
      summand = slides.length % summandUpdate();
      sliderPagination(slideLength < slides.length, +summand);
      buttonLeft.disabled = false;
      window.setCursor(buttonLeft);
    }

    if (slides.length === slideLength) {
      buttonRight.disabled = true;
      window.setCursor(buttonRight);
    }
  });

  buttonLeft.addEventListener(`click`, () => {
    if (summand < summandUpdate()) {
      sliderPagination(slideIndex > 0, -summand);
      summand = summandUpdate();
      buttonRight.disabled = false;
      window.setCursor(buttonRight);
    } else {
      sliderPagination(slideIndex > 0, -summand);
      buttonRight.disabled = false;
      window.setCursor(buttonRight);
    }

    if (slideIndex === 0) {
      buttonLeft.disabled = true;
      window.setCursor(buttonLeft);
    }
  });

})();
