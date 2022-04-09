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

/* Handling screen sizes */
let screenSmallerThan =(size) => {
	return window.matchMedia(
		`only screen and (max-width: ${size}px)`
	).matches;
}
let screenLargerThan =(size) => {
	return window.matchMedia(
		`only screen and (min-width: ${size}px)`
	).matches;
}

/* Get or set the value a CSS style variable */
function css(name, value = null) {
	// Check if the name starts with -- (the CSS property prefix)
	// if it doesn't, prepend it automatically
	if (!name.startsWith('--')) { name = `--${name}`; }

	// If specified, change the variable's value
	if (value !== null) return root().css(name, value);
	// Else return the value using jQuery
	return $(':root').css(name);
}

/* Move to a specific section of the website */
function moveTo(page) {
	let path = page;
	// Check if the page exists in the pages list
	// If so, move to the associated path

	if (page in pages) { path = pages[page]; }
	// Add a leading # hash to the given string if not already present
	if (!path.startsWith("#")) { path = `#${path}`; }

	// Move to the specified section; it just adds #section to the URL
	window.location.hash = path;
}