'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnModals = document.querySelectorAll('.show-modal');
const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hide = function () {
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
//Event btn show
btnModals.forEach(item => {
  item.addEventListener('click', show);
});
//event btn hide
btnCloseModal.addEventListener('click', hide);
//Event overlay click
overlay.addEventListener('click', hide);
//Event keydown esc
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') hide();
});
