var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
	console.log ("Closing menu")
});

function checkInput() {
	console.log ("check it baby");
    var x = document.getElementById("input-cuadro");
    if (x.value.toUpperCase() == "CUADRO"){
		document.getElementById("form-cuadro").classList.remove("has-error");
	}
	else{
		document.getElementById("form-cuadro").classList.add("has-success");
	}
}