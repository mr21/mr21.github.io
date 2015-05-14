function waiting() {
	$(window).load(function() {
		var p = locationHash.data.p;
		$(".waiting").addClass("fadeOut");
		if (p) {
			$(document.body).animate({
				scrollTop: $("[name='"+p+"']").position().top
			}, 400);
		}
	});
}
