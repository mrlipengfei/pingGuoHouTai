$(function(){
    /*分页的js代码*/
    $('#pageTool').Paging({
        pagesize: 6,
        count: 100,
        callback: function(page, size, count) {
            //	do something
        }
    });
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

    /* 日历插件js部分开始--精确到天*/
    // 初始化日期显示
    var d = new Date()
    var vYear = d.getFullYear()
    var vMon = d.getMonth() + 1
    var vDay = d.getDate()
    var Year_first = vYear + '-01';
    var Year_last = vYear + '-' + (vMon > 10 ? vMon : '0' + vMon);
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
        format: 'yyyy-mm',
        autoclose: true,
        startView: 3,
        minView: 3,
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
        changeDate(this.dataset.neardate, dateRange, 3)
    })

    /* 弹窗日期js部分开始--精确到天*/
    // 初始化日期显示
    var vDay = d.getDate()
    var nowDate = vYear + '-'+ vMon+ '-' + vDay;
    $('.add_date').attr('value', nowDate);
    $('.mod_date').attr('value', nowDate)

    // 初始化增项页日期
    var addDate = {
        Year: vYear,
        Month: vMon,
        Day: vDay,
    };
    var modData = {
        Year: vYear,
        Month: vMon,
        Day: vDay,
    };
    $(".pop_date").datetimepicker({
        format: 'yyyy-mm',
        autoclose: true,
        startView: 3,
        minView: 3,
        language: 'zh-CN',
        initialDate: new Date(),
    });
    // 获取时间
    $('.add_date')
        .datetimepicker()
        .on('changeDate', function(ev){
            var y = new Date(ev.date.valueOf()).getFullYear();
            var m = new Date(ev.date.valueOf()).getMonth()+1;
            var d = new Date(ev.date.valueOf()).getDate();
            addDate.Year = y;
            addDate.Month = m;
            addDate.Day = d;
        });
    $('.mod_date')
        .datetimepicker()
        .on('changeDate', function(ev){
            var y = new Date(ev.date.valueOf()).getFullYear();
            var m = new Date(ev.date.valueOf()).getMonth()+1;
            var d = new Date(ev.date.valueOf()).getDate();
            modData.Year = y;
            modData.Month = m;
            modData.Day = d;
        });
    // 获取结束时间
    /* 弹窗js部分结束*/

    //判断选中的地区是否超过十个
    $('.consume-world .country input').on('click', function (e) {
        len1 = $('.consumeworld-index input:checked').length;
        len = $('.country input:checked').length;
        console.log(len1)
        if(len*len1>10){
            alert('最多可以选择'+ parseInt(10/len1)+'个国家');
            $(this).prop('checked', false);
            return;
        }
    });


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

    var lineInstance = new initLineEcharts('box',data)
    var myOption = {
        yAxis: {
            name:'111111111'
        }
    }
    lineInstance.init(myOption)

})