option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
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
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
echarts.init(document.getElementById('t1'),'dark').setOption(option);


option2 = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高气温',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
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
            name: '最低气温',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
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
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
echarts.init(document.getElementById('t3'),'dark').setOption(option3);
