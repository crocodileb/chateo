$(document).ready(function(){

	$('.radio').click(function(event) {
        $('.btn').addClass('active');
    });

	$('input[name="messenger"]').click(function(event) {
    	localStorage.setItem('myKey1', +$('[name="messenger"]:checked').val());
    });

    $('input[name="frog"]').click(function(event) {
    	localStorage.setItem('myKey2', +$('[name="frog"]:checked').val());
    });
    
    $('[name="aue"]').click(function(event) {
    localStorage.setItem('myKey3', +$('[name="aue"]:checked').val());
    });

    $('input[name="eva"]').click(function(event) {
    	localStorage.setItem('myKey4', +$('[name="eva"]:checked').val());
    });

    $('input[name="cat"]').click(function(event) {
    	localStorage.setItem('myKey5', +$('[name="cat"]:checked').val());
    });

    $('input[name="arh"]').click(function(event) {
    	localStorage.setItem('myKey6', +$('[name="arh"]:checked').val());
    });

    $('input[name="san"]').click(function(event) {
    	localStorage.setItem('myKey7', +$('[name="san"]:checked').val());
    });

    $('input[name="nar"]').click(function(event) {
    	localStorage.setItem('myKey8', +$('[name="nar"]:checked').val());
    });

    $('input[name="lr"]').click(function(event) {
    	localStorage.setItem('myKey9', +$('[name="lr"]:checked').val());
    });

    $('input[name="lrl"]').click(function(event) {
    	localStorage.setItem('myKey10', +$('[name="lrl"]:checked').val());
    });

    $('input[name="moto"]').click(function(event) {
    	localStorage.setItem('myKey11', +$('[name="moto"]:checked').val());
    });

     $('input[name="map"]').click(function(event) {
    	localStorage.setItem('myKey12', +$('[name="map"]:checked').val());
    	var myKey1 = +localStorage.getItem('myKey1');
	    var myKey2 = +localStorage.getItem('myKey2');
	    var myKey3 = +localStorage.getItem('myKey3');
	    var myKey4 = +localStorage.getItem('myKey4');
	    var myKey5 = +localStorage.getItem('myKey5');
	    var myKey6 = +localStorage.getItem('myKey6');
	    var myKey7 = +localStorage.getItem('myKey7');
	    var myKey8 = +localStorage.getItem('myKey8');
	    var myKey9 = +localStorage.getItem('myKey9');
	    var myKey10 = +localStorage.getItem('myKey10');
	    var myKey11 = +localStorage.getItem('myKey11');
	    var myKey12 = +localStorage.getItem('myKey12');
	   	var total = myKey1 + myKey2 + myKey3 + myKey4 + myKey5 + myKey6 + myKey7 + myKey8 + myKey9 + myKey10 + myKey11 +myKey12;
	   	if (total > 70){
			$('a').attr("href", "result.html")
		}
	localStorage.clear();
		
    });

});
