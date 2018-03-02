
$(function(){

    /*分页的js代码*/
    $('#pageTool').Paging({
        pagesize: 6,
        count: 100,
        callback: function(page, size, count) {
            //	do something
        }
    });

    //判断选中的地区是否超过十个
    $('.trade-china .country input').on('click', function (e) {
        len = $('.country input:checked').length;
        console.log(len)
        if(len>10){
            alert('最多可以选择10个国家');
            $(this).prop('checked', false);
            return;
        }
    });


    //模拟的柱图假数据
    var data ={
        data: [{ name: '轻度灾害(10%临界指标)', data: [0.7, 0.9,-1.3]}, {name: '中度灾害(15%临界指标)',data: [0.3, 0.4,0.5]}, {name: '重度灾害(20%临界指标)', data: [-0.4, 0.7,0.9]}],
        Xdata:['1995/96年度---2003/04年度', '2004/05年度---2014/15年度']
    }
    //模拟折线的假数据
    var data1 = {
        data:[
            {name:'鲜苹果进口量',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'苹果汁进口量',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            {name:'鲜苹果出口量',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]},
            { name:'苹果汁出口量',data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]}

        ],
        Xtime:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }


    var yTitle = '弹性系数';
    //页面初始化默认显示折线
    //initLineEcharts('box',data1);

//线图数据修改

    var lineInstance = new initLineEcharts('box',data1);
    var myOption = {
        yAxis: {
            name:'弹性系数'
        },
        xAxis:[{
            type: 'category',
            boundaryGap: true,
            axisTick: {
                show:false
            },
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            splitLine:{
                show:true,
            }
        }],
        series:[
            {
                //xAxisIndex: 1,
                name: '',
                type: 'line',

               data: [],
                markArea: {
                    silent: true,
                    data: [
                        [{
                            name: '第四季度',
                            coord: [-1],
                            label: {
                                normal: {
                                    offset: [0, -10],
                                    textStyle: {
                                        color: echartOpt.color,
                                        fontSize: echartOpt.fz
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(50, 190, 255, 0.8)'
                                }
                            }
                        }, {
                            coord: [3]
                        }],
                        [{
                            name: '第一季度',
                            coord: [3],
                            label: {
                                normal: {
                                    offset: [0, -10],
                                    textStyle: {
                                        color: echartOpt.color,
                                        fontSize: echartOpt.fz
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(50, 190, 255, 0.5)'
                                }
                            }
                        }, {
                            coord: [6]
                        }],
                        [{
                            name: '第二季度',
                            coord: [6],
                            label: {
                                normal: {
                                    offset: [0, -10],
                                    textStyle: {
                                        color: echartOpt.color,
                                        fontSize: echartOpt.fz
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(50, 190, 255, 0.3)'
                                }
                            }
                        }, {
                            coord: [9]
                        }],
                        [{
                            name: '第三季度',
                            coord: [9],
                            label: {
                                normal: {
                                    offset: [0, -10],
                                    textStyle: {
                                        color: echartOpt.color,
                                        fontSize: echartOpt.fz
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(50, 190, 255, 0.1)'
                                }
                            }
                        }, {
                            coord: [12]
                        }]
                    ]
                }
            }
        ]

    }
    lineInstance.init(myOption)
    //点击切换季节性规律和影响因素
    $('.trade-model .Index:first-child li').on('click','input',function(){
        var text = $(this).closest('li').text();
        if(text == '影响因素'){
            $('.trade-model .Index:nth-child(2)').hide();
            var barInstance = new barinitEcharts('box',data)
            var myOption = {
                yAxis: {
                    name:'111111111'
                }
            }
            barInstance.init(myOption)
        }else if(text == '季节性规律'){
            $('.trade-model .Index:nth-child(2)').show();
            //调用折线图
            var lineInstance = new initLineEcharts('box',data1);
            var myOption = {
                yAxis: {
                    name:'弹性系数'
                },

                series:[
                    {
                        //xAxisIndex: 1,
                        name: '',
                        type: 'line',
                        data: [],
                        markArea: {
                            silent: true,
                            data: [
                                [{
                                    name: '第四季度',
                                    coord: [0],
                                    label: {
                                        normal: {
                                            offset: [0, -10],
                                            textStyle: {
                                                color: echartOpt.color,
                                                fontSize: echartOpt.fz
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(50, 190, 255, 0.8)'
                                        }
                                    }
                                }, {
                                    coord: [3]
                                }],
                                [{
                                    name: '第一季度',
                                    coord: [3],
                                    label: {
                                        normal: {
                                            offset: [0, -10],
                                            textStyle: {
                                                color: echartOpt.color,
                                                fontSize: echartOpt.fz
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(50, 190, 255, 0.5)'
                                        }
                                    }
                                }, {
                                    coord: [6]
                                }],
                                [{
                                    name: '第二季度',
                                    coord: [6],
                                    label: {
                                        normal: {
                                            offset: [0, -10],
                                            textStyle: {
                                                color: echartOpt.color,
                                                fontSize: echartOpt.fz
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(50, 190, 255, 0.3)'
                                        }
                                    }
                                }, {
                                    coord: [9]
                                }],
                                [{
                                    name: '第三季度',
                                    coord: [9],
                                    label: {
                                        normal: {
                                            offset: [0, -10],
                                            textStyle: {
                                                color: echartOpt.color,
                                                fontSize: echartOpt.fz
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(50, 190, 255, 0.1)'
                                        }
                                    }
                                }, {
                                    coord: [12]
                                }]
                            ]
                        },
                    }
                ]

            }
            lineInstance.init(myOption)
        }
    })



})