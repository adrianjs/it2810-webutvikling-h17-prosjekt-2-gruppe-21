//Show and hide navbar
$(document).ready(function(){
    $("#navpic").click(function(){
        $("#flex-nav").toggle();
    });
    checkWidth(); //her kalles checkWidth() funksjonen for å sjekke hvorvidt burger-ikonet skal vises eller ei
});

let width = $(window).width(); 

$(window).resize(function() {
    width = $(window).width();
    //console.log("sjekker nettsidens bredde");
    checkWidth()
});

function checkWidth(){
	if (width >= 650) {
		$("#flex-nav").css('display','flex');
	}
	else {
		$("#flex-nav").css('display','none');
	}
}