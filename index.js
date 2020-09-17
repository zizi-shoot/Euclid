//! Swiper

const mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
mySwiper.setGrabCursor();

//! Accordion

$(() => {
	$('#accordion').accordion({
		collapsible: true,
		active: false,
		heightStyle: 'content',
		beforeActivate: (event, ui) => {
			ui.newHeader.children('button').addClass('faq-item__btn--active');
			ui.oldHeader.children('button').removeClass('faq-item__btn--active');
		},
	});
});
//! Burger

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-nav');

document.querySelector('.header__burger').addEventListener('click', () => {
	const burgerLine = document.querySelectorAll('.burger__line');
	burgerLine.forEach((el) => el.classList.toggle(`${el.classList[1]}--active`));
});

burgerBtn.addEventListener('click', () => {
	burgerMenu.classList.toggle('burger-nav--active');
});
