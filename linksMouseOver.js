function linksMouseOver() {
	$(".rub .content").each(function() {
		var	idTimeout,
			jq_content = $(this);
		jq_content.children("a")
			.mouseover(function() {
				jq_content.addClass("alpha-mouseover");
				clearTimeout(idTimeout);
			})
			.mouseout(function() {
				idTimeout = setTimeout(function() {
					jq_content.removeClass("alpha-mouseover");
				}, 50);
			});
	});
}
