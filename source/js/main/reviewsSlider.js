(function () {
  let buttonLeft = document.querySelector(`.reviews__button--left`);
  let buttonRight = document.querySelector(`.reviews__button--right`);
  let slides = document.querySelectorAll(`.reviews__slide`);
  let slideIndex;
  let slideLength;
  let summand = 1;

  let sliderPagination = (cond, exp) => {
    if (cond) {
      for (let i = slideIndex; i < slideLength; i++) {
        slides[i].classList.remove(`reviews__slide--active`);
        slides[i + exp].classList.add(`reviews__slide--active`);
      }

      slideLength = slideLength + exp;
      slideIndex = slideIndex + exp;
    }
  };

  let slideCount = () => {
    slideIndex = 0;
    slideLength = 1;

    for (let l = 0; l < slides.length; l++) {
      slides[l].classList.remove(`reviews__slide--active`);
    }
    for (let j = 0; j < slideLength; j++) {
      slides[j].classList.add(`reviews__slide--active`);
    }

    buttonRight.disabled = false;
    buttonLeft.disabled = true;
    window.setCursor(buttonLeft);
    window.setCursor(buttonRight);
  };

  slideCount();
  window.addEventListener(`resize`, slideCount);

  buttonRight.addEventListener(`click`, () => {
    if (slides.length > slideLength) {
      sliderPagination(true, summand);
      buttonLeft.disabled = false;
      buttonLeft.style.cursor = `pointer`;
    }

    if (slides.length === slideLength) {
      buttonRight.disabled = true;
      buttonRight.style.cursor = `not-allowed`;
    }
  });

  buttonLeft.addEventListener(`click`, () => {
    if (slideIndex > 0) {
      sliderPagination(true, -summand);
      buttonRight.disabled = false;
      buttonRight.style.cursor = `pointer`;
    }

    if (slideIndex === 0) {
      buttonLeft.disabled = true;
      buttonLeft.style.cursor = `not-allowed`;
    }
  });
})();
