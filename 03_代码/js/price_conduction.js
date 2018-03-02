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

    $('#type input').on('click', function (e) {
        if(this.dataset.type === 'diqu'){
            $('.selectWrap div').each(function (index, value) {
                if($(value).attr('data-toggle') === 'dq'){
                    $(value).show();
                } else if($(value).attr('data-toggle') === 'sz'){
                    $(value).find('input[type = "radio"]').prop('checked', false).closest("label.checklable").removeClass("schecked").addClass("sunchecked");
                    $(value).find('input[type = "checkbox"]').prop('checked', false).closest("label.checklable").removeClass("checked").addClass("unchecked");
                    $(value).hide();
                }
            })
        } else if(this.dataset.type === 'shizhi'){
            $('.selectWrap div').each(function (index, value) {
                if($(value).attr('data-toggle') === 'dq'){
                    $(value).find('input[type = "radio"]').prop('checked', false).closest("label.checklable").removeClass("schecked").addClass("sunchecked");
                    $(value).find('input[type = "checkbox"]').prop('checked', false).closest("label.checklable").removeClass("checked").addClass("unchecked");
                    $(value).hide();
                } else if($(value).attr('data-toggle') === 'sz'){
                    $(value).show();
                }
            })
        }
    })

    // 选择的城市最多不超过10个

    $('#city input').on('click', function (e) {
        var len = $('#city input:checked').length;
        if(10 < len){
            alert('最多可以选择'+ (len-1) +'个市');
            $(this).prop('checked', false);
            return;
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