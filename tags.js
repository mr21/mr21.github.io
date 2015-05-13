function tags() {
	var	jq_page = $("#data * > *"),
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
}
