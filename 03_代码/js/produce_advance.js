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

    // 指标分类 单选框默认选中第一个
        $('.chankbox input[type = "radio"]').each(function (index, item) {
            if($(item).prop('checked')){
                $(this).closest("label.checklable").removeClass("sunchecked").addClass("schecked");
            }
        });

    //气泡图的js
    // 规模优势  /*气泡图*/
    var scaleAdvantage = new JusfounD3Charts.scatterChart();
    var scaleAdvantageData = [
        { id: "陕西", value: 1.9 },
        { id: "甘肃", value: 1.8 },
        { id: "山东", value: 1.0 },
        { id: "河北", value: 0.1 },
        { id: "河南", value: 0.9 },
        { id: "辽宁", value: 0.3 },
        { id: "山西", value: 0.99 },
        { id: "青海", value: 0.12 },
        { id: "新疆", value: 0.7 },
        { id: "宁夏", value: 0.1 },
        { id: "湖北", value: 1.2 },
        { id: "安徽", value: 1.5 },
        { id: "重庆", value: 1.14 },
        { id: "贵州", value: 1.18 }
    ];

    scaleAdvantage.init({
        "domEle": document.getElementById("advantage"),
        "width": 500,
        "height": 400
    });
    scaleAdvantage.setData({
        data: scaleAdvantageData,
        zoom: 0.9,
        shape: "circle" //polygon、circle
    });
    scaleAdvantage.on('click', function(e) {
        console.log(e);
    });

    //右侧排名的js
    var areaArr=[],dataArr=[];
    var rankData = {area:areaArr,data:dataArr};
    scaleAdvantageData.forEach(function(v,i){
        areaArr.push(v.id);
        dataArr.push(v.value)
    })
    initFrontTenEchart('rank', rankData)
});