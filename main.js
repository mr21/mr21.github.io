function lg(s) { console.log(s) }

$(function() {

	$(".rub .content").each(function() {
		var	idTimeout,
			jq_a = $(this).children("a");
		jq_a
			.mouseover(function() {
				jq_a.addClass("hide");
				clearTimeout(idTimeout);
			})
			.mouseout(function() {
				$(this).removeClass("hide");
				idTimeout = setTimeout(function() {
					jq_a.removeClass("hide");
				}, 50);
			});
	});

});
