/**
 * Created by ly on 2016/12/13.
 */
/** 弹窗js开始*/
$('.tbodyList tr td:nth-child(5)').click(function() {
	show('cover', 'alertmsg');
})
$('.close').click(function() {
	hide('cover', 'alertmsg');
})

function show(cover, id) {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]:
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	//如果是ie6，隐藏页面select
	if(Sys.ie == "6.0") {
		var n = document.getElementsByTagName("select").length;
		var m = document.getElementById(id).getElementsByTagName("select").length;
		for(var i = 0; i < n; i++) {
			document.getElementsByTagName("select")[i].style.display = 'none';
		}
		for(var j = 0; j < m; j++) {
			document.getElementById(id).getElementsByTagName("select")[j].style.display = '';
		}
	}
	var objCover = document.getElementById(cover);
	var objId = document.getElementById(id);
	var scrollW = document.documentElement.scrollWidth;
	if(document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
		var scrollH = document.documentElement.clientHeight;
	} else {
		var scrollH = document.documentElement.scrollHeight;
	}
	if(Sys.safari || Sys.chrome) {
		var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + window.pageYOffset;
	} else {
		var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.documentElement.scrollTop;
	}
	var L = (document.documentElement.clientWidth - objId.clientWidth) / 2 + document.documentElement.scrollLeft;

	objCover.style.width = scrollW + "px";
	objCover.style.height = scrollH + "px";
	objCover.style.visibility = "visible";

	objId.style.top = T + "px";
	objId.style.left = L + "px";
	objId.style.visibility = "visible";


	window.onresize = function() {
		var objCover = document.getElementById(cover);
		var objId = document.getElementById(id);
		var scrollW = document.documentElement.scrollWidth;
		if(document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			var scrollH = document.documentElement.clientHeight;
		} else {
			var scrollH = document.documentElement.scrollHeight;
		}
		if(Sys.safari || Sys.chrome) {
			var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.body.scrollTop;
		} else {
			var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.documentElement.scrollTop;
		}
		var L = (document.documentElement.clientWidth - objId.clientWidth) / 2 + document.documentElement.scrollLeft;

		objCover.style.width = scrollW + "px";
		objCover.style.height = scrollH + "px";

		objId.style.top = T + "px";
		objId.style.left = L + "px";
	}
}

function hide(cover, id) {
	//将页面全部select换件设为可用状态
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]:
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	if(Sys.ie == "6.0") {
		var n = document.getElementsByTagName("select").length;
		for(var i = 0; i < n; i++) {
			document.getElementsByTagName("select")[i].style.display = '';
		}
	}
	var objCover = document.getElementById(cover);
	var objId = document.getElementById(id);
	objCover.style.visibility = "hidden";
	objId.style.visibility = "hidden";
}

function changePop(cover, id) {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]:
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	//如果是ie6，隐藏页面select
	if(Sys.ie == "6.0") {
		var n = document.getElementsByTagName("select").length;
		var m = document.getElementById(id).getElementsByTagName("select").length;
		for(var i = 0; i < n; i++) {
			document.getElementsByTagName("select")[i].style.display = 'none';
		}
		for(var j = 0; j < m; j++) {
			document.getElementById(id).getElementsByTagName("select")[j].style.display = '';
		}
	}

	var objCover = document.getElementById(cover);
	var objId = document.getElementById(id);
	var scrollW = document.documentElement.scrollWidth;
	if(document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
		var scrollH = document.documentElement.clientHeight;
	} else {
		var scrollH = document.documentElement.scrollHeight;
	}
	if(Sys.safari || Sys.chrome) {
		var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.body.scrollTop;
		if(T > 0) {
			T = T;
		} else {
			T = 100;
		}
	} else {
		var T = (document.documentElement.clientHeight - objId.clientHeight) / 2 + document.documentElement.scrollTop;
		if(T > 0) {
			T = T;
		} else {
			T = 100;
		}
	}
	var L = (document.documentElement.clientWidth - objId.clientWidth) / 2 + document.documentElement.scrollLeft;

	objCover.style.width = "100%";
	objCover.style.height = scrollH + "px";

	objId.style.top = T + "px";
	objId.style.left = L + "px";
};
/** 弹窗js结束 */

/* S 日期范围选择函数*/
function changeDate(range, dateRange, startView) {
    // 本函数可以实现选择一天，一周，一月和一年，需要传递的参数为日期范围，
    // 保证dataRange对象在当前作用域中可以访问。
	if(startView === undefined){
	    startView = 2;
	}
    //今天的时间
    var today = new Date();
    today.setTime(today.getTime());

    // 设置今天的日期
    dateRange.eYear = today.getFullYear();
    dateRange.eMonth = today.getMonth()+1;
    dateRange.eDay = today.getDate();

    var sText = "";
    var eText = "";

    // 点击切换
    if(range === "day"){
        //昨天的时间
        var yesterday = new Date();
        yesterday.setTime(yesterday.getTime()-24*60*60*1000);
        dateRange.sYear = yesterday.getFullYear();
        dateRange.sMonth = yesterday.getMonth()+1;
        dateRange.sDay = yesterday.getDate();
        if(startView == 2){
            // 天视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
        } else if(startView == 3){
            // 月视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
        } else if(startView == 4 || startView == 5){
            // 年视图
            sText = dateRange.sYear;
            eText = dateRange.eYear;
        }
        $('.form_date_start').val(sText);
        $('.form_date_end').val(eText);

    } else if(range === "week"){
        //一星期前的时间
        var lastweek = new Date();
        lastweek.setTime(lastweek.getTime()-7*24*60*60*1000);
        dateRange.sYear = lastweek.getFullYear();
        dateRange.sMonth = lastweek.getMonth()+1;
        dateRange.sDay = lastweek.getDate();
        if(startView == 2){
            // 天视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
        } else if(startView == 3){
            // 月视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
        } else if(startView == 4 || startView == 5){
            // 年视图
            sText = dateRange.sYear;
            eText = dateRange.eYear;
        }
        $('.form_date_start').val(sText);
        $('.form_date_end').val(eText);
    } else if(range === "month"){
        // 一个月前的时间
        var lastmonth = new Date();
        lastmonth.setMonth(lastmonth.getMonth()-1);
        dateRange.sYear = lastmonth.getFullYear();
        dateRange.sMonth = lastmonth.getMonth()+1;
        dateRange.sDay = lastmonth.getDate();
        if(startView == 2){
            // 天视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
        } else if(startView == 3){
            // 月视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
        } else if(startView == 4 || startView == 5){
            // 年视图
            sText = dateRange.sYear;
            eText = dateRange.eYear;
        }
        $('.form_date_start').val(sText);
        $('.form_date_end').val(eText);
    } else if(range === "year"){
        // 一年前的日期
        var lastyear = new Date();
        lastyear.setFullYear(lastyear.getFullYear()-1);
        dateRange.sYear = lastyear.getFullYear();
        dateRange.sMonth = lastyear.getMonth()+1;
        dateRange.sDay = lastyear.getDate();
        if(startView == 2){
            // 天视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
        } else if(startView == 3){
            // 月视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
        } else if(startView == 4 || startView == 5){
            // 年视图
            sText = dateRange.sYear;
            eText = dateRange.eYear;
        }
        $('.form_date_start').val(sText);
        $('.form_date_end').val(eText);
    } else if(range === 'decade'){
        // 十年前的日期
        var decade = new Date();
        decade.setFullYear(decade.getFullYear()-10);
        dateRange.sYear = decade.getFullYear();
        dateRange.sMonth = decade.getMonth()+1;
        dateRange.sDay = decade.getDate();
        if(startView == 2){
            // 天视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
        } else if(startView == 3){
            // 月视图
            sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
            eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
        } else if(startView == 4 || startView == 5){
            // 年视图
            sText = dateRange.sYear;
            eText = dateRange.eYear;
        }
        $('.form_date_start').val(sText);
        $('.form_date_end').val(eText);
    }
}
/* E 日期范围选择函数*/
$(function() {

	// 取数组中最大值和最小值
	Array.prototype.max = function() {
		// 将数组第一个元素的值赋给max
		var max = this[0];
		// 使用for 循环从数组第一个值开始做遍历
		for(var i = 1; i < this.length; i++) {
			// 如果元素当前值大于max,就把这个当前值赋值给max
			if(this[i] > max) {
				max = this[i];
			}
		}
		// 返回最大的值
		return max;
	};

	// 左侧导航 点击 激活
	$(".nav-item > div").on("click", function() {
		var flag = $(this).closest('.nav-item').is(".active");
		if(flag) {
			$(this).closest('.nav-item').removeClass('active')
				.children('ul.nav-son').addClass('din')
				.children('li').removeClass('active');
		} else {
			$(this).closest('.nav-item').addClass('active')
				.children('ul.nav-son').removeClass('din');
		}
	});
	$(".nav-son > li").on("click", function() {
		var flag = $(this).is("active");
		if(flag) {
			$(this).addClass('active');
		} else {
			$(this).addClass('active')
				.siblings('li').removeClass('active');
		}
	});
        //根据URL切换选中导航
        var localUrl = window.location + '';
        var spIndex = null;
        if(localUrl.indexOf('produce_world') >= 0) {
            spIndex = 0;
        } else if(localUrl.indexOf('produce_china') >= 0) {
            spIndex = 1;
        } else if(localUrl.indexOf('produce_weather') >= 0) {
            spIndex = 2;
        } else if(localUrl.indexOf('produce_advance') >= 0) {
            spIndex = 3;
        } else if(localUrl.indexOf('produce_model') >= 0) {
            spIndex = 4;
        } else if(localUrl.indexOf('price_eachlink') >= 0) {
            spIndex = 5;
        } else if(localUrl.indexOf('price_totalworth') >= 0) {
            spIndex = 6;
        }else if(localUrl.indexOf('price_conduction') >= 0) {
            spIndex = 7;
        }else if(localUrl.indexOf('price_model') >= 0) {
            spIndex = 8;
        }else if(localUrl.indexOf('income_cost') >= 0) {
            spIndex = 9;
        }else if(localUrl.indexOf('income_profit') >= 0) {
            spIndex = 10;
        }else if(localUrl.indexOf('trade_china') >= 0) {
            spIndex = 11;
        }else if(localUrl.indexOf('trade_world') >= 0) {
            spIndex = 12;
        }else if(localUrl.indexOf('trade_rate') >= 0) {
            spIndex = 13;
        }else if(localUrl.indexOf('trade_population') >= 0) {
            spIndex = 14;
        }else if(localUrl.indexOf('trade_model') >= 0) {
            spIndex = 15;
        }else if(localUrl.indexOf('consume_world') >= 0) {
            spIndex = 16;
        }else if(localUrl.indexOf('consume_market') >= 0) {
            spIndex = 17;
        }else if(localUrl.indexOf('consume_channel') >= 0) {
            spIndex = 18;
        }else if(localUrl.indexOf('consume_blueprint') >= 0) {
            spIndex = 19;
        }else if(localUrl.indexOf('consume_model') >= 0) {
            spIndex = 20;
        }else if(localUrl.indexOf('title_manage') >= 0) {
            spIndex = 21;
        } else {
            spIndex = 0;
        }

         //$('.nav-bar .nav-son li').eq(spIndex).addClass('active').siblings().removeClass('active');
        if(spIndex != null) {
            if(spIndex >= 0 && spIndex <= 4) {
                $(".nav-bar .nav-item:nth-child(1)").addClass("active");
                $(".nav-bar .nav-item:nth-child(1) .nav-son").removeClass('din');
                $(".nav-bar .nav-item:nth-child(1) .nav-son li").eq(spIndex).addClass('active');
                $(".nav-bar .nav-item:nth-child(2) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(3) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(4) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(5) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(6) .nav-son").addClass('din');

            }
            if(spIndex >= 5 && spIndex <= 8) {
                $(".nav-bar .nav-item:nth-child(2)").addClass("active");
                $(".nav-bar .nav-item:nth-child(2) .nav-son").removeClass('din');
                $(".nav-bar .nav-item:nth-child(2) .nav-son li").eq(spIndex - 5).addClass('active');
                $(".nav-bar .nav-item:nth-child(1) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(3) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(4) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(5) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(6) .nav-son").addClass('din');

            }
            if(spIndex >= 9 && spIndex <= 10) {
                $(".nav-bar .nav-item:nth-child(3)").addClass("active");
                $(".nav-bar .nav-item:nth-child(3) .nav-son").removeClass('din');
                $(".nav-bar .nav-item:nth-child(3) .nav-son li").eq(spIndex - 9).addClass('active');
                $(".nav-bar .nav-item:nth-child(1) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(2) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(4) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(5) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(6) .nav-son").addClass('din');

            }
            if(spIndex >= 11 && spIndex <= 15) {
                $(".nav-bar .nav-item:nth-child(4)").addClass("active");
                $(".nav-bar .nav-item:nth-child(4) .nav-son").removeClass('din');
                $(".nav-bar .nav-item:nth-child(4) .nav-son li").eq(spIndex - 11).addClass('active');
                $(".nav-bar .nav-item:nth-child(1) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(2) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(3) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(5) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(6) .nav-son").addClass('din');

            }
            if(spIndex >= 16 && spIndex <= 20) {
                $(".nav-bar .nav-item:nth-child(5)").addClass("active");
                $(".nav-bar .nav-item:nth-child(5) .nav-son").removeClass('din');
                $(".nav-bar .nav-item:nth-child(5) .nav-son li").eq(spIndex - 16).addClass('active');
                $(".nav-bar .nav-item:nth-child(1) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(2) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(3) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(4) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(6) .nav-son").addClass('din');

            }
            if(spIndex >= 21) {
                $(".nav-bar .nav-item:nth-child(6)").addClass("active");
                $(".nav-bar .nav-item:nth-child(6) .nav-son").removeClass('din');
                $(".nav-bar .nav-item:nth-child(6) .nav-son li").eq(spIndex - 21).addClass('active');
                $(".nav-bar .nav-item:nth-child(1) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(2) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(3) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(4) .nav-son").addClass('din');
                $(".nav-bar .nav-item:nth-child(5) .nav-son").addClass('din');

            }
        }

    /**
	 * checkbox 按钮 选中／不选中样式
	 */
	//判断当前复选框状态，并让label背景图与复选框同步勾选或取消
	$(document).on("click", ".checkbox", function() {
		// 单选框的状态
		if(this.type === 'radio'){
            if($(this).is(':checked')) {
                $(this).closest("label.checklable").removeClass("sunchecked").closest("li").siblings().find('label').removeClass('schecked'); //删除未勾选选背景图
                $(this).closest("label.checklable").addClass("schecked").closest("li").siblings().find('label').addClass('sunchecked'); //添加勾选态背景图
            };
            if(this.value === 'area'){
                $('.erjicaidan2 input').prop('checked', false);
                $('.erjicaidan2 label').removeClass('checked').addClass('unchecked');
                $('.erjicaidan2').hide();
                $('.erjicaidan1').show()
            } else if(this.value === 'yield'){
                $('.erjicaidan1 input').prop('checked', false);
                $('.erjicaidan1 label').removeClass('checked').addClass('unchecked');
                $('.erjicaidan1').hide()
                $('.erjicaidan2').show()
            }
		} else {
            //判断复选框勾选状态
            if($(this).is(':checked')) {
                $(this).closest("label.checklable").removeClass("unchecked"); //删除未勾选选背景图
                $(this).closest("label.checklable").addClass("checked"); //添加勾选态背景图
            } else {
                $(this).closest("label.checklable").removeClass("checked"); //删除勾选选背景图
                $(this).closest("label.checklable").addClass("unchecked"); //添加未勾选选背景图
            }
		}

	});

    // 单选框 被选中的默认添加被选中样式
    $('.chankbox input[type = "radio"]').each(function (index, item) {
        if($(item).prop('checked')){
            $(this).closest("label.checklable").removeClass("sunchecked").addClass("schecked");
        }
    });
    // 多选框 被选中的默认添加被选中样式
    $('.chankbox input[type = "checkbox"]').each(function (index, item) {
        if($(item).prop('checked')){
            $(this).closest("label.checklable").removeClass("unchecked").addClass("checked");
        }
    });

	/**
	 * 同级li中有全选按钮的事件
	 * 全选操作
	 */
	$(".check-all").on("click", function() {
		if($(this).is(':checked')) {
			$(this).closest('.chankbox').find('li').find("label.checklable").removeClass("unchecked")
				.addClass("checked"); //添加勾选态背景图
		} else {
			$(this).closest('.chankbox').find('li').find("label.checklable").removeClass("checked").addClass("unchecked"); //添加勾选态背景图
		}
	});



	// 判断更多按钮是否显示
	$('.chankbox').each(function(){
		//获取ul的固定长度
		var ulWidth = $(this).actual('width');
		//获取查询的li的总长度
		var sumWidth = 0;
		$(this).find('li').each(function() {
			sumWidth += parseInt($(this).actual('width'))+30;
		});
		if(parseInt(sumWidth) > parseInt(ulWidth)) {
			$(this).siblings('.showBut').css("display", "''");
		} else {
			$(this).siblings('.showBut').css("display", "none");
		}
	})

    //条件选择部分点击修改选'最近一年'中样式
	var liNum = $('.tab-date li').length;
    $('.tab-date').on('click','li',function(){
    	if($(this).hasClass('active')){
            $(this).siblings('li').removeClass('active')
		}else{
            $(this).addClass('active').siblings('li').removeClass('active')
		}
	})

    /** 新增弹窗js */
    $('.newC').click(function() {
        show('cover', 'addPop');
    })
    $('.addPopclose').click(function() {
        hide('cover', 'addPop');
    })
    /** 修改弹窗js */
    $('.update').click(function() {
        show('cover', 'updatePop');
    })
    $('.updatePopclose').click(function() {
        hide('cover', 'updatePop');
    })

		
	//获取时间拼接成12个月的方法	
	 function getTime(startime,endtime) {//方法传开始时间和结束时间
	     var time = [];
	     for (var i = 0; i < (endtime - startime + 1); i++) {
	         time[i] = startime + i;	       
	     }
	     var str = '';
	     time.forEach(function(v,i){
	    	 for(var j=1; j<=12;j++){
	    		 j = (j >= 10 ? j : '0' + j)
	    		 str += v + j +','
	    	 }
	     })
	     return str;
	 }				
	//console.log(getTime(2015,2017))	
		
		
	//获取input框中被选中的name和value的方法
//		var obj = Query.getForm('.dom');//dom是获取input标签的外的盒子的类名
//		
//		
//		var con = Query.getForm('.country');
//		console.log(con)
});

//// 产地偏好的时间轴
//var data = ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12'];
//var bar = new scrollBar({
//    dom: document.getElementById('analyze-timeCDPH'),
//    height: 12,
//    //width: 600,
//    position: 'bottom',
//    backgroundImage: MUTI.mapDir + 'images/scale-bg.png',
//    withTime: true,
//    slideStart: '2017-01',
//    slideBgImage: MUTI.mapDir + 'images/scroll-icon.png',
//    data: data,
//    tooltipWidth: 100,
//    tooltipHeight: 35,
//    tooltipFontSize: 16,
//    tooltipImage:MUTI.mapDir + 'images/tooltip.png'
//});	
//bar.scrollChange(function(e) {
//	originPreference(e)
//	 //标题上显示时间轴的时间
//    var times = e.split("-");
//    var timesMouth = times[1].replace(/^0/, '');
//    var timesshow = times[0]+'年'+timesMouth+'月';
//    $('.section-desc .show-date').text(timesshow)
//})  
////bar.setData(data);
//// bar.setTime('2');

/**
 * ajax请求后台(异步),并处理业务逻辑
 *
 * @param url       请求URl 示例：warningPlatformController/getPlatform
 * @param params    拼接请求参数 typeCode=-1
 * @param callback  业务逻辑处理
 * @returns json数据对象
 */
function ajaxGetDataCall(url, params, callback) {
    //console.log(root+url+"?"+params);
    //alert(url);
    //alert(params);
    //var obj = null;
    $.ajax({
        type: 'get',
        url: root + url + "?" + params,
        async: true,
        cache: false,
        dataType: 'json',
        success: function(data) {
            if (callback != null) {
                if (typeof(callback) == 'function') {
                    callback(data);
                }
            }
        }
    });
}