function waiting() {
	var
		pos,
		faded = false,
		jqWaiting = $(".waiting")
	;

	function fadeOut() {
		if ( !faded ) {
			faded = true;
			jqWaiting.addClass( "fadeOut" );
			pos = $( "[name='"+ locationHash.data.p +"']" ).position();
			if ( pos ) {
				$( "html, body" ).animate({
					scrollTop: pos.top
				}, 400);
			}
		}
	}

	setTimeout( fadeOut, 5000 );
	$( window ).load( fadeOut );
}
