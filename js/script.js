/*
	-> Name: index.js
	-> Description: The main backend script for the webpage.
	-> Resource: /js/index.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


let linkShortener = document.forms.newlink;

let shortener =(event)=> {
	event.preventDefault();
	let shortenedLink = 'fga.sh/example';
	let originalUrl = urlbox.value;
	// let linkPreview = getSitePreview(originalUrl);

	link.setAttribute( 'link', shortenedLink );
	link.setAttribute( 'original', originalUrl );
	/* try {
		link.setAttribute( 'background', linkPreview.image );
		link.styling( 'background', `url("${linkPreview.image}")` );
	} catch {
		link.removeAttribute('background');
	} */
	link.show();	
}

linkShortener.onsubmit = shortener;

urlbox.oninvalid =(event)=> {
	event.preventDefault();
	let formattedURL = `https://${urlbox.value}`;

	if (urlbox.value === '2+3') return go("https://billwurtz.com/2plus3.mp4");

	if ( isValidURL(formattedURL) ) {
		urlbox.value = formattedURL;
		shortener(event);
	} else {
		invalidurl.show();
	}
};

querySelector('button.show-completed').onclick =(event) => {
	event.currentTarget.addClass('completed');
};

copylink.onclick =()=> {
	navigator.clipboard.writeText(link.link);
};
sharelink.onclick =()=> {
	let data = {
		title: link.original,
		text: `Redirect to ${link.original}.`,
		url: link.link
	};
	navigator.share(data);
};