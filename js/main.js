(function() {
	function fun () {
		var mainElem = document.getElementsByClassName('main')[0];
		mainElem.style.marginTop = -mainElem.offsetHeight/2 + 'px';
	}
	window.onload = function () {
		fun();
	}
	window.onresize = function () {
		fun();
	}
})();