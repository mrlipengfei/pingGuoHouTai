$(function(){
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
    var Year_first = vYear-10;
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

    // 时间选择的切换
    $('.tab-date').on("click", "li", function (e) {
        changeDate(this.dataset.neardate, dateRange, 4)
    })

//点击影响因素隐藏查询条件
$('.consume-model .selectWrap .chankbox').on('click','.checkbox',function(){
    var typeModel = $(this).closest('li').text();
    switch(typeModel){
        case '影响因素' :
            $('.consume-model .selectWrap .Index:nth-child(2)').hide();
            $('.consume-model .selectWrap .Index').addClass('border-none');
            $('.dataSelect').hide();
            break;
        case '供求预测' :
            $('.consume-model .selectWrap .Index:nth-child(2)').show();
            $('.consume-model .selectWrap .Index').removeClass('border-none');
            $('.dataSelect').show();
            break;
    }
})
console.log(Query.getForm('.selectWrap'))
    /**** 图表部分 *****/
    function randomData() {
        return Math.round(Math.random()*300);
    }

    var data = {
        data:[
            {name:'排污1',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'排污2',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]}

        ],
        Xtime:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }


    //调用折线图
    initLineEcharts('box',data);


})