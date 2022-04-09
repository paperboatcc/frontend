/*
	Webpage resources: pages, styles, content, scripts etc.
*/
let markup = {
	_index: "index.html",
	index: this._index
};
let pages = {
	_home: '#_home',
	home: this.newLink,
	newLink: '#newLink',
	debugging: '#debugging',
	dashboard: '#dashboard',
	settings: '#settings'
};
let stylesheets = {
	style: "./src/css/style.css",
	static: "./src/css/static.css"
};
let themes = {
	dark: "./src/css/theme/dark.css",
	light: "./src/css/theme/light.css"
};
let scripts = {
	util: "./src/js/utils.js",
	main: "./src/js/index.js",
	debug: "./src/js/debugger.js"
};
let data = {
	userSettings: "./content/byUser/settings.js",
	defaults: "./content/byUser/defaults.js"
};