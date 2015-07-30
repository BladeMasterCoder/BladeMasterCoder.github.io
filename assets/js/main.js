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
		
		$("pre").addClass("prettyprint linenums");
    	prettyPrint();
		

    		
	});

	

	
	$(document).pjax('.pjaxlink', '#pjax', {
	    fragment: "#pjax",
	    timeout: 10000
	  });
	    
	 $(document).on('pjax:complete', function() {
		             $('.bookpiclist .bookpic').hover(
			                    function() {
			                        $(this).find('.booklabel').stop().animate({bottom: 0}, 200);
			                        $(this).find('img').stop().animate({top: -30}, 500);
			                    },
			                    function() {
			                        $(this).find('.booklabel').stop().animate({bottom: -40}, 200);
			                        $(this).find('img').stop().animate({top: 0}, 300);
			                    }
			      );
			      
	  });

    $("li.select").click(function(){
				$("li.select").removeClass("active");
				$(this).addClass("active");
	});

       $("li.phoneselect").click(function(){
				$("div.navbar-collapse").removeClass("in");
				$("button.navbar-toggle").addClass("collapsed");
	});
       
     $(".circle").load(function(){
	    $(".circle").addClass("show");
	 });   	

 	$('.bookpiclist .bookpic').hover(
                    function() {
                        $(this).find('.booklabel').stop().animate({bottom: 0}, 200);
                        $(this).find('img').stop().animate({top: -30}, 500);
                    },
                    function() {
                        $(this).find('.booklabel').stop().animate({bottom: -40}, 200);
                        $(this).find('img').stop().animate({top: 0}, 300);
                    }
      );
	  
	$('div.skillbar').each(function() {
        $(this).find('div.skillbar-bar').width(0);
    });

    $('div.skillbar').each(function() {
        $(this).find('div.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });    

	$('.navbar-wrapper').stickUp({
        //enabling marginTop with the 'auto' setting 
        marginTop: 'auto'
    });
	 
});
		
