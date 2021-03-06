"use strict";

(function () {
  var DESKTOP = 1200;
  var TABLET = 768;
  var MOBILE = 320;
  var DESKTOP_SLIDER_COUNT = 4;
  var TABLET_SLIDER_COUNT = 2;
  var MOBILE_SLIDER_COUNT = 1;
  var buttonLeft = document.querySelector(".coaches__button--left");
  var buttonRight = document.querySelector(".coaches__button--right");
  var slides = document.querySelectorAll(".coaches__slider-item");
  var slideIndex;
  var slideLength;
  var summand;

  var mediaQueries = function mediaQueries(query) {
    return window.matchMedia("(min-width:" + query + "px)").matches;
  };

  var sliderPagination = function sliderPagination(cond, exp) {
    if (cond) {
      var _loop = function _loop(i) {
        slides[i + exp].style.opacity = 0;
        slides[i].classList.remove("coaches__slider-item--active");
        slides[i + exp].classList.add("coaches__slider-item--active");
        setTimeout(function () {
          slides[i + exp].style.opacity = 1;
        }, 100);
      };

      for (var i = slideIndex; i < slideLength; i++) {
        _loop(i);
      }

      slideLength = slideLength + exp;
      slideIndex = slideIndex + exp;
    }
  };

  var updatedSummand;

  var summandUpdate = function summandUpdate() {
    if (mediaQueries(DESKTOP)) {
      updatedSummand = DESKTOP_SLIDER_COUNT;
    } else if (mediaQueries(TABLET)) {
      updatedSummand = TABLET_SLIDER_COUNT;
    } else if (mediaQueries(MOBILE)) {
      updatedSummand = MOBILE_SLIDER_COUNT;
    }

    return updatedSummand;
  };

  var slideCount = function slideCount() {
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

    for (var l = 0; l < slides.length; l++) {
      slides[l].classList.remove("coaches__slider-item--active");
    }

    for (var j = 0; j < slideLength; j++) {
      slides[j].classList.add("coaches__slider-item--active");
    }

    buttonLeft.disabled = true;
    buttonRight.disabled = false;
    window.setCursor(buttonLeft);
    window.setCursor(buttonRight);
  };

  window.setCursor = function (button) {
    if (button.disabled === true) {
      button.style.cursor = "not-allowed";
    } else {
      button.style.cursor = "pointer";
    }
  };

  slideCount();
  window.addEventListener("resize", slideCount);
  buttonRight.addEventListener("click", function () {
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
  buttonLeft.addEventListener("click", function () {
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

(function () {
  var buttonLeft = document.querySelector(".reviews__button--left");
  var buttonRight = document.querySelector(".reviews__button--right");
  var slides = document.querySelectorAll(".reviews__slide");
  var slideIndex;
  var slideLength;
  var summand = 1;

  var sliderPagination = function sliderPagination(cond, exp) {
    if (cond) {
      var _loop2 = function _loop2(i) {
        slides[i + exp].style.opacity = 0;
        slides[i].classList.remove("reviews__slide--active");
        slides[i + exp].classList.add("reviews__slide--active");
        setTimeout(function () {
          slides[i + exp].style.opacity = 1;
        }, 100);
      };

      for (var i = slideIndex; i < slideLength; i++) {
        _loop2(i);
      }

      slideLength = slideLength + exp;
      slideIndex = slideIndex + exp;
    }
  };

  var slideCount = function slideCount() {
    slideIndex = 0;
    slideLength = 1;

    for (var l = 0; l < slides.length; l++) {
      slides[l].classList.remove("reviews__slide--active");
    }

    for (var j = 0; j < slideLength; j++) {
      slides[j].classList.add("reviews__slide--active");
    }

    buttonRight.disabled = false;
    buttonLeft.disabled = true;
    window.setCursor(buttonLeft);
    window.setCursor(buttonRight);
  };

  slideCount();
  window.addEventListener("resize", slideCount);
  buttonRight.addEventListener("click", function () {
    if (slides.length > slideLength) {
      sliderPagination(true, summand);
      buttonLeft.disabled = false;
      buttonLeft.style.cursor = "pointer";
    }

    if (slides.length === slideLength) {
      buttonRight.disabled = true;
      buttonRight.style.cursor = "not-allowed";
    }
  });
  buttonLeft.addEventListener("click", function () {
    if (slideIndex > 0) {
      sliderPagination(true, -summand);
      buttonRight.disabled = false;
      buttonRight.style.cursor = "pointer";
    }

    if (slideIndex === 0) {
      buttonLeft.disabled = true;
      buttonLeft.style.cursor = "not-allowed";
    }
  });
})();

(function () {
  var inputs = document.querySelectorAll(".season__button input");
  var tabs = document.querySelectorAll(".season__tab");
  inputs.forEach(function (element, i) {
    element.addEventListener("change", function () {
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove("season__tab--open");
      }

      if (element.checked) {
        tabs[i].classList.add("season__tab--open");
      }
    });
  });
})();

(function () {
  var NUMBER_LENGTH = 11;
  var REGEX_NAME = /(^[A-ZА-Я][а-яa-z]+$|^[A-ZА-Я][а-яa-z]+\s[A-ZА-Я][а-яa-z]+$|^[A-ZА-Я][а-яa-z]+\s[A-ZА-Я][а-яa-z]+\s[A-ZА-Я][а-яa-z]+$)/;
  var form = document.querySelector(".contacts__form");
  var inputTel = document.getElementById("tel");
  var inputName = document.getElementById("name");
  var maskOptions = {
    mask: "0-000-000-00-00"
  }; // Знаю, что не допускается, но тут никак иначе - это библиотека
  // eslint-disable-next-line no-undef, new-cap

  var mask = IMask(inputTel, maskOptions);
  form.addEventListener("input", function (evt) {
    if (mask.unmaskedValue.length < NUMBER_LENGTH) {
      evt.preventDefault();
      inputTel.setCustomValidity("\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C ".concat(NUMBER_LENGTH, " \u0446\u0438\u0444\u0440"));
    } else {
      inputTel.setCustomValidity("");
    }

    if (REGEX_NAME.test(inputName.value)) {
      inputName.setCustomValidity("");
    } else {
      evt.preventDefault();
      inputName.setCustomValidity("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0438\u043C\u044F");
    }
  });
})();