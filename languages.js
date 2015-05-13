function languages() {
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
}
