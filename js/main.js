(function() {
	function fun () {
		var mainElem = document.getElementsByClassName('main')[0];
		mainElem.style.marginTop = -mainElem.offsetHeight/2 + 'px';
		var body = document.getElementsByTagName('body')[0];
		body.heigth = mainElem.offsetHeight;
	}
	window.onload = function () {
		fun();
	}
	window.onresize = function () {
		fun();
	}
})();