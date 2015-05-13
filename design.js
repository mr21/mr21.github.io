function design() {
	locationHash.watch({
		light: function(l) {
			document.body.className = l ? "light" : "";
		}
	});
}
