// --------------------------- Data --------------------------------
var locations = [
    {id: '1', name: 'EPA-H01: a熱處理機01', tzOffset: 7 * 60},
    {id: '2', name: 'EPA-IG01: g基磨機01', tzOffset: -10 * 60},
    {id: '3', name: 'EPA-IIG01: 成磨機01', tzOffset: 4 * 60},
    {id: '4', name: 'OEP-GI01: 基磨機', tzOffset: -1 * 60},
    {id: '5', name: 'OEP-GII01: 成磨基', tzOffset: -2 * 60},
    {id: '6', name: 'OEP-H01: 熱處理機', tzOffset: -2 * 60},
];
var events = [
    {
        name: 'AAA-01-01',
        location: '1',
        memo:'2',
        start: yesterday(08, 15),
        end: yesterday(10, 15)
    },
    {
        name: 'AAA-01-04',
        location: '1',
        memo:'10',
        start: yesterday(10, 00),
        end: yesterday(12, 00)
    },
    {
        name: 'AAA-01-02',
        location: '4',
        memo:'2',
        start: today(6, 30),
        end: today(9, 15)
    },
    {
        name: 'AAA-01-03',
        location: '4',
        memo:'2',
        start: today(9, 0),
        end: today(11, 30)
    },
    {
        name: 'AAA-02-01',
        location: '4',
        memo:'2',
        start: today(7, 45),
        end: today(8, 30)
    },
    {
        name: 'AAA-02-02',
        location: '4',
        memo:'2',
        start: today(8, 0),
        end: today(8, 15)
    },
    {
        name: 'AAA-03-03',
        location: '2',
        memo:'2',
        start: today(0, 0),
        end: today(1, 30)
    },
    {
        name: 'AAA-04-01',
        location: '5',
        memo:'2',
        start: today(0, 0),
        end: today(1, 30)
    },
    {
        name: 'AAA-04-02',
        location: '1',
        memo:'2',
        start: today(10, 0),
        end: today(11, 30)
    },
    {
        name: 'AAA-04-03',
        location: '2',
        memo:'2',
        start: yesterday(22, 0),
        end: today(1, 30),
        class: 'custom-class'
    },
    {
        name: 'AAA-05-03',
        location: '2',
        memo:'2',
        start: today(1, 45),
        end: today(2, 45),
        class: 'custom-class'
    },
    {
        name: 'AAA-06-01',
        location: '2',
        memo:'2',
        start: today(3, 10),
        end: today(5, 30),
        class: 'custom-class'
    },
    {
        name: 'AAA-06-02',
        location: '3',
        memo:'2',
        start: yesterday(22, 15),
        end: yesterday(23, 30),
        disabled: true
    },
    {
        name: 'AAA-06-03',
        location: '3',
        memo:'2',
        start: yesterday(23, 45),
        end: today(1, 30)
    },
];

// -------------------------- Helpers ------------------------------
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
function today(hours, minutes) {
    var date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}
function yesterday(hours, minutes) {
    var date = today(hours, minutes);
    date.setTime(date.getTime() - 24 * 60 * 60 * 1000);
    return date;
}
function tomorrow(hours, minutes) {
    var date = today(hours, minutes);
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    return date;
}

function get_DateTime(pDate,hours){
    var time =  hours * 60 * 60 * 1000;
    var date = new Date(pDate).getTime()+ time;
    var ruslt = new Date(date);
    return ruslt;
}

// --------------------------- Example 1 ---------------------------
let $sked1 = "";
function init(){
    let dat_s = $('#date_s').val();
    let dat_e = $('#date_e').val();
    let times = $('#times').val();

  $sked1 = $('#sked1').skedTape({
        caption: '機台名稱',
        start: get_DateTime(dat_s,0),
        end: get_DateTime(dat_e, 16) ,// today(12, 0),
        showEventTime: true,
        showEventDuration: true,
        showEventDurationText:'生產數量 :',
        scrollWithYWheel: true,
        locations: locations.slice(),
        events: events.slice(),
        interval: times * 60, //間隔
        maxTimeGapHi: 60 * 1000, // 1 minute
        minGapTimeBetween: 1 * 60 * 1000,
        snapToMins: 1,
        editMode: true,
        timeIndicatorSerifs: true,
        showIntermission: true,
        formatters: {
            date: function (date) {
                return $.fn.skedTape.format.date(date, 'date');
            },
            duration: function (ms, opts) {
                return $.fn.skedTape.format.duration(ms, {hrs: '時',min: '分'});
            },
        },
        // 能加入的區塊
        // canAddIntoLocation: function(location, event) {
        //     return location.id !== 'london';
        // },
        // postRenderLocation: function($el, location, canAdd) {
        //     this.constructor.prototype.postRenderLocation($el, location, canAdd);
        //     $el.prepend('<i class="fas fa-thumbtack text-muted"/> ');
        // }
    });
}

$(document).ready(function(){
    init();
    // $(".sked-tape__event").resizable({
    //     handleSelector: ".scroll-right",
    //     resizeHeight: false
    // });
    $('#submit').click(function(){
        $sked1.skedTape('destroy');
        init();
    });


});
//檢查事件
// $sked1.on('event:dragEnded.skedtape', function(e) {
    //     console.log(e.detail.event);
// });
// $sked1.on('event:click.skedtape', function(e) {
//     $sked1.skedTape('removeEvent', e.detail.event.id);
// });
// 新增項目
// $sked1.on('timeline:click.skedtape', function(e, api) {
//     try {
//         $sked1.skedTape('startAdding', {
//             name: 'New meeting',
//             duration: 60 * 60 * 1000
//         });
//     }
//     catch (e) {
//         if (e.name !== 'SkedTape.CollisionError') throw e;
//         //alert('Already exists');
//     }
// });

// sked-tape__event-row