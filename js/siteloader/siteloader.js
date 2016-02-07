function downloadPage(url) {
	$('#siteloader-pagecontainer').load(url, function () {
		preLoadPages(url);
	});
}

function insertPage(url) {
	$('#siteloader-pagecontainer').html(sessionStorage.getItem(url));
	preLoadPages(url);
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

function preLoadPage(pageUrl) {
	var pageName = getUrlFromHash('#'+pageUrl.split('#')[1]);
	$.get(pageName, function (pageHTML) {
		sessionStorage.setItem(pageName, pageHTML);
	}, 'html');
}

function preLoadPages(url) {
	var page_hashes = findHashLinks(url);
	$.each(page_hashes, function (index, value) {
		preLoadPage(value.href);
	});
}

function loadPage(url) {
	if (sessionStorage.getItem(url) != null)
		insertPage(url);
	else
		downloadPage(url);
}

// Loads the given page from the url's #
$(window).on('hashchange', function (e) {
	var url = getUrlFromHash(window.location.hash);
	loadPage(url);
});

// Run on page load
var url = getUrlFromHash(window.location.hash);
loadPage(url);
