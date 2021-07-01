var db_options = {
	"data": [{
		"value": null,
		"name": ""
	}],
	"color": [],
	"title": {
		show: true,
		offsetCenter: [0, '95%'],
		color: '',
		fontSize: 18,
		backgroundColor: "",
		borderRadius: 5,
		padding: 5
	}
};

var dashboard_option = { 
	series: [{
			name: "",
			type: "gauge",
			center: ["50%", "47%"],
			radius: "85%",
			min: 0,
			max: 100,
			data: db_options.data,
			axisLine: {
				show: true,
				lineStyle: { 
					color: db_options.color,
					shadowBlur: 10,
					width: 5
				}
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			pointer: { 
				length: '60%',
				color: "#4A90E2"
			},
			title: db_options.title,
		},

	]
};

var option_2 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温'],
		show: false
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
		show: false,
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
            data: [10, 8, 7, 6,10, 10, 9],
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
function init_dashboard(value) {       
	db_options.data[0].value = value;
	db_options.color.splice(0, db_options.color.length);
	if (0 < value && value < 40) {
		db_options.data[0].name = "POOR";
		db_options.color.push([value / 100, '#ff624b']);
		db_options.title.color = '#ff624b';
		db_options.title.backgroundColor = "rgba(255, 98, 75, 0.4)";
	} else if (40 <= value && value < 70) {
		db_options.data[0].name = "NORMAL";
		db_options.color.push([value / 100, '#ffca36']);
		db_options.title.color = '#ffca36';
		db_options.title.backgroundColor = "rgba(255, 202, 54, 0.4)";
	} else if (70 <= value && value <= 100) {
		db_options.data[0].name = "GOOD";
		db_options.color.push([value / 100, '#63F371']);
		db_options.title.color = '#63F371';
		db_options.title.backgroundColor = "rgba(99, 243, 113, 0.4)";

	} else {}
	db_options.color.push([1, '#5a5a5a']);
}

function db_init(value) {     
	var option_dashboard=[];
	init_dashboard(value);
	option_dashboard = dashboard_option;
	return option_dashboard;
}
function db_init_2(value) {     
	var option_dashboard=[];
	init_dashboard(value);
	option_dashboard = dashboard_option;
	return option_dashboard;
}
var option = db_init(53);     

var myChart1 = echarts.init(document.getElementById("chart1"));
myChart1.setOption(option);


var myChart2 = echarts.init(document.getElementById("chart2"));
myChart2.setOption(option_2);



var myChart3 = echarts.init(document.getElementById("chart3"));
myChart3.setOption(option);


var myChart4 = echarts.init(document.getElementById("chart4"));
myChart4.setOption(option_2);



var myChart5 = echarts.init(document.getElementById("chart5"));
myChart5.setOption(option);


var myChart6 = echarts.init(document.getElementById("chart6"));
myChart6.setOption(option_2);