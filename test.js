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
	var burgerBtn = document.querySelectorAll(".burger");
	Array.from(burgerBtn).forEach(function(burger){
		var nav = document.querySelectorAll(".nav");
		burger.onclick = function(e){
			if(burger.className == "burger"){
				burgerBtn[0].className = "burger clicked"
				burgerBtn[1].className = "burger clicked"
			}
			else{
				burgerBtn[0].className = "burger"
				burgerBtn[1].className = "burger"
			}
			nav.forEach(function(n){
				if(n.className == "nav"){
					n.className = "nav clicked"
				}
				else{
					n.className = "nav"
				}
				n.onmouseleave = function(){
					Array.from(nav);
					nav[0].className = "nav"
					nav[1].className = "nav"
				   	burgerBtn[0].className = "burger"
					burgerBtn[1].className = "burger"
				}
			})			
		}
	})	
}

window.onload = function slider(){	
	var sliderWindow = document.querySelector(".sliderWindow");
	var sliderLine = document.querySelector(".slidesLine");
	var slideWidth = document.querySelector(".slide").offsetWidth;
	var slideCount = sliderLine.querySelectorAll(".slide").length;
	var counter = 0;
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
		timerId = setTimeout(sliderMove, 4000); // global variable for clearTimeout on hover
	}

	// stop timer on hover
	sliderWindow.onmouseenter = function(){
		clearTimeout(timerId);
	}
	sliderWindow.onmouseleave = function(){
		timerId = setTimeout(sliderMove, 4000);
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
			left = (counter - 1) * slideWidth; // need to -1 due to slide switching 
			sliderLine.style.left = -1 * left + "px";
		}
	}
}

window.onload = function smoothLinks(){
	var nav = document.querySelectorAll(".nav");
	var burgerBtn = document.querySelectorAll(".burger");
	console.log(nav)
	var headhesiveWrapper = document.querySelector("#Headhesive-wrapper");
	Array.from(nav).forEach(function(navig){
		navig.addEventListener("click", function(e){
			if(e.target.tagName =="A"){
				console.log(e.target)
				e.preventDefault();
				var linkName = e.target.innerHTML.toLowerCase();
				var idName = "#"+linkName;
				var targetBlock = document.querySelector(idName);
				var y = targetBlock.offsetTop - headhesiveWrapper.offsetHeight;
				var scrollPosition = window.pageYOffset;
				// reseting menu for mobiles
				Array.from(nav).forEach(function(n){
					n.className = "nav";
				})
				Array.from(burgerBtn).forEach(function(b){
					b.className = "burger";
				})
				//
				scrollToId();
				function scrollToId(){
					var timer;
					var step = 50;
					if(targetBlock.offsetTop < 300){
						y = targetBlock.offsetTop;
					}
					if(scrollPosition < y){
						window.scrollTo(0, scrollPosition);
						scrollPosition = scrollPosition + step;
						if( ((Math.abs(y) - Math.abs(scrollPosition)) >= step) || ((Math.abs(scrollPosition) - Math.abs(y)) >= step)){							
							timer = setTimeout(scrollToId, 10);
						}
							else{
							clearTimeout(timer);
							window.scrollTo(0, y); // to the point
						}
					}
					else if(scrollPosition > y){
						window.scrollTo(0, scrollPosition);
						scrollPosition = scrollPosition - step;
						if( ((Math.abs(y) - Math.abs(scrollPosition)) >= step) || ((Math.abs(scrollPosition) - Math.abs(y)) >= step)){							
							timer = setTimeout(scrollToId, 10);
						}
						else{
							clearTimeout(timer);
							window.scrollTo(0, y); // to the point
						}
					}					
				}
			}
		})
	})	
}


var options = {
  offset: 500
}
var header = new Headhesive('#Headhesive-wrapper', options);



