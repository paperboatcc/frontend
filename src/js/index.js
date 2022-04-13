/*
	-> Name: index.js
	-> Description: The main backend script for the webpage.
	-> Resource: /src/js/index.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


let linkCard =(originalUrl, result)=> {
	let slug = result.replace('fga.sh/', '');

	return `
<main>
	<info id='${slug}' class='link-card'
		link='${slug}'
	>
		Fasm.ga has generated this link for
		<a href="${originalUrl}">${originalUrl}</a>.
	</info>
</main>`
};

$(newlink).on('submit', (event) => {
	event.preventDefault();
	$('.home')
	.appendAnimated(
		linkCard($(urlbox).val(), 'Example')
	);
});

$(urlbox).on('invalid', (event) => {
	let formattedURL = `http://${$(urlbox).val()}`;
	if ( isValidURL(formattedURL) ) {
		event.preventDefault();
		$(urlbox).val(formattedURL);
		form.submit();
	}
});

/* JS debug page code */
$(debug).on('input', (event) => {
	event.preventDefault();
	debug(
		$(repl).val(), (result, error)=> {
			let infoType = error ? 'error' : 'info';
			let infoTitle = error ? error.constructor.name : repl.val();
			let replColor = error ? 'var(--desert-red-80)' : 'var(--accent)';
			$(repl).css('color', replColor);
			$('#result')
			.attr('type', infoType)
			.attr('title', infoTitle)
			.text(result);
		}
	);
	if ($(repl).val() === "2+3") { go("https://billwurtz.com/2plus3.mp4"); }
});