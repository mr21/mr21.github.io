function dataToHtml() {

	var	jq_data =
		$("<div id='data'>")
			.prependTo(document.body);

	$.each(window.data, function() {

		var html = "",
			jq_content = $(".rub." + this.rub + " .content");

		$.each(this.data, function() {
			html +=
				'<div class="'+this.name+'">'+
					'<img src="'+(this.img || "logos/"+this.name+".png")+'"/>'+

					// h2 --------------------
					'<h2>';
			if (this.title.icon)
				html +=
						'<i class="fa '+this.title.icon+'"></i>';
			html +=
						'<span> '+this.title.span+'</span>'+
					'</h2>';

			if (this.appLink)
				html +=
					// .appLink ---------------
					'<a class="appLink" target="_blank" href="'+this.href+'">'+
						'<span lang="en">'+this.appLink.en+'</span>'+
						'<span lang="fr">'+this.appLink.fr+'</span>'+
					'</a>';

			if (this.tags) {
				html +=
					// .tags ------------------
					'<div class="tags">';
				$.each(this.tags, function() {
					html +=
						' <a href="##toggle(p, '+this.name+')">'+this.title+'</a>';
				});
				html +=
					'</div>';
			}

					// .subRub -----------------
			if (this.subRub)
				$.each(this.subRub, function() {
					html +=
					'<div class="subRub">'+
						'<a href="#" class="gray subTitle">'+
							'<i class="fa fa-fw '+this.title.icon+'"></i>'+
							'<span lang="en"> '+this.title.en+' </span>'+
							'<span lang="fr"> '+this.title.fr+' </span>'+
						'</a>'+
						this.content+
					'</div>';
				});
			html +=
				'</div>';
		});

		$("<div>")
			.addClass(this.rub)
			.append(html)
			.appendTo(jq_data)
			.children()
				.each(function() {
					$("<a>")
						.prop("el_data", this)
						.attr("class", this.className)
						.attr("href", "##toggle(p, " + this.className + ")")
						.append($(this).children("img:first-child"))
						.appendTo(jq_content);
				});

	});

}
