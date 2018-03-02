/**
 * Created by XiLel on 2017/9/15.
 */
var yTitle = '低温灾害指数';
$(function () {
    /*分页的js代码*/
    $('#pageTool').Paging({
        pagesize: 6,
        count: 100,
        callback: function(page, size, count) {
            //	do something
        }
    });

    // 指标分类 单选框默认选中第一个
    $('.chankbox input[type = "radio"]').each(function (index, item) {
        if($(item).prop('checked')){
            $(this).closest("label.checklable").removeClass("sunchecked").addClass("schecked");
        }
    });

    //模拟的柱图假数据
    var data ={
        data: [{ name: '轻度灾害(10%临界指标)', data: [0.7, 0.9,-1.3]}, {name: '中度灾害(15%临界指标)',data: [0.3, 0.4,0.5]}, {name: '重度灾害(20%临界指标)', data: [-0.4, 0.7,0.9]}],
        Xdata:['花期幼果期(4-5月)', '果实膨大期(6-8月)', '果实成熟期(9-10月)']
    }
    //定义y轴的显示单位名称
    //调用柱图
    var barInstance = new barinitEcharts('box',data)
    var myOption = {
        yAxis: {
            name:'111111111'
        }
    }
    barInstance.init(myOption)
});