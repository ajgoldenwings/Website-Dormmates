console.log('Siteloader Running');

function loadpage(url) {
	$("#siteloader-pagecontainer").load(url);
}

function loadpage_find() {
	switch(window.location.hash) {
		case '#twan':
			loadpage("js/siteloader/pages/twan.html");
			break;
		case '#vic':
			loadpage("js/siteloader/pages/vic.html");
			break;
		case '#a1':
			loadpage("js/siteloader/pages/assignment1.html");
			break;
		case '#a2':
			loadpage("js/siteloader/pages/assignment2.html");
			break;
		default:
			loadpage("js/siteloader/pages/home.html");
	}
}

// Loads the given page from the url's #
$(window).on('hashchange', function(e){
	loadpage_find();
});

// Run on page load
loadpage_find();
