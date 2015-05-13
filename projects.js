function projects(dur) {
	var	jq_aOld,
		jq_page = $("<div class='page'>").hide();

	function writeData(jq_a) {
		if (jq_aOld)
			jq_aOld.removeClass("selected");
		jq_a.addClass("selected")
			.parent().addClass("alpha-selected");
		jq_page
			.children().detach().end()
			.append(jq_a.prop("el_data"));
		jq_aOld = jq_a;
	}

	function openPage(jq_a) {
		function slideDown() {
			jq_page.slideDown(dur, function() {
				var jq_subTitles = $(this).find(".subTitle");
				if (!jq_subTitles.hasClass("open"))
					setTimeout(function() {
						jq_subTitles.eq(0).click();
					}, 300);
			});
		}

		if (jq_a.prop("el_data")) {
			var	jq_aNext_before,
				jq_aNext = jq_a;
			for (;;) {
				jq_aNext_before = jq_aNext;
				jq_aNext = jq_aNext.next();
				if (!jq_aNext[0])
					jq_aNext = jq_aNext_before;
				else if (jq_aNext[0].tagName !== "A")
					jq_aNext = null;
				else if (jq_aNext.position().top > jq_aNext_before.position().top)
					jq_aNext = jq_aNext_before;
				else
					continue;
				break;
			}
			if (!jq_aNext || (jq_aOld && jq_a[0] === jq_aOld[0])) {
				writeData(jq_a);
				slideDown();
			} else {
				if (jq_aOld)
					jq_aOld.parent().removeClass("alpha-selected alpha-mouseover");
				jq_page.slideUp(dur, function() {
					writeData(jq_a);
					jq_page.insertAfter(jq_aNext);
					slideDown();
				});
			}
		}
	}

	function closePage() {
		if (jq_aOld && jq_aOld[0]) {
			jq_page
				.slideUp(dur);
			jq_aOld
				.removeClass("selected")
				.parent()
					.removeClass("alpha-selected alpha-mouseover");
		}
	}

	locationHash.watch({
		p: function(p) {
			if (!p)
				closePage();
			else
				openPage($("[name='"+p+"']"));
		}
	});
}
