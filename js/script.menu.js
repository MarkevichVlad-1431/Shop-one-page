/*меню справа при клике*/
function menuAnimate(elem) {
	rightSidebar.none = !rightSidebar.none;
	if (!rightSidebar.none) {
		header.style.width = '100%';
		rightSidebar.style.display = 'none'
	} else { 
		header.style.width = '75%';
		rightSidebar.style.display = 'block';	
	}
}

var header = document.getElementById("header");
var rightSidebar = document.getElementById("rightSidebar");

/*меню справа при клике*/
document.onclick = function(event) {
	var target = event.target;
	if (target.getAttribute("alt") == "line") {
		menuAnimate(target);
	} return;
}	