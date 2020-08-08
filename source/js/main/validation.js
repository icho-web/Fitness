(function () {
  const NUMBER_LENGTH = 11;
  const REGEX_NAME = /^[A-ZА-Я][a-za-я]+\s([A-ZА-Я][a-za-я]+\s[A-ZА-Я][a-za-я]+|[A-ZА-Я][a-za-я]+)/;
  let form = document.querySelector(`.contacts__form`);
  let inputTel = document.getElementById(`tel`);
  let inputName = document.getElementById(`name`);

  let maskOptions = {
    mask: `0-000-000-00-00`
  };

  // Знаю, что не допускается, но тут никак иначе - это библиотека
  // eslint-disable-next-line no-undef, new-cap
  let mask = IMask(inputTel, maskOptions);

  form.addEventListener(`input`, (evt) => {
    if (mask.unmaskedValue.length < NUMBER_LENGTH) {
      evt.preventDefault();
      inputTel.setCustomValidity(`Номер должен содержать ${NUMBER_LENGTH} цифр`);
    } else {
      inputTel.setCustomValidity(``);
    }

    if (REGEX_NAME.test(inputName.value)) {
      inputName.setCustomValidity(``);
    } else {
      evt.preventDefault();
      inputName.setCustomValidity(`Введите корректное имя`);
    }
  });

})();
