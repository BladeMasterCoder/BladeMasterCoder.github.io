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
	});

	

	
	$(document).pjax('.pjaxlink', '#pjax', {
	    fragment: "#pjax",
	    timeout: 10000
	  });
	    
	
	$(document).on('pjax:send', function() { //pjax链接点击后显示加载动画；
	    $(".pjax_loading").css("display", "block");
	});
	
	 $(document).on('pjax:complete', function() {
	 	 		$("pre").addClass("prettyprint linenums");
    				prettyPrint();
	 	 		pajx_loadDuodsuo();//pjax加载完成之后调用重载多说函数
	 	 		$(".pjax_loading").css("display", "none");
	 	 		window._bd_share_main.init();
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
		
function pajx_loadDuodsuo(){   
    var dus=$('.ds-thread');
    if($(dus).length==1){
        var el = document.createElement('div');
        el.setAttribute('data-thread-key',$(dus).attr("data-thread-key"));//必选参数
        el.setAttribute('data-url',$(dus).attr("data-url"));
        DUOSHUO.EmbedThread(el);
        $(dus).html(el);
    }
}