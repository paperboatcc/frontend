/*
	-> Name: index.js
	-> Description: The main backend script for the webpage.
	-> Resource: /src/js/index.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


let linkShortener = document.forms.newlink;

let shortener =(event)=> {
	event.preventDefault();

	link.setAttribute( 'link', 'fga.sh/example' );
	link.setAttribute( 'original', urlbox.value );
	link.show();	
}

linkShortener.onsubmit = shortener;

urlbox.oninvalid =(event)=> {
	event.preventDefault();
	let formattedURL = `https://${urlbox.value}`;

	if (urlbox.value === '2+3') go("https://billwurtz.com/2plus3.mp4");

	if ( isValidURL(formattedURL) ) {
		urlbox.value = formattedURL;
		shortener(event);
	} else {
		invalidurl.show();
	}
};

$('button.show-completed').onclick =(event) => {
	$(event.currentTarget).addClass('completed');
};

copylink.onclick =()=> {
	let link = link.link;
	navigator.clipboard.writeText(link);
};
sharelink.onclick =()=> {
	let link = link.link;
	let original = link.original;

	let data = {
		title: original,
		text: `Redirect to ${original}.`,
		url: link
	};
	navigator.share(data);
};