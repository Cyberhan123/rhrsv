$(function() {
	$('.headnav').mouseover(function(e) {
        $('.nav_hid').stop().slideDown(300)
	})
	$('.headnav').mouseout(function(e) {
        $('.nav_hid').stop().slideUp(300)
	})
})
