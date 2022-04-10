/*
	-> Name: index.js
	-> Description: The main backend script for the webpage.
	-> Resource: /src/js/index.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


let form = $('#newlink');
let urlBox = $('#urlbox');

form.on('submit', (event) => {
	event.preventDefault();
	$('.home')
	.append(
	`<info id='linknotice'
		title='${urlBox.val()}'
	>
		You entered a valid URL: ${urlBox.val()}<br/>
		URL shortening will be functional in M4. Sorry for the wait!
	</info>`
	);
});

urlBox.on('invalid', (event) => {
	let formattedURL = `http://${urlBox.val()}`;
	if ( isValidURL(formattedURL) ) {
		event.preventDefault();
		urlBox.val(formattedURL);
		form.submit();
	}
});

/* JS debug page code */
let debugForm = $('#debug');
let repl = $('#repl');

debugForm.on('input', (event) => {
	event.preventDefault();
	debug(
		repl.val(), (result, error)=> {
			let infoType = error ? 'error' : 'info';
			let infoTitle = error ? error.constructor.name : repl.val();
			let replColor = error ? 'var(--desert-red-80)' : 'var(--accent)';
			repl.css('color', replColor);
			$('#result')
			.attr('type', infoType)
			.attr('title', infoTitle)
			.text(result);
		}
	);
	if (repl.val() === "2+3") { go("https://billwurtz.com/2plus3.mp4"); }
});