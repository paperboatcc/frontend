/*
	-> Name: utils.js
	-> Description: General utility/debugging functions
	-> Resource: /src/js/utils.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


/* Select an element for the document */
let $ =(selector) => {
	if (typeof selector != 'string') return selector;
	let element = document.querySelector(selector);

	element[`load`] = function(uri) {
		fetch(uri)
		.then( (response) => response.text() )
		.then( (data) => { element.innerHTML = data; });
	};

	element[`styling`] = function(rule = null, value = null) {
		let style = element.style;
		let computedStyle = getComputedStyle(element);

		if (rule) return computedStyle.getPropertyValue(rule);
		if (rule && value) style.setProperty(rule, value);

		return computedStyle;
	}

	return element;
}
let page =()=> {
	let root = $(`html`);

	root[`variable`] = function(name, value = null) {
		root.styling(name, value);
	}
	root[`theme`] = root.getAttribute('theme');

	return root;
}

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