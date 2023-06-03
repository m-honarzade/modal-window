'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
// **************** to open modal
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
// *************** to close modal
btnCloseModal.addEventListener('click', closeModal); //1- by close button
overlay.addEventListener('click', closeModal); // 2- by click overlay
// 3- by press esc key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
