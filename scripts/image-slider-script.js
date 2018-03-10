function rotateLeft() {
	load();
	window1.setAttribute("src", image2);
	window2.setAttribute("src", image3);
	window3.setAttribute("src", image1);
}

function rotateRight() {
	load();
	window1.setAttribute("src", image3);
	window2.setAttribute("src", image1);
	window3.setAttribute("src", image2);
}

function load() {
	window1 = document.getElementById("window-1");
	 window2 = document.getElementById("window-2");
	 window3 = document.getElementById("window-3");
	 image1 = window1.getAttribute("src");
	 image2 = window2.getAttribute("src");
	 image3 = window3.getAttribute("src");
}

