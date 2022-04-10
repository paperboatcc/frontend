urlBox.on('invalid', (event) => {
	switch (urlBox.val()) {
		case '2+3': {
			event.preventDefault();
			go("https://billwurtz.com/2plus3.mp4");
			break;
		}

		case 'do a barrel roll': {
			event.preventDefault();
			if ( css('animation') != 0 ) {
				css('animation', '1s')
			}
			$('body').css('transform', 'rotate(360deg)');
			break;
		}
		
		case 'dvd': {
			event.preventDefault();
			$('body').html($('#credits').prop('outerHTML'));
			$('#credits')
			.wrap(
				`<marquee id='screensaver' class='screensaver'
					direction='down' behavior='alternate'
				>
					<marquee behavior='alternate'>
					</marquee>
				</marquee>`
			);

			$('body').on('keydown', () => {
				refresh();
			});
			break;
		}
	}
});