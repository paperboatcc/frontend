/*
	-> Name: index.js
	-> Description: The main backend script for the webpage.
	-> Resource: /src/js/index.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


let linkCard =(originalUrl, result)=> {
	let slug = result.replace('fga.sh/', '');
	copy(result);

	return `
<main>
	<dialog id='${slug}' class='link-card'
		link='${slug}'
	>
		Fasm.ga has generated this link for
		<a href="${originalUrl}">${originalUrl}</a>.
	</dialog>
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
