$(document).ready(function() {
		
	$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$("#backtotop").addClass("showme");
			}
			else
			{
				$("#backtotop").removeClass("showme");
			}
	});
	
	
	
	$("#backtotop").click(function(){
		$('body,html').animate({scrollTop:0},400);
			return false;
		});
	});
		
	$(".select").click(function(){
		$(".select").removeClass("active");
		$(this).addClass("active");
	});
	
	$(document).pjax('.pjaxlink', '#pjax', {
	    fragment: "#pjax",
	    timeout: 10000
	  });
       
       $(".circle").load(function(){
	    $(".circle").addClass("show");
	 });   		    
});