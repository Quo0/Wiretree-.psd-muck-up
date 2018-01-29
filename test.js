equalHeightBg();
function equalHeightBg(){
		window.onresize = function(e){
		var mainContentHeight = document.querySelector('.mainContainer').offsetHeight;
		var headerBgHeight = document.querySelector('.headerBg').offsetHeight;
		var contentBg = document.querySelector('.contentBg');
		contentBg.style.height = mainContentHeight - headerBgHeight + "px";
	}
}

menuToggler();
function menuToggler(){
	var burgerBtn = document.querySelector(".burger");
	var nav = document.querySelector(".nav");
	burgerBtn.onclick = function(e){
		if(burgerBtn.className == "burger"){
			burgerBtn.className = "burger clicked"
		}
		else{
			burgerBtn.className = "burger"
		}
		if(nav.className == "nav"){
			nav.className = "nav clicked"
		}
		else{
			nav.className = "nav"
		}
	}
	window.onresize = function(){
		burgerBtn.className = "burger"
		nav.className = "nav"
	}
	
}

slider();
function slider(){	
	var sliderWindow = document.querySelector(".sliderWindow");
	var sliderLine = document.querySelector(".slidesLine");
	var slideWidth = document.querySelector(".slide").offsetWidth;
	var slideCount = sliderLine.querySelectorAll(".slide").length;
	var counter = 1;
	var left;	
	function sleft(){
				left = counter * slideWidth;
				sliderLine.style.left = -1 * left + "px";
			}
	sliderMove();
	function sliderMove(){
		sliderLine.style.transition = "all .5s"; // to set transition back after resize
		if(counter < slideCount){			
			sleft();
			counter ++;	
		}
		else{
			counter = 0;			
		}
		timerId = setTimeout(sliderMove, 3000); // global variable for stoping timer on hover
	}

	// stop timer on hover
	sliderWindow.onmouseenter = function(){
		clearTimeout(timerId);
	}
	sliderWindow.onmouseleave = function(){
		timerId = setTimeout(sliderMove, 3000);
	}

	// changing slides size and position on resize
	window.onresize = function(){
		slideWidth = document.querySelector(".slide").offsetWidth;
		sliderLine.style.transition = "all 0s"; // to stop shaking while resizing
		if(counter == 0){
			left = (slideCount - 1) * slideWidth;
			sliderLine.style.left = -1 * left + "px";
		}
		else{			
			left = (counter - 1) * slideWidth;
			sliderLine.style.left = -1 * left + "px";
		}
	}
}

