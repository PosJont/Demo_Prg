$(document).ready(function () {
    var ctr = $('#Line__canvaas_1');
    Line_Status(ctr, data_1,options_1);
    var ctr = $('#Line__canvaas_2');
    Line_Status(ctr, data_2,options_2);
});


function Line_Status(ctr, data, option) {
    var line = new Chart(ctr, {
        type: 'line',
        data: data,
        options: option
    });
}


var options_2 = {
    legend: {
        labels: {
            fontSize:16,
            fontColor: '#fff'
        }
    },
    scales: {
        
        yAxes: [{
            ticks: {
                fontColor: "#fff",
                fontSize: 16,
                stepSize:80,
                beginAtZero: true
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: "#fff",
                fontSize: 16,
                // beginAtZero: true
            }
        }]

    }
}
var options_1 = {
    legend: {
        labels: {
            fontColor: '#fff',
            fontSize:16,
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "#fff",
                fontSize: 16,
                // beginAtZero: true
            },
        }],
        xAxes: [{
            ticks: {
                fontColor: "#fff",
                fontSize: 16,
                // beginAtZero: true
            }
        }]

    }
}
var data_1 = {
    labels: ['6月21日', '6月22日', '6月23日', '6月24日', '6月25日'],
    datasets: [{
        label: '實際妥善率',
        data: [100, 97, 100, 98, 100],
        fill: true,
        backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
        ],
        borderWidth: 1,
    }],
};

var data_2 = {
    labels: ['6月21日', '6月22日', '6月23日', '6月24日', '6月25日'],
    datasets: [{
            label: '運轉工時',
            data: [192, 180, 188, 195, 191],
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderWidth: 1,
        },
        {
            label: '停機工時',
            data: [8, 20, 12, 5, 9],
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
            ],
            tension: 0.1,
            borderWidth: 1,
        }
    ],
};