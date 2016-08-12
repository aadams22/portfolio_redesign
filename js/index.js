console.log('hello world');
$(function(){
	var skills = ["HTML5", "CSS3", "C", "Arduino", "Javascript", "jQuery", "AngularJS", "Ruby", "Rails", "MySql", "PostGreSQL", "MongoDB", "php", "WordPress"];	

	$("section")
	.mouseover(function(e){
		console.log("it clicked");
		$(this).animate( {height: "500px"}, 550);
	})
	.mouseleave(function(e){
		$(this).animate( {height: "100px"}, 550);
	});
	

});

