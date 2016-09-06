
$(function(){

	$("section")
	.mouseover(function(e){
		var hasSlid = 0;
		//creates hash
		var id = "#" + $(this).attr("id");
		
		//!!Should probably move this to a class toggle situation...will do later.
		var h = 0;
		if(id == "#projects") h = "1020px";
		else if(id == "#contact") h = "500px";
		else h = "800px";

		//causes the section to grow 
		$(this).animate( { height: h }, 0);

		if (!hasSlid) {
			// scrolls down to the div on which the user has hovered
			$("html, body").animate({
				scrollTop: $(id).offset().top
			}, 100);
		};
		hasSlid = 1;
 
	})
	.mouseleave(function(e){
		//causes the section to become smaller
		$(this).animate( { height: "100px" }, 0);
		id = "";
		hasSlid = 0;
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
