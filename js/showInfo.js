var content = document.getElementById("content");
//content.children[2]  services
var services = content.children[2];

services.onclick = function (event) {
	var target = event.target;

	if (target.getAttribute("name") == "entrance") {
		while (target != services) {
   			if (target.tagName == 'BUTTON') {
     			// нашли элемент, который нас интересует!
      			showMessage(target);
      			return;
    		}
    	target = target.parentNode;
  		}
	} else { 
		if (target.getAttribute("name") == "exit") {
			while (target != services) {
   				if (target.tagName == 'BUTTON') {
     				// нашли элемент, который нас интересует!
      				closeText(target);
      				return;
    			}
    		target = target.parentNode;
  			}
		} return;
	}
}

function showMessage(elem) {
	elem.parentElement.classList.remove("block");
	elem.parentElement.classList.add("active");
}

function closeText(elem) {
	elem.parentElement.classList.remove("active");
	elem.parentElement.classList.add("block");
}

