(function() {
		setTimeout(setTheme, 200);
})();
function setTheme() {
	var wrapper = document.getElementById('watch-player');
	wrapper.innerHTML = wrapper.innerHTML.replace('flashvars="', 'flashvars="theme=dark&');
}