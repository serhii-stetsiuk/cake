const openMenu = document.querySelector('[data-open]');
const closeMenu = document.querySelector('[data-close]');
const modalMenu = document.querySelector('[data-modal]');
const bodyLock = document.querySelector('body');
const bodyUnlock = document.querySelector('.js-active');

openMenu.addEventListener('click', toggleModal);
closeMenu.addEventListener('click', toggleModal);
bodyUnlock.addEventListener('click', () => {
	bodyLock.classList.remove('lock');
	modalMenu.classList.remove('is-active');
});

function toggleModal() {
	modalMenu.classList.toggle('is-active');
	bodyLock.classList.toggle('lock');
}
