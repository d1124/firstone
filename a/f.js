option = {
    title: {
        text: '区域数据',
        subtext: '数据对比'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['近期平均数据', '实时数据']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['氧气', '瓦斯', 'CO2', 'N2', '其他气体', '正常气体含量']
    },
    series: [
        {
            name: '近期平均数据',
            type: 'bar',
            data: [20, 0, 2, 77, 1, 100]
        },
        {
            name: '实时数据',
            type: 'bar',
            data: [18, 3, 1, 77, 1, 99]
        }
    ]
};
echarts.init(document.getElementById('t1'),'dark').setOption(option);


option2 = {
    title: {
        text: '温度变化',
        subtext: '当天温度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0', '4', '7', '10', '13', '16', '20']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高温度',
            type: 'line',
            data: [10, 11, 13, 16, 12, 12, 9],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '最低温度',
            type: 'line',
            data: [5, 3, 6, 9, 7, 6, 4],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            position: 'start',
                            formatter: '最大值'
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};
echarts.init(document.getElementById('t2'),'dark').setOption(option2);


option3 = {
    title: {
        text: '气体浓度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['N2', 'O2', 'CO2', '其他气体', '瓦斯']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0', '5', '10', '15', '20', '25', '30','35','40','45','50','55']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'N2',
            type: 'line',
            stack: '总量',
            data: [77, 78, 77, 78, 79, 77, 75]
        },
        {
            name: 'O2',
            type: 'line',
            stack: '总量',
            data: [18, 20, 19, 18,19, 20, 19]
        },
        {
            name: 'CO2*10',
            type: 'line',
            stack: '总量',
            data: [10, 7, 9, 8, 7,10, 6]
        },
        {
            name: '其他气体*10',
            type: 'line',
            stack: '总量',
            data: [12, 5, 6, 10, 12, 8, 6]
        },
        {
            name: '瓦斯*100',
            type: 'line',
            stack: '总量',
            data: [1,1, 1, 1, 4, 33, 76]
        }
    ]
};
echarts.init(document.getElementById('t3'),'dark').setOption(option3);

option4 = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 77, name: 'N2'},
                {value: 20, name: 'O2'},
                {value: 1, name: 'CO2*10'},
                {value: 1, name: '瓦斯*100'},
                {value: 1, name: '其他气体'}
            ]
        }
    ]
};
echarts.init(document.getElementById('t4'),'dark').setOption(option4);


function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 100)
        ]);
    }
    return data;
}

option5 = {
    title: {
        top: 30,
        left: 'center',
        text: '每天的风险评级'
    },
    tooltip: {},
    visualMap: {
        min: 0,
        max: 100,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
            borderWidth: 0.5
        },
        yearLabel: {show: false}
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2016)
    }
};
echarts.init(document.getElementById('t5'),'dark').setOption(option5);

