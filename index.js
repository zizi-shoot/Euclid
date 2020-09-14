const mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
mySwiper.setGrabCursor();

$(() => {
	const icons = {
		header: 'faq-item__btn',
		activeHeader: 'faq-item__btn faq-item__btn--active',
	};

	$('#accordion').accordion({
		collapsible: true,
		heightStyle: 'content',
		icons,
	});

	$('#toggle').button().on('click', () => {
		if ($('#accordion').accordion('option', 'icons')) {
			$('#accordion').accordion('option', 'icons', null);
		} else {
			$('#accordion').accordion('option', 'icons', icons);
		}
	});

	$('.faq-item__btn').html(
		`<button aria-label="Развернуть">
							<svg width="50" height="50" viewbox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC" />
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M25.1556 24.0571L25.1556 9L26.0378 9L26.0378 24.0571L33.9471 24.0571L41.0355 24.0571L41.0355 24.9429L26.0378 24.9429L26.0378 40L25.1556 40L25.1556 24.9429L10.1579 24.9429L10.1579 24.0571L25.1556 24.0571Z"
									fill="#666666" />
							</svg>
						</button>`,
	);
});
