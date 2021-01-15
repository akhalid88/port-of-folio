$(document).ready(function () {

	// Hamburger Toggle 
	$("#navbarButton").click(function () {
		//add .is-active to navbar if it doesn't have it
		if (!$(".navbar-burger").hasClass("is-active")) {
			$(".navbar-burger").addClass("is-active");
			$(".navbar-menu").addClass("is-active");
	
			//click on a menu item to reset navbar
			$(".navbar-item").click(function () {
				$(".navbar-burger").removeClass("is-active");
				$(".navbar-menu").removeClass("is-active");
			})

		} else {
			//remove .is-active from naavbar if it has it
			$("#navbarButton").removeClass("is-active");
			$(".navbar-menu").removeClass("is-active");
		}
	})
})