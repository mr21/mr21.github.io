function lg(s) { console.log(s) }

$(function() {

	var	jq_aOld,
		jq_page = $(".global .page").detach(),
		jq_projectsContent = $(".rub.projects .content");

	document.body.lang = "en";

	$.each(window.projectsData, function() {
		var a = $('<a style="background-image: url(' + this.img + ');"></a>')
			.prop("pageData", this)
			.attr({
				href:     "#" + this.href,
				hrefOld:  "#" + this.href,
				style:    "background-image: url('" + this.img + "');"
			})
			.appendTo(jq_projectsContent);
	});

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

	function writeData(jq_a) {
		var d = jq_a.prop("pageData");
		if (jq_aOld) {
			jq_aOld.attr("href", jq_aOld.attr("hrefOld"));
		}
		jq_a
			.attr("href", "#")
			.parent()
				.addClass("alpha-selected");
		jq_page
			.children("h2").text(d.title).end()
			.children("a").prop("href", d.href).end()
			.children("p[lang='en']").html(d.en).end()
			.children("p[lang='fr']").html(d.fr).end();
		jq_aOld = jq_a;
	}

	window.onhashchange = function() {
		var	hash = window.location.hash,
			slideDur = 150;
		function slideUp() {
			jq_page.slideUp(slideDur);
			jq_aOld
				.attr("href", jq_aOld.attr("hrefOld"))
				.parent()
					.removeClass("alpha-selected alpha-mouseover")
		}

		if (!hash) {
			if (jq_aOld && jq_aOld[0]) {
				slideUp();
			}
		} else {
			var jq_a = $("[href='" + hash + "']");
			if (jq_a.prop("pageData")) {
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
				if (jq_aOld && jq_a[0] === jq_aOld[0]) {
					if (jq_a.attr("href") === "#") {
						slideUp();
					} else {
						writeData(jq_a);
						jq_page
							.slideDown(slideDur);
					}
				} else if (!jq_aNext) {
					writeData(jq_a);
					jq_page.slideDown(slideDur);
				} else {
					jq_page.slideUp(slideDur, function() {
						writeData(jq_a);
						jq_page
							.hide()
							.insertAfter(jq_aNext)
							.slideDown(slideDur);
					});
				}
			}
		}
	};
	window.onhashchange();

});
