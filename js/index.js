// console.log('hello world');
$(function(){
	// var skills = ["HTML5", "CSS3", "C", "Arduino", "Javascript", "jQuery", "AngularJS", "Ruby", "Rails", "MySql", "PostGreSQL", "MongoDB", "php", "WordPress"];	

	$("section")
	.mouseover(function(e){
		console.log("it clicked");
		$(this).animate( { height: "800px" }, 0);
	})
	.mouseleave(function(e){
		$(this).animate( { height: "100px" }, 0);
	});
	
	!! USE FOR DEVELOPMENT !!x
	$("section")
	.click(function(e){
		console.log("header");
		$(this).animate( { height: "800px" }, 0);
	});


	//for mobile device to close all tabs
	$("header")
	.click(function(e){
		console.log("header");
		$("section").animate( { height: "100px" }, 0);
	});

	$("img").hover(function(){
		console.log("this ", $(this));
		$(this).children().toggleClass("disabled");
	});

});
