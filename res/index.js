let content = {
	_index: "index.html",
	index: this._index
};
let sitemap = new Map()
	.set('header', "content/pages/header.html")
	.set('#dashboard', "content/pages/dashboard.html")
	.set('#about', "content/pages/about.html")
	.set('#login', "content/pages/login.html");
let pages = {
	_home: '#_home',
	home: this._home,
	debugging: '#debugging',
	dashboard: '#dashboard',
	about: '#about'
};
let stylesheets = {
	style: "css/style.css",
	static: "css/static.css"
};
let themes = {
	dark: "css/theme/dark.css",
	light: "css/theme/light.css"
};
let scripts = {
	util: "js/utils.js",
	main: "js/index.js",
	debug: "js/debugger.js"
};