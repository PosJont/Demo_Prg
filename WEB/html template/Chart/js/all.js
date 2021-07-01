$(document).ready(function () {
    //參考網址 Line Chart
    //https://www.chartjs.org/docs/latest/charts/line.html
    Line_Status_1();
    Line_Status_2();

    bar_status_1();
    bar_status_2();

    Doughnut_status_1();
    Pie_status_1();
    PolarArea_status_1();
    Radar_status_1();
});


function Doughnut_status_1() {
    var ctr = $('#Doughnut__canvaas_1');
    var Doughnut = new Chart(ctr, {
        type: 'doughnut',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }]
        },
    })
}

function Pie_status_1() {
    var ctr = $('#Pie__canvaas_1');
    var Doughnut = new Chart(ctr, {
        type: 'pie',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }]
        },
    })
}

function Radar_status_1() {
    var ctr = $('#Radar__canvaas_1');
    var Doughnut = new Chart(ctr, {
        type: 'radar',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }]
        },
    })
}

function PolarArea_status_1() {
    var ctr = $('#PolarArea__canvaas_1');
    var Doughnut = new Chart(ctr, {
        type: 'polarArea',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }]
        },
    })
}
//#region bar
function bar_status_1() {
    var ctr = $('#Bar__canvaas_1');
    var bar = new Chart(ctr, {
        type: 'bar',
        data: {
            labels: ['熱處理', '基磨', '成磨', 'QA成品'],
            datasets: [{
                label: '一周生產數量',
                data: [12, 19, 5, 4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function bar_status_2() {
    var ctr = $('#Bar__canvaas_2');
    var bar = new Chart(ctr, {
        type: 'bar',
        indexAxis: 'y',
        fill: false,
        data: {
            labels: ['熱處理', '基磨', '成磨', 'QA成品'],
            datasets: [{
                label: '目前生產數量',
                indexAxis: 'y',
                data: [12, 19, 5, 4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        // options: {
        //     scales: {
        //         indexAxis: 'y',
        //     }
        // }
    });
}
//#endregion bar



//#region Line
function Line_Status_1() {
    var ctr = $('#Line__canvaas_1');
    var line = new Chart(ctr, {
        type: 'line',
        data: {
            labels: ['熱處理', '基磨', '成磨', 'QA成品'],
            datasets: [{
                label: '使用次數',
                data: [65, 60, 70, 74],
                fill: false,
                borderColor: [
                    'rgba(15, 15, 15, .3)'
                ],
                borderWidth: 1,
            }],
        },
    });
}

function Line_Status_2() {
    var ctr = $('#Line__canvaas_2');
    var line = new Chart(ctr, {
        type: 'line',
        data: {
            labels: ['熱處理', '基磨', '成磨', 'QA成品'],
            datasets: [{
                label: '使用次數',
                data: [10, 27, 15, 18],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                borderWidth: 1,
            }],
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}
//#endregion Line