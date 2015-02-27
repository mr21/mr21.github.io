$(function() {

	var	SLIDE_DUR = 250;

	dataToHtml();

	// languages ---------------------------
	(function() {
		var	jq_oldLang = $(),
			jq_languages = $(".languages"),
			langs = {
				en: $("[href*=en]", jq_languages),
				fr: $("[href*=fr]", jq_languages)
			};
		locationHash.watch({
			lang: function(l) {
				l = l || "en";
				jq_oldLang.removeClass("selected");
				jq_oldLang = langs[l].addClass("selected");
				document.body.lang = l;
			}
		});
	})();

	// design: dark/light ------------------
	locationHash.watch({
		light: function(l) {
			document.body.className = l ? "light" : "";
		}
	});

	// links mouseover/out -----------------
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

	// page .thatUseIt ---------------------
	(function() {
		var	jq_page = $("#data .skills > *, #data .projects > *"),
			jq_tags = jq_page.find(".tags a");
		jq_page.each(function() {
			var	name = this.className,
				html = "",
				nbProj = 0;
			jq_tags.each(function(i) {
				if (name === this.textContent.toLowerCase()) {
					var jq_page = jq_tags.eq(i).parent().parent();
					++nbProj;
					html +=
						"<li><a href='##toggle(p, "+jq_page[0].className+")'>"+
							jq_page.find("h2").html()+
						"</a></li>";
				}
			});
			if (nbProj) {
				$(
					"<div class='subRub'>"+
						"<a href='#' class='gray subTitle'>"+
							"<i class='fa fa-fw fa-code'></i> "+
							"<span lang='en'>I made "+nbProj+" project"+(nbProj>1?"s":"")+" with it</span> "+
							"<span lang='fr'>J'ai fait "+nbProj+" projet"+(nbProj>1?"s":"")+" avec</span> "+
						"</a>"+
						"<ul>"+
							html+
						"</ul>"+
					"</div>"
				).appendTo(this);
			}
		});
	})();

	// page .subTitle ----------------------
	$("#data .subTitle").click(function() {
		$(this)
			.toggleClass("open")
			.next().slideToggle(SLIDE_DUR);
		return false;
	});

	// .social -----------------------------
	(function () {
		var	jq_social = $(".social"),
			jq_links = $(".link > *", jq_social),
			jq_oldLink = $(),
			jq_close = $(".close", jq_social),
			fn_close = function() {
				jq_oldLink
					.removeClass("open")
					.parent()
						.removeClass("selected")
						.parent()
							.removeClass("one-is-selected");
				jq_oldLink[0]._jq_link.fadeOut(200);
			};

		jq_close.click(function() {
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
	})();

	// -------------------------------------

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
			jq_page.slideDown(SLIDE_DUR, function() {
				var jq_subTitles = $(this).find(".subTitle");
				if (!jq_subTitles.hasClass("open"))
					jq_subTitles.eq(0).click();
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
				jq_page.slideUp(SLIDE_DUR, function() {
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
				.slideUp(SLIDE_DUR);
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
				openPage($("a." + p));
		}
	});

});
