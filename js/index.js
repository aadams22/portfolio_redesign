

$(function(){

	$("section")
	.mouseover(function(e){
		//creates hash
		var id = "#" + $(this).attr("id");
		
		//!!Should probably move this to a class toggle situation...will do later.
		var h = null;
		if(id == "#contact") h = "500px";
		//using this form so that no content will be covered and we will still get the easing
		else h = $(id)[0].scrollHeight;

		//causes the section to grow 
		$(this).animate( { height: h }, {duration: 500}, {easing: "easeInCubic"});


		//!!as long as you hover it requires the page to be at 
		//!!the top not allowing the user to scroll down the page.
		//!!need better solution
		// if (!hasSlid) {
		// 	// scrolls down to the div on which the user has hovered
		// 	$("html, body").animate({
		// 		scrollTop: $(id).offset().top
		// 	}, 100);
		// };
		// hasSlid = 1;
 
	})
	.mouseleave(function(e){
		//causes the section to become smaller
		$(this).animate( { height: "100px" }, {duration: 600}, {easing: "easeInCubic"});
		id = "";
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
