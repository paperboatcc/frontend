/*
	-> Name: utils.js
	-> Description: General utility/debugging functions
	-> Resource: /js/utils.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


/* Select an element from the document */
let querySelector =(selector) => {
	let element = typeof selector == 'string'
	              ? document.querySelector(selector)
								: selector;

	return element;
}

Element.prototype
.setContent = function(html) {
	this.innerHTML = html;
	return this;
}
Element.prototype
.loadPage = function(uri) {
	getText(uri, then =(text)=> { this.setContent(text); });
	return this;
};

Element.prototype
.getStyle = function(rule = null, value = null) {
	let computedStyle = getComputedStyle(this);

	if (rule) return computedStyle.getPropertyValue(rule);
	if (rule && value) {
		this.style.setProperty(rule, value);
		return this;
	}

	return computedStyle;
}

document.documentElement.theme = document.documentElement.getAttribute('theme');

let root = document.documentElement;

/* Change the user's location */
function go(href) {
	window.location.href = href;
	return href;
}

/* Refresh the page */
function refresh() {
	go('');
}

/* Validate URL */
function isValidURL(string) {
	let url;
	try {
		url = new URL(string);
	} catch (e) {
		return false;
	}

	return (url.protocol === 'http:'
		|| url.protocol === 'https:')
		&& url.hostname.includes('.');
}

/* Fetch text from URI */
function getText(uri, then =(result)=> {}) {
	fetch(uri)
	.then( (response) => response.text() )
	.then( (result) => { then(result) });
}

/* Move to a specific section of the website */
function moveTo(page) {
	let path = page;
	// Check if the page exists in the pages list
	// If so, move to the associated path

	if ( page in pages ) path = pages[page];
	// Add a leading # hash to the given string if not already present
	if ( !path.startsWith("#") ) path = `#${path}`;

	// Move to the specified section; it just adds #section to the URL
	window.location.hash = path;
}

/* Toggles document design mode on/off */
function design() {
	let isDesignModeOn
		= document.designMode == 'on'
		? true
		: false;

	return document.designMode
		= isDesignModeOn
		? 'off' : 'on';
}

/* Generate a random whole number */
Math['randint'] = function(max) {
	return Math.floor( Math.random() * max++ );
};
/* Pick a random item from an array */
Math['pick'] = function(list) {
	let randomIndex = Math.randint(list.length);
	return list[randomIndex];
}

/* Handling screen sizes */
let screenSmallerThan =(size) => matchMedia(
	`only screen and (max-width: ${size}px)`
).matches;
let screenLargerThan =(size) => matchMedia(
	`only screen and (min-width: ${size}px)`
).matches;

Array.prototype.bad = function() {
	console.log("im bad")
}

// Fuck, this won't work.
/* function getSitePreview(uri) {
	let siteDocument,
		ogTitle, ogType, ogImage, ogUrl;
	try {
		getText(uri, then =(text)=> {
			siteDocument = DOMParser.parseFromString(text);
		});

		ogTitle = siteDocument.querySelector('[name="og:title]');
		ogType = siteDocument.querySelector('[name="og:type]');
		ogImage = siteDocument.querySelector('[name="og:image]');
		ogUrl = siteDocument.querySelector('[name="og:url]');
	} catch {
		return null;
	}

	return { ogTitle, ogType, ogImage, ogUrl };
} */