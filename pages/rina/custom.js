/*jslint browser: true*/
/*global $, jQuery, alert*/

function load_popovers() {
	$('.day-a').popover({title: "Materials",
		content: "<a href='http://www.w3schools.com/bootstrap/default.asp' target='_blank'>BS Home</a><br><a href='http://www.w3schools.com/bootstrap/bootstrap_get_started.asp' target='_blank'>BS Getting Started</a>",
		html: true, placement: "bottom"});

	$('.day-b').popover({title: "Materials",
		content: "<a href='http://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp' target='_blank'>BS Grid Basic</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_typography.asp' target='_blank'>BS Typography</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_tables.asp' target='_blank'>BS Tables</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_images.asp' target='_blank'>BS Images</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_jumbotron_header.asp' target='_blank'>BS Jumbotron</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_wells.asp' target='_blank'>BS Wells</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_alerts.asp' target='_blank'>BS Alerts</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_buttons.asp' target='_blank'>BS Buttons</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_button_groups.asp' target='_blank'>BS Button Groups</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_glyphicons.asp' target='_blank'>BS Glyphicons</a>" +
			"<br><a href='http://www.w3schools.com/bootstrap/bootstrap_badges_labels.asp' target='_blank'>BS Badges/Labels</a>",
		html: true, placement: "bottom"});

	$('.intro-day').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/html/default.asp' target='_blank'>here</a> to view the content." +
			"<br><br>The pages you will need to look at are from 'HTML HOME' to 'HTML XHTML'." +
			"<br><br>Some pages in between will be left out but the submission, where you need to make your edits, will tell you where you need to look for to gather information.</p>",
		html: true, placement: "bottom"});
}
