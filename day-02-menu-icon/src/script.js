$(".menu-icon").on("click", function(event){
	$(this).toggleClass("active");
	$(this).find("div").removeClass("no-animation");
})