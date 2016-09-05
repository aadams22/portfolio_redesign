// console.log('hello world');
$(function(){

	$("section")
	.mouseover(function(e){
		//creates hash
		var h = "#" + $(this).attr("id");
		
		//scrolls down to the div on which the user has hovered
		// $("html, body").animate({
		// 	scrollTop: $(h).offset().top
		// }, 100);

		//causes the section to grow
		if(h == "#projects") { 
			$(this).animate( { height: "1020px" }, 0);
		}else { 
			$(this).animate( { height: "800px" }, 0);
		}

	})
	.mouseleave(function(e){
		//causes the section to become smaller
		$(this).animate( { height: "100px" }, 0);
		h = "";
	});

	//for mobile device to close all tabs
	$("header")
	.click(function(e){
		$("section").animate( { height: "100px" }, 0);
	});

	//adds and removes disabled class from projects to reveal overlay
	$("#projects-container > div").hover(function(){
		$(this).children().toggleClass("disabled");
	});

});
