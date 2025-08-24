const openMenu = document.querySelector('[data-open]');
const closeMenu = document.querySelector('[data-close]');
const modalMenu = document.querySelector('[data-modal]');
const bodyLock = document.querySelector('body');

openMenu.addEventListener('click', toggleModal);
closeMenu.addEventListener('click', toggleModal);

function toggleModal() {
	modalMenu.classList.toggle('is-active');
	bodyLock.classList.toggle('lock');
}
