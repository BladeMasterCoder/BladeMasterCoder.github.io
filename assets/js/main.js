$(document).ready(function() {
		
	$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				jQuery("#backtotop").addClass("showme");
			}
			else
			{
				jQuery("#backtotop").removeClass("showme");
			}
	});
	
	$("#backtotop").click(function(){
		$('body,html').animate({scrollTop:0},400);
			return false;
		});
	});
	
	
	$(document).pjax('.pjaxlink', '#pjax', {
	    fragment: "#pjax",
	    timeout: 10000
	  });
	    		    
});