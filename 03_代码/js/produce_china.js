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



    var len1 = $('.conTsub input:checked').length - 1;
    $('#zhibiao input').change(function (e) {
        len1 = $('.conTsub input:checked').length - 1;
    })

    // 三级联动交互
    var len2 = null;
    var len3 = null;
    var len4 = null;

    $('#city').hide();
    $('#area').hide();
    $('#provience input').on('click', function (e) {
        len2 = $('#provience input:checked').length;
        console.log(len2)
        if(10/len1< len2){
            alert('最多可以选择'+ (len2-1) +'个省份');
            $(this).prop('checked', false);
            return;
        }
        if($('#provience input:checked').length !== 1){
            $('#city input').prop('checked', false);
            $('#area input').prop('checked', false);
            $('#city label').removeClass('checked').addClass('unchecked');
            $('#area label').removeClass('checked').addClass('unchecked');
            $('#city').hide();
            $('#area').hide();
        } else {
            $('#city').show();
        }
    });
    $('#city input').on('click', function (e) {
        len3 = $('#city input:checked').length;
        if(10/len1 < len3){
            alert('最多可以选择'+ (len3-1) +'个市');
            $(this).prop('checked', false);
            return;
        }
        if($('#city input:checked').length !== 1){
            $('#area input').prop('checked', false);
            $('#area label').removeClass('checked').addClass('unchecked');
            $('#area').hide();
        } else {
            $('#area').show();
        }
    });
    $('#area input').on('click', function (e) {
        len4 = $('#area input:checked').length;
        console.log(len4)
        if(10/len1 < len4){
            alert('最多可以选择'+ (len4-1) +'个地区');
            $(this).prop('checked', false);
            return;
        }
    });

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
});