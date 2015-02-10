function lg(s) { console.log(s) }

$(function() {

	var	jq_aOld,
		jq_page = $(".global .page").detach(),
		jq_projectsContent = $(".rub.projects .content");

	document.body.lang = "en";

	$.each(window.projectsData, function() {
		$('<a href="#' + this.href + '" style="background-image: url(' + this.img + ');"></a>')
			.appendTo(jq_projectsContent)
			[0].pageData = this;
	});

	$(".rub .content").each(function() {
		var	idTimeout,
			jq_content = $(this);
		jq_content.children("a")
			.mouseover(function() {
				jq_content.addClass("alpha");
				clearTimeout(idTimeout);
			})
			.mouseout(function() {
				idTimeout = setTimeout(function() {
					jq_content.removeClass("alpha");
				}, 50);
			});
	});

	function writeData(jq_a) {
		var d = jq_a[0].pageData;
		if (jq_aOld)
			jq_aOld
				.removeClass("selected");
		jq_a
			.addClass("selected");
		jq_page
			.children("h2").text(d.title).end()
			.children("a").prop("href", d.href).end()
			.children("p[lang='en']").html(d.en).end()
			.children("p[lang='fr']").html(d.fr).end();
		jq_aOld = jq_a;
	}

	function setPage(jq_a) {
		writeData(jq_a);
	}

	window.onhashchange = function() {
		var jq_a = $("[href='" + window.location.hash + "']");
		if (jq_a[0] && jq_a[0].pageData) {
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
			if (!jq_aNext) {
				setPage(jq_a);
			} else {
				jq_page.slideUp(250, function() {
					setPage(jq_a);
					jq_page
						.hide()
						.insertAfter(jq_aNext)
						.slideDown(250);
				});
			}
		}
	};
	window.onhashchange();

});
