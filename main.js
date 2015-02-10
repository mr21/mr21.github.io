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
		var d = jq_a.prop("pageData");
		if (jq_aOld) {
			jq_aOld.attr("href", jq_aOld.attr("hrefOld"));
		}
		jq_a
			.attr("href", "#")
			.parent()
				.addClass("selected");
		jq_page
			.children("h2").text(d.title).end()
			.children("a").prop("href", d.href).end()
			.children("p[lang='en']").html(d.en).end()
			.children("p[lang='fr']").html(d.fr).end();
		jq_aOld = jq_a;
	}

	window.onhashchange = function() {
		var	hash = window.location.hash;
		function slideUp() {
			jq_page.slideUp(250);
			jq_aOld
				.attr("href", jq_aOld.attr("hrefOld"))
				.parent()
					.removeClass("selected");
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
							.slideDown(250);
					}
				} else if (!jq_aNext) {
					writeData(jq_a);
					jq_page.slideDown(250);
				} else {
					jq_page.slideUp(250, function() {
						writeData(jq_a);
						jq_page
							.hide()
							.insertAfter(jq_aNext)
							.slideDown(250);
					});
				}
			}
		}
	};
	window.onhashchange();

});
