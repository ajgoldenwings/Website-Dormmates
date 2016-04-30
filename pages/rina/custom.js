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
		html: true, placement: "bottom"
	});

	$('.intro-day').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/html/default.asp' target='_blank'>here</a> to view the content." +
			"<br><br>The pages you will need to look at are from 'HTML HOME' to 'HTML XHTML'." +
			"<br><br>Some pages in between will be left out but the submission, where you need to make your edits, will tell you where you need to look for to gather information.</p>",
		html: true, placement: "bottom"
	});

	$('.intro-a').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/css/css_syntax.asp' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: The basics. Note that messy code is hard to read. Use spacing with spaces or tabs wherever you can to make the page pretty.",
		html: true, placement: "bottom"
	});

	$('.intro-b').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/css/css_colors.asp' target='_blank'>here</a> and <a href='http://www.w3schools.com/css/css_background.asp' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: Color makes your site pop! Black and white is like a black and white tv. Thats for old people, not you.",
		html: true, placement: "bottom"
	});

	$('.intro-c').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/css/css_link.asp' target='_blank'>here</a>, <a href='http://www.w3schools.com/css/css3_images.asp' target='_blank'>here</a> and <a href='http://www.w3schools.com/tags/att_link_target.asp' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: Links are cool, you put them in your website. Basically that.",
		html: true, placement: "bottom"
	});

	$('.intro-d').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/css/css3_images.asp' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: Images, nuff said",
		html: true, placement: "bottom"
	});

	$('.intro-e').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/css/css_table.asp' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: Try making a table a few times. It is hard to figure out the first time. Try it and get it good! Understand the <tag> structure!",
		html: true, placement: "bottom"
	});

	$('.intro-f').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/css/css_list.asp' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: Try to see the similarities of the structure between tables and lists.",
		html: true, placement: "bottom"
	});

	$('.intro-g').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://www.w3schools.com/css/css_display_visibility.asp' and <a href='http://www.w3schools.com/tags/tag_div.asp' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: the first link is above and beyond but you may find it usefull.",
		html: true, placement: "bottom"
	});

	$('.intro-h').popover({title: "Materials",
		content: "<p>Please go to w3schools <a href='http://screencast.com/t/YILl5bdlC' target='_blank'>here</a> to view the content." +
			"<br><br>Other Notes: Ask questions! This is all on your own before you begin bootstrap.",
		html: true, placement: "bottom"
	});


}
