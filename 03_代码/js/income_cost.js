/**
 * Created by XiLel on 2017/9/15.
 */
$(function () {
    /*分页的js代码*/
    $('#pageTool').Paging({
        pagesize: 6,
        count: 100,
        callback: function(page, size, count) {
            //	do something
        }
    });

    /* 日历插件js部分开始--精确到天*/
    // 初始化日期显示
    var d = new Date()
    var vYear = d.getFullYear()
    var vMon = d.getMonth() + 1
    var vDay = d.getDate()
    var Year_first = vYear-1;
    var Year_last = vYear;
    $('.form_date_start').attr('value', Year_first);
    $('.form_date_end').attr('value', Year_last);

    // 初始化日期
    var dateRange = {
        sYear: vYear,
        sMonth: 1,
        sDay: 1,
        eYear: vYear,
        eMonth: vMon,
        eDay: vDay
    };
    $(".form_date").datetimepicker({
        format: 'yyyy',
        autoclose: true,
        startView: 4,
        minView: 4,
        language: 'zh-CN',
        initialDate: new Date(),
    });
    // 获取开始时间
    $('.form_date_start')
        .datetimepicker()
        .on('changeDate', function(ev){
            var y = new Date(ev.date.valueOf()).getFullYear();
            var m = new Date(ev.date.valueOf()).getMonth()+1;
            var d = new Date(ev.date.valueOf()).getDate();
            dateRange.sYear = y;
            dateRange.sMonth = m;
            dateRange.sDay = d;
        });
    // 获取结束时间
    $('.form_date_end')
        .datetimepicker()
        .on('changeDate', function(ev){
            var y = new Date(ev.date.valueOf()).getFullYear();
            var m = new Date(ev.date.valueOf()).getMonth()+1;
            var d = new Date(ev.date.valueOf()).getDate();
            dateRange.eYear = y;
            dateRange.eMonth = m;
            dateRange.eDay = d;
        });
    /* 日历插件js部分结束*/


    // 纬度切换功能
    // 默认显示
    $('.selectWrap div').each(function (index, value) {
        if($(value).attr('data-toggle') === 'zb'){
            $(value).show();
        } else if($(value).attr('data-toggle') === 'dq'){
            $(value).hide();
        }
    })

    // 点击切换
    $('#weidu input').on("click", function () {
        if(this.dataset.wd === 'zhibiao'){
            $('.selectWrap div').each(function (index, value) {
                if($(value).attr('data-toggle') === 'zb'){
                    if(index == 3 || index == 4){
                        $(value).show();
                    }
                } else if($(value).attr('data-toggle') === 'dq'){
                    $(value).find('input').prop('checked', false).closest("label.checklable").removeClass("checked").addClass("unchecked");
                    console.log($(value).find('select option').first().val())
                    $(value).find('select option').first().prop("selected",true);
                    $(value).hide();
                }
            })
        } else if(this.dataset.wd === 'diqu'){
            $('.selectWrap div').each(function (index, value) {
                if($(value).attr('data-toggle') === 'zb'){
                    $(value).find('input').prop('checked', false).closest("label.checklable").removeClass("checked").addClass("unchecked");
                    $(value).find('select option').first().prop("selected",true);
                    $(value).hide();
                } else if($(value).attr('data-toggle') === 'dq'){
                    $(value).show();
                }
            })
        }
    })
    // 二级联动

    $('div[data-toggle="zb"]').eq(2).hide();
    $('div[data-toggle="zb"]').eq(3).hide();
    $('div[data-toggle="zb"]').eq(4).hide();

    $('div[data-toggle="zb"]').eq(1).on("click", "input", function (e) {

        if($(this).closest("li").text() === "总成本"){
            $('div[data-toggle="zb"]').eq(2).hide().find("input").prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked");
            $('div[data-toggle="zb"]').eq(3).hide().find("input").prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked");
            $('div[data-toggle="zb"]').eq(4).hide().find("input").prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked");
            $(this).closest(".chankbox").find("input").not(this).prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked")
        } else {
            $('div[data-toggle="zb"]').eq(1).find("input").eq(0).prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked");
        }

        if($(this).closest("li").text() === "人工成本"){
            if($(this).is(":checked")){
                $('div[data-toggle="zb"]').eq(2).show();
            } else {
                $('div[data-toggle="zb"]').eq(2).hide().find("input").prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked");
            }
        }

        if($(this).closest("li").text() === "土地成本"){
            if( $(this).is(":checked")){
                $('div[data-toggle="zb"]').eq(3).show();
            } else {
                $('div[data-toggle="zb"]').eq(3).hide().find("input").prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked");
            }
        }
        if($(this).closest("li").text() === "物质及服务费用成本"){
            if($(this).is(":checked")){
                $('div[data-toggle="zb"]').eq(4).show();
            } else {
                $('div[data-toggle="zb"]').eq(4).hide().find("input").prop("checked", false).closest("label.checklable").removeClass("checked").addClass("unchecked");
            }
        }
    })


    // 图表
    function randomData() {
        return Math.round(Math.random()*300);
    }

    var data = {
        data:[
            {name:'排污1',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污2',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污3',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污4',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污5',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污6',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污7',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污8',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污9',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污10',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},

        ],
        Xtime:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }


    //调用折线图
    var lineInstance = new initLineEcharts('box',data)
    var myOption = {
        yAxis: {
            name:'111111111'
        }
    }
    lineInstance.init(myOption)


    $('.butSelect').click(function () {
        console.log(Query.getForm(".selectWrap"));
    })
});