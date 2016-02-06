function insertPage(url) {
	$('#siteloader-pagecontainer').load(url, function () {
		//find pages to include
		var page_hashes = findHashLinks(url);
		$.each(page_hashes, function( index, value ) {
			preLoadPage(value);
		});
	});
}

function findHashLinks(url) {
	return $("#siteloader-pagecontainer a[href^='#']").toArray();
}

function getUrlFromHash(hash) {
	var url;
	switch (hash) {
		case '#twan': 	url = "pages/twan.html";		break;
		case '#vic': 	url = "pages/vic.html";			break;
		case '#a1': 	url = "pages/assignment1.html";	break;
		case '#a2': 	url = "pages/assignment2.html";	break;
		default: 		url = "pages/home.html";
	}
	return url;
}

function loadPage(url) {
	insertPage(url);
}

function preLoadPage(pageUrl) {
	// TODO
	// var res = document.createElement("link");
	// res.rel = "preload";
	// res.href = pageUrl;
	// document.head.appendChild(res);
}

// Loads the given page from the url's #
$(window).on('hashchange', function (e) {
	var url = getUrlFromHash(window.location.hash);
	loadPage(url);
});

// Run on page load
var url = getUrlFromHash(window.location.hash);
loadPage(url);
