$(function () {
	var	jq_oldLink,
		jq_social = $(".social"),
		jq_links = $(".link > *", jq_social),
		fn_close = function() {
			jq_oldLink
				.removeClass("open")
				.parent()
					.removeClass("selected")
					.parent()
						.removeClass("one-is-selected");
			jq_oldLink[0]._jq_link.fadeOut(200);
		};

	$(window).keydown(function(e) {
		if (e.keyCode === 27)
			fn_close();
	});

	$(".close", jq_social).click(function() {
		fn_close();
		return false;
	});

	$("a[data]", jq_social)
		.each(function(i) {
			this._jq_link = jq_links.eq(i);
		})
		.click(function() {
			var	jq_this = $(this);
			if (!jq_this.hasClass("open")) {
				jq_oldLink = jq_this;
				jq_this
					.addClass("open")
					.parent()
						.addClass("selected")
						.parent()
							.addClass("one-is-selected");
				this._jq_link.fadeIn(500);
			}
			return false;
		});
});
