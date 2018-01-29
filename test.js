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

setTimeout(slider, 4000);
function slider(){
	var sliderLine = document.querySelector(".slidesLine");
	var slideWidth = document.querySelector(".slide").offsetWidth;
	var counter = 1;
	var left;
	function sleft(){
				left = counter * slideWidth;
				sliderLine.style.left = -1 * left + "px";
			}
	setTimeout(sliderMove, 1000);
	function sliderMove(){
		if(counter < 4){			
			sleft();
			counter ++;	
		}
		else{
			counter = 0;			
		}
		setTimeout(sliderMove, 2000);
	}
	window.onresize = function(){
		slideWidth = document.querySelector(".slide").offsetWidth;
		sleft();
	}
}

