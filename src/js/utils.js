/*
	-> Name: utils.js
	-> Description: General utility/debugging functions
	-> Resource: /src/js/utils.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


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

/* Move to a specific section of the website */
function moveTo(page) {
	let path = page;
	// Check if the page exists in the pages list
	// If so, move to the associated path

	if ( page in pages ) { path = pages[page]; }
	// Add a leading # hash to the given string if not already present
	if ( !path.startsWith("#") ) { path = `#${path}`; }

	// Move to the specified section; it just adds #section to the URL
	window.location.hash = path;
}

/* Get or set the value a CSS style variable */
function css(name, value = null) {
	// Check if the name starts with -- (the CSS property prefix)
	// if it doesn't, prepend it automatically
	if ( !name.startsWith('--') ) { name = `--${name}`; }

	// If specified, change the variable's value
	if ( value !== null )
		return $`:root`.css(name, value);
	// Else return the value using jQuery
	return $`:root`.css(name);
}

/* Change the language */
function setLang(lang) {
	$`html`
	.attr('lang', lang);
}

/* Toggles document design mode on/off */
function designMode() {
	let isDesignModeOn
		= document.designMode == 'on'
		? true
		: false;

	return document.designMode
		= isDesignModeOn ? 'off' : 'on';
}

/* Change the theme */
function setTheme(theme) {
	$`body`
	.attr('theme', theme);
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
let screenSmallerThan =(size) => {
	return window.matchMedia(
		`only screen and (max-width: ${size}px)`
	).matches;
};
let screenLargerThan =(size) => {
	return window.matchMedia(
		`only screen and (min-width: ${size}px)`
	).matches;
};

/* Animate HTML appending */
$.fn.appendAnimated = function(html) {
	this.append(html).show('slow');
};