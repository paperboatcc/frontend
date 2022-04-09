/*
	Appends dynamic properties to the resources object
*/
pages['_home'] = $('main > section').attr('id') ?? "#_null";
themes['_auto'] = window.matchMedia('(prefers-color-scheme: light)').matches
	                ? themes.light
                  : themes.dark;