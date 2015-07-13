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

			dat = this.link;
			htmlLinks +=
				'<a class="gray" name="'+dat.name+'" href="##toggle(p, '+dat.name+')">'+
					'<img src="'+(dat.img || "logos/"+dat.name+".png")+'"/>';
			if (dat.text) {
				htmlLinks +=
					'<b>'+dat.tag+'</b>'+
					'<span> '+dat.text+'</span>';
			}
			htmlLinks +=
				'</a>';

			htmlData +=
				'<div class="'+dat.name+'">';

			if (dat = this.title) {
				htmlData +=
					'<h2 class="title">';
				if (dat.icon) {
					htmlData +=
						'<i class="fa fa-fw '+dat.icon+'"></i>';
				}
				htmlData +=
						'<span> '+dat.span+'</span>'+
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
			.appendTo(jq_data)
		;

		$(htmlLinks)
			.appendTo(".rub." + this.rub + " .content")
			.prop("el_data", function() {
				return $("."+this.name, jq_data);
			})
		;
	});

}
