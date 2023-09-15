const btns = document.querySelectorAll('.gallery__modal-btn');
const modalOverlay = document.querySelector('.gallery__modal__overlay');
const modals = document.querySelectorAll('.gallery__modal');
const modalClose = document.querySelector('.modal-close')

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('gallery__modal-visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal-visible');
		modalOverlay.classList.add('modal__overlay-visible');
	});
});

modalOverlay.addEventListener('click', (e) => {

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal__overlay-visible');
		modals.forEach((el) => {
			el.classList.remove('gallery__modal-visible');
		});
	}
});

modalClose.addEventListener('click', (e) => {

	modalOverlay.classList.remove('modal__overlay-visible');
	modals.forEach((el) => {
		el.classList.remove('gallery__modal-visible');
	});

});