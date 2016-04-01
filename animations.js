function Pause() {
	timer = setTimeout("endpause()",3000);
	return false;
}

function endpause() {
	$("#part1").fadeOut("slow");
	$("#part2").fadeOut("slow");
	$("#part3").fadeOut("slow");
	$("#cos").fadeOut("slow");
	
	$("#cos").fadeIn(500, function(){
		$("#title").fadeIn("slow", function(){
			$("#logo").show("slow", function(){
				$("#empleats").show("slow", function(){
					$("#footer").fadeIn(2000);
				})
			})
		})
	})		
}

$(document).ready(function(){
	$("#cos").fadeIn(1000, function(){
		$("#part1").fadeIn(2000, function(){
			$("#part2").fadeIn(2000, function(){
				$("#part3").fadeIn(1500);
					Pause();
			})
		})
	})
})
