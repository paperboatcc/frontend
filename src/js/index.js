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