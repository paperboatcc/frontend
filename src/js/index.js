/*
	-> Name: index.js
	-> Description: The main backend script for the webpage.
	-> Resource: /src/js/index.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


$(newlink).on('submit', (event) => {
	event.preventDefault();
	$('#invalidurl')
	.hide();
	$('#link')
	.attr('link', 'fga.sh/example')
	.attr('original', $(urlbox).val() )
	.show();
});

$(urlbox).on('invalid', (event) => {
	event.preventDefault();
	let formattedURL = `http://${$(urlbox).val()}`;
	if ( isValidURL(formattedURL) ) {
		event.preventDefault();
		$(urlbox).val(formattedURL);
		$(newlink).submit();
	} else {
		$('#invalidurl')
		.show();
	}
});

$('button.show-completed').on('click', (event) => {
	$(event.currentTarget).addClass('completed');
});

$('#copylink').on('click', () => {
	let link = $('#link').attr('link');
	navigator.clipboard.writeText(link);
});
$('#sharelink').on('click', () => {
	let link = $('#link').attr('link');
	let original = $('#link').attr('original');
	let data = {
		title: original,
		text: `Redirect to ${original}.`,
		url: link
	};
	navigator.share(data);
});