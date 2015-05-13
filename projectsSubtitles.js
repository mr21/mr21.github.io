function projectsSubtitles(dur) {
	$("#data .subTitle").click(function() {
		$(this)
			.toggleClass("open")
			.next().slideToggle(dur);
		return false;
	});
}
