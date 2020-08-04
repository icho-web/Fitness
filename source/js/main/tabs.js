let inputs = document.querySelectorAll('.season__button input');
let tabs = document.querySelectorAll('.season__tab');

inputs.forEach((element, i) => {
  element.addEventListener('change', () => {
    tabs.forEach(element => {
      element.classList.remove('season__tab--open')
    });

    if (element.checked) {
      tabs[i].classList.add('season__tab--open')
    }
  })
});
