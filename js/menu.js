const openMenu = document.querySelector('[data-open]');
const closeMenu = document.querySelector('[data-close]');
const modalMenu = document.querySelector('[data-modal]');

openMenu.addEventListener('click', toggleModal);
closeMenu.addEventListener('click', toggleModal);

function toggleModal() {
	modalMenu.classList.toggle('is-active');
}
