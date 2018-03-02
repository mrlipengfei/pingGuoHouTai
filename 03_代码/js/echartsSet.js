//产生随机数的假数据

function randomData() {
    return Math.round(Math.random()*300);
}

var echartOpt = {
    color:'#999',
    fz:'14px'
}
/**
 * ********************************************
 * ***********     公共的折线图表      *********
 * ********************************************
 */


function initLineEcharts(dom,data){
    //遍历获取图例数据
    var legendData= [];
    data.data.forEach(function(v,i){
        legendData.push(v.name);
        return legendData;
    });
    //遍历折线的数据
    var series = [];
    data.data.forEach(function(item, i) {
        series.push(
            {
                name:item.name,
                type:'line',
                smooth: true,
                symbolSize:8,
                data:item.data
            }
        );
    });

    this.dom = dom
    this.myChart = echarts.init(document.getElementById(dom));
    this.opts = {
        backgroundColor:'#fff',
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '5%',
            top:50,
            right: '4%',
            bottom: '20px',
        },
        legend: {
            x:'right',
            top:20,
            data:legendData,
            //icon:'line',
        },
        color:["#7bc554","#fd0000","#00cffd","#fc7713","#00a157","#94DBFF","#FFBAFF","#FFBD9D","#CC9898","#FFAD5C"],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.Xtime,
            splitLine:{
                show:true,
            },
            axisTick:
                {
                    show:false,
                }
        },
        yAxis: {
            type: 'value',
            name:'',
            axisTick:
                {
                  show:false,
                }
        },
        series:series
    };
}
initLineEcharts.prototype.init = function(newOption) {
    $.extend(true, this.opts, newOption);
    this.myChart.setOption(this.opts)
}

/**
 * ********************************************
 * ***********     公共柱图的图表配置      *********
 * ********************************************
 */

function barinitEcharts(dom,data) {
    var colors = ["#00cffd","#fc7713","#00a157","#7bc554","#fd0000","#94DBFF","#FFBAFF","#FFBD9D","#CC9898","#FFAD5C"];
    //遍历获取图例
    var legendData= [];
    data.data.forEach(function(v,i){
        legendData.push(v.name);
        return legendData;
    });
    //遍历获取展示柱图数据
    var series = [];
    data.data.forEach(function(item, i) {
        series.push(
            {
                name: item.name,
                type: 'bar',
                data: item.data,
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        barBorderRadius: 10,
                        color: colors[i]
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }
        )
    });

    this.dom = dom
    this.myChart = echarts.init(document.getElementById(dom));
    this.opts = {
        grid: {
            bottom: '90',
            right:60,
            left:60
        },
        tooltip: {
            trigger: 'axis'
        },
/*        title: {
            text: textTitle,
            padding:[10,0,0,0],
            left: 'center',
            textStyle: {
                fontSize: '20',
                fontStyle:'normal'
            }
        },*/
        legend: {
            right: '60',
            top: '5',
            itemGap: 20,
            itemHeight: 15,
            itemWidth: 25,
            data:legendData
        },
        calculable: true,
        yAxis: {
            name:'',
            type: 'value',
            axisTick:
                {
                    show:false,
                }
        },
        xAxis: {
            type: 'category',
            data: data.Xdata,
            splitLine:{
                show:true,
            },
            axisTick:
                {
                    show:false,
                }
        },
        series: series
    };

}

barinitEcharts.prototype.init = function(newOption) {
    $.extend(true, this.opts, newOption);
    this.myChart.setOption(this.opts)
}


/**
 * ********************************************
 * ***********   公共热力图的图表配置     *********
 * ********************************************
 */


function initHotEcharts(dom,data){

 var initHotEcharts = echarts.init(document.getElementById(dom));
    data.data = data.data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    var hotSetoption = {
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            height: '80%',
            width:'85%',
            y: '3%',
            left: '12%'
        },
        xAxis: {
            type: 'category',
            data: data.Xdata,
            splitArea: {
                show: true
            },
            axisTick:{
                show:false
            },
            axisLabel: {
                show: true,
                textStyle:{
                    color:"#666",
                    fontSize:15
                }
            },
            axisLine:{
                lineStyle: {
                    color:'#fff',
                    fontSize:15
                }
            }
        },
        yAxis: {
            type: 'category',
            data: data.Ydata,
            splitArea: {
                show: true
            },
            axisLabel:{
                textStyle:{
                    color:"#666",
                    fontSize:12
                }
            },
            axisLine: {
                lineStyle: {
                    color:'#fff'
                }
            },
            splitLine: {
                show:false,
                lineStyle: {
                    color: ['#2f46a1']
                }
            },
            axisTick:{
                show:false
            }
        },
        visualMap: {
            color: ['orangered', 'yellow'],
            textStyle: {
                color: '#666',
                fontSize: '12'
            },
            textGap: 30,
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '1%'
        },
        series: [{
            name: '苹果',
            type: 'heatmap',
            data: data.data,
            /*markArea: {
                silent: true,
                data: [
                    [{
                        name: '',
                        coord: [0],
                        itemStyle: {
                            normal: {
                                color: 'rgba(50, 190, 255, 0.8)'
                            }
                        }
                    }, {
                        coord: [9]
                    }]

                ]
            },*/
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    initHotEcharts.setOption(hotSetoption);
}




//排名的echarts图表




/**
 * ajax 获取数据
 *

 var data = {"area":["菲律宾","印度尼西亚","孟加拉国","泰国","俄罗斯","马来西亚","印度","新加坡"],
			"data":[6,5,4,3,3,1,1,1]
		};
 */
/**
 * 页面里排名的图表配置
 */
function initFrontTenEchart(dom, data) {
    var frontTen = echarts.init(document.getElementById(dom));
    var frontTenOption = {
        // backgroundColor: '#1B2971',
        grid: {
            left: '5%',
            right: '25%',
            top: '5%',
            bottom: '5%',
            containLabel: true
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                align: 'left',
                color: function(value, index) {
                    var length = data.data.length - 3;
                    return index >= length ? '#EDDE32' : '#6797D2';
                }
            }
        },
        yAxis: [{
            data: '',
            offset: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }],
        xAxis: {
            max: 'auto',
            show: false,
            axisLine: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: "{c}",
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    }
                }
            },
            data: [],
            barWidth: 12,
            itemStyle: {
                normal: {
                    barBorderRadius: 6,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(0, 82, 222, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(234, 227, 69, 1)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 6
                }
            }
        }]
    };
    var newOption = {
        yAxis: [{
            data: data.area
        }],
        series: [{
            name: '前十',
            data: data.data
        }]
    }
    $.extend(true, frontTenOption, newOption);
    frontTen.setOption(frontTenOption, true);
}
















