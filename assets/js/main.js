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
		
		
		$('.navbar-wrapper').stickUp();
    		
    		$('.ds-thread-title').each(function() {
    			 var last = $(this).find('a').attr('href').lastIndexOf('#');
    			 alert(last);
    			 var href = $(this).find('a').attr('href').substring(7,last)+'#ds-thread';
    			 $(this).find('a').attr('href',href);
    		});
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
	$("li.ds-comment").click(function(){
		window.location = $(this).find('ds-thread-title a').attr('href');
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

});
		
