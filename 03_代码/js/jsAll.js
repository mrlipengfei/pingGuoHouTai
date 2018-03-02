 /*模拟下拉类表*/
 $(function() {
 	/*$(".mnSelect").hover(
 		function() {
 			$(this).find("ul").show();
 			$(this).find("p").css("border-right", "none");
 		},
 		function() {
 			$(this).find("ul").hide();
 			$(this).find("p").css("border-right", "1px solid #d9e0e7");
 		}
 	)
 	$(".mnSelect ul li").click(function() {
 		var SelTxt = $(this).text();
 		$(this).parents(".mnSelect").find("p").text(SelTxt);
 		$(this).parent("ul").hide();
 	})*/
/** 模拟复选框点击js 
 	$(".chankbox li,.mnCheckbox li").click(function(){
		$(this).toggleClass("hover");
	})*/

/** 停用启用切换*/
 	/*$(".marketList td:nth-child(6)").click(function(){
		$(this).toggleClass("tabActive");
			if($(this).text()=='启用状态'){
					$(this).text('停用状态').css('color:#fb004dd');
			} else {
					$(this).text('启用状态');
		}
	})*/

 /** 更多收起切换*/
 	$(".showBut").click(function(){
			if($(this).text()=='更多'){
					$(this).text('收起').removeClass('more').addClass('over').parent('.Index').addClass('showHeight');
			} else {
					$(this).text('更多').removeClass('over').addClass('more').parent('.Index').removeClass('showHeight');
		}
	})
	// 显示／隐藏切换
	$('.indexHbut').click(function() {
		if($('.selectWrap').is(':hidden')) {
			$('.selectWrap').slideDown(200);
			$('.indexHbut').text('隐藏').css('background','#18bef7');
		} else {
			$('.selectWrap').slideUp(200);
			$('.indexHbut').text('显示').css('background','#32D08F');
		}
	})



	/*$('.marketHbut').click(function() {
		if($('.selectWrap').is(':hidden')) {
			$('.selectWrap').slideDown(200);
			$('.marketHbut').text('隐藏');
		} else {
			$('.tableListCont').slideUp(200);
			$(".selectWrap").hide();
			$('.marketHbut').text('显示');
		}
	})*/
 })
    /**
     * 公共样式 —— 虚假的下拉框
     */
    /*$(".fake-sel").on("click", function (e) {
        e.stopPropagation();
        var flag = $(this).children('ul').css("display");
        if (flag == "none") {
            $(this).children('ul').css("display", "block");
            $(this).find('li').click(function(e) {
                // e.stopPropagation();   // 是否点击完就收起 下拉框
                $(this).closest('.fake-sel').children('input').val($(this).text());
            });
        } else {
            $(this).children('ul').css("display", "none");
        }
    });
    $(document).click(function() {
        $(".fake-sel > ul").each(function () {
            if ($(this).css("display") == 'block') {
                $(this).css("display", "none");
            }
        });
        $(".search-float").addClass('din');
    });*/
