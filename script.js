'use strict';

// To select all element with same class we'll use  document.querySelectorAll
// Reference: const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(document.querySelector('p').textContent);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); // removing the hidden class
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); // adding the hidden class again
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if the modal contains the hidden class -> here now modal is currently hidden -
    // -> we just use negation operator to invert that
    closeModal();
  }
});
