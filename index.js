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
	const line1 = document.querySelector('.header__burger:hover .line-1');
	const line2 = document.querySelector('.line-2');
	const line3 = document.querySelector('.header__burger:hover .line-3');

	if (line2.style.transform === '') {
		line1.style.transform = 'translate(0px, 10px) rotate(45deg)';
		line2.style.transform = 'translateX(100px)';
		line3.style.transform = 'translate(0px, -10px) rotate(-45deg)';
	} else {
		line1.style.transform = '';
		line2.style.transform = '';
		line3.style.transform = '';
	}
});

burgerBtn.addEventListener('click', () => {
	burgerMenu.classList.toggle('burger-nav--active');
});
