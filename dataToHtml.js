function dataToHtml() {

	var
		jq_data = $("<div id='data'>").prependTo(document.body)
	;

	$.each(window.data, function() {

		var
			htmlData = "",
			htmlLinks = "",
			dat
		;

		$.each(this.data, function() {
			htmlLinks +=
				'<a class="gray" name="'+this.name+'" href="##toggle(p, '+this.name+')">'+
					'<img src="'+(this.img || "logos/"+this.name+".png")+'"/>';
			if (this.linkText)
				htmlLinks +=
					'<span>'+this.linkText+'</span>';
			htmlLinks +=
				'</a>';

			htmlData +=
				'<div class="'+this.name+'">';

			if (this.title) {
					// h2 --------------------
				htmlData +=
					'<h2 class="title">';
				if (this.title.icon)
					htmlData +=
						'<i class="fa fa-fw '+this.title.icon+'"></i>';
				htmlData +=
						'<span> '+this.title.span+'</span>'+
					'</h2>';
			}

			if (dat = this.appLink) {
				htmlData +=
					'<a class="appLink" target="_blank" href="'+dat.href+'">'+
						'<i class="fa fa-fw"></i> '+
						'<span lang="en">'+dat.en+'</span>'+
						'<span lang="fr">'+dat.fr+'</span>'+
					'</a><br/>';
			}

			if (dat = this.jsfiddle) {
				htmlData +=
					'<a class="jsfiddle" target="_blank" href="'+dat.href+'">'+
						'<i class="fa fa-fw fa-jsfiddle"></i> '+
						'<span lang="en">'+dat.en+'</span>'+
						'<span lang="fr">'+dat.fr+'</span>'+
					'</a><br/>';
			}

			if (this.tags) {
				htmlData +=
					'<div class="tags">';
				$.each(this.tags, function() {
					htmlData +=
						' <a href="##toggle(p, '+this.name+')">'+this.title+'</a>';
				});
				htmlData +=
					'</div>';
			}

			if (this.subRub) {
				$.each(this.subRub, function() {
					htmlData +=
					'<div class="subRub">'+
						'<a href="#" class="gray subTitle">'+
							'<i class="fa fa-fw '+this.title.icon+'"></i>'+
							'<span lang="en"> '+this.title.en+' </span>'+
							'<span lang="fr"> '+this.title.fr+' </span>'+
						'</a>'+
						this.content+
					'</div>';
				});
			}

			htmlData +=
				'</div>';
		});

		$("<div>")
			.addClass(this.rub)
			.append(htmlData)
			.appendTo(jq_data);

		$(htmlLinks)
			.appendTo(".rub." + this.rub + " .content")
			.prop("el_data", function() {
				return $("."+this.name, jq_data);
			});

	});

}
