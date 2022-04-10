/*
	Appends dynamic properties to the resources object
*/
pages['_home'] = $('section.home').attr('id') ?? "#_home";
themes['_auto'] = window.matchMedia('(prefers-color-scheme: light)').matches
	                ? themes.light
                  : themes.dark;