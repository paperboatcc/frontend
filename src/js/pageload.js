/*
     _____
    |  ___|_ _ ___ _ __ ___    __ _  __ _
    | |_ / _` / __| '_ ` _ \  / _` |/ _` |
    |  _| (_| \__ \ | | | | || (_| | (_| |
    |_|  \__,_|___/_| |_| |_(_)__, |\__,_|
                              |___/

	-> Name: pageload.js
	-> Description: Executed at startup for data binding
	-> Resource: /src/js/pageload.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/


/* Responsive UI stuff */
let changeUI =()=> { setUI([
	isDesktop() && 'desktop' ||
	isTablet() && 'tablet' ||
	isMobile() && 'mobile'
]); };
changeUI();
$(window).on('resize', changeUI);

/* Dynamic theming based on user's system preferences */
setTheme('_auto');

/* Automatically move to the user's preferred home page */
moveTo('_home');

/* Prevent users from finding themselves on a blank page */
$(window).on('hashchange', () => {
	// On some browsers, pressing the back button will travel to an empty page,
	// due to our automatic navigation to the home page
	// To avoid this we check if the new hash is empty, and if so, send the user
	// back properly
	if (section() === '') {
		// (we go back twice, to avoid going back to where we were even prior)
		history.go(-2);
	}
	// Check if the current page is in the pages list, if not go back home
	if (!(section() in res.pages)) {
		moveTo('_home');
	}
});