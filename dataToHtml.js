function dataToHtml() {

	var	el_data =
		$("<div id='data'>")
			.prependTo(document.body);

	$.each(window.data, function() {

		var html = "";

		$.each(this.data, function() {
			html +=
				'<div class="'+this.name+'">'+
					'<img src="'+this.img+'"/>'+

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
			.appendTo(el_data);

	});
}
