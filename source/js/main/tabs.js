(function () {
  let inputs = document.querySelectorAll(`.season__button input`);
  let tabs = document.querySelectorAll(`.season__tab`);

  inputs.forEach((element, i) => {
    element.addEventListener(`change`, () => {
      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove(`season__tab--open`);
      }

      if (element.checked) {
        tabs[i].classList.add(`season__tab--open`);
      }
    });
  });
})();
