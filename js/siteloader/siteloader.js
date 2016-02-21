function loadPageFromStorageAndPreload(url) {
	$('#siteloader-pagecontainer').load(url, function () {
		preLoadPages(url);
	});
}

function insertPageAndPreload(url) {
	$('#siteloader-pagecontainer').html(sessionStorage.getItem(url));
	preLoadPages(url);
}

function findHashLinksWithinId(id) {
	return $(id+" a[href^='#']").toArray();
}

function getUrlFromHash(hash) {
	var url;
	switch (hash) {
		case '#twan': 	url = 'pages/twan.html';		break;
		case '#vic': 	url = 'pages/vic.html';			break;
		case '#a1': 	url = 'pages/assignment1.html';	break;
		case '#a2': 	url = 'pages/assignment2.html';	break;
		default: 		url = 'pages/home.html';
	}
	return url;
}

function preLoadPage(pageUrl) {
	var pageName = getUrlFromHash('#' + pageUrl.split('#')[1]);
	savePageToSessionStorage(pageName);
}

function preLoadPages(url) {
	var page_hashes = findHashLinksWithinId('#siteloader-pagecontainer');
	$.each(page_hashes, function (index, value) {
		preLoadPage(value.href);
	});
}

function savePageToSessionStorage(url) {
	$.get(url, function (pageHTML) {
		sessionStorage.setItem(url, pageHTML);
	}, 'html');
}

function loadPageFromHash() {
	var url = getUrlFromHash(window.location.hash);
	if (sessionStorage.getItem(url) != null)
		insertPageAndPreload(url);
	else
		loadPageFromStorageAndPreload(url);
}

// Loads the given page from the url's #
$(window).on('hashchange', function (e) {
	 loadPageFromHash();
});

// Run on page load
sessionStorage.clear();
loadPageFromHash();

// Load Default pages
savePageToSessionStorage('pages/vic.html');
savePageToSessionStorage('pages/twan.html');
savePageToSessionStorage('pages/home.html');
