/*
	-> Name: index.js
	-> Description: The main backend script for the webpage.
	-> Resource: /src/js/index.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


let form = $('#shortenlink');
let urlBox = $('#urlbox');

form.on('submit', (event) => {
	event.preventDefault();
	$('#newLink')
	.append(
`<info id='linknotice'
	title='${urlBox.val()}'
>
	The inputted URL is valid.
</info>`
	);
});

urlBox.on('invalid', (event) => {
	switch (urlBox.val()) {
		case '2+3': {
			event.preventDefault();
			go("https://billwurtz.com/2plus3.mp4");
			break;
		}

		case 'do a barrel roll': {
			event.preventDefault();
			if (css('animation') != 0) { css('animation', '1s') }
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

/* JS debug page code */
let debugForm = $('#debug');
let repl = $('#repl');

debugForm.on('input', (event) => {
	event.preventDefault();
	debug(
		repl.val(), (result, error)=> {
			let info_type = error ? 'error' : 'info';
			let info_title = error ? error.constructor.name : repl.val();
			let repl_color = error ? 'var(--desert-red-80)' : 'var(--accent)';
			repl.css('color', repl_color);
			$('#result')
			.attr('type', info_type)
			.attr('title', info_title)
			.text(result);
		}
	);
	if (repl.val() === "2+3") { go("https://billwurtz.com/2plus3.mp4"); }
});