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
					shadowColor: "#ccc",
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

function init_dashboard(value) {       
	db_options.data[0].value = value;
	db_options.color.splice(0, db_options.color.length);
	if (0 < value && value < 40) {
		db_options.data[0].name = "POOR";
		db_options.color.push([value / 100, '#ff624b']);
		db_options.title.color = '#ff624b';
		db_options.title.backgroundColor = "rgba(255, 255, 255, 1)";
	} else if (40 <= value && value < 70) {
		db_options.data[0].name = "NORMAL";
		db_options.color.push([value / 100, '#ffca36']);
		db_options.title.color = '#ffca36';
		db_options.title.backgroundColor = "rgba(255, 255, 255, 1)";
	} else if (70 <= value && value <= 100) {
		db_options.data[0].name = "GOOD";
		db_options.color.push([value / 100, '#4BAC55']);
		db_options.title.color = '#4BAC55';
		db_options.title.backgroundColor = "rgba(255, 255, 255, 1)";

	} else {}
	db_options.color.push([1, '#5a5a5a']);
}

function db_init(value) {     
	var option_dashboard=[];
	init_dashboard(value);
	option_dashboard = dashboard_option;
	return option_dashboard;
}

option = db_init(73);     

var myChart1 = echarts.init(document.getElementById("chart1"));
myChart1.setOption(option);

var myChart2 = echarts.init(document.getElementById("chart2"));
myChart2.setOption(option);

var myChart3 = echarts.init(document.getElementById("chart3"));
myChart3.setOption(option);

var myChart4 = echarts.init(document.getElementById("chart4"));
myChart4.setOption(option);	