gantt.serverList("users", [
    { label:"Not Assigned", 	key:0, job:"" },
    { label:"John Doe", 		key:1, job:"Developer" },
    { label:"Marta Brown", 		key:2, job:"Marketing" },
    { label:"Chin Makfi", 		key:3, job:"UX and QA" },
    { label:"Ajia Rowen", 		key:4, job:"Designer" },
    { label:"Jean Gogh", 		key:5, job:"Tech Writer" }
]);

gantt.locale.labels.column_owner = "Owner";
gantt.locale.labels.section_owner = "Owner";

gantt.config.lightbox.sections = [
    {name: "description", height: 38, map_to: "text", type: "textarea", focus: true},
    {name: "owner", height: 22, map_to: "assignedTo", type: "select", options: gantt.serverList("users")},
    {name: "time", type: "duration", map_to: "auto"}
];

gantt.config.columns = [
    {name:"text", label:"工作項目", tree:true, width:170 },
    // {name:"owner", align: "center", template: function(item) { return gantt.getLabel('assignedTo', item.assignedTo) }, width: 120},
    {name:"start_date",label: "開始時間", align: "center", width: 90},
    // {name:"progress",label: "進度", align: "center", width: 90},
    {name:"duration",label: "長度(天)", align: "center"},
    // {name:"parent",label: "主id", align: "center", width: 90},
    {name:"add", width:40}
];




gantt.config.scale_unit ="day";
gantt.config.scale_height=50;

// gantt.config.date_grid ="%Y/%m/%d";
gantt.attachEvent("onTaskClick", function(id, e) {
    let target = e.target || e.srcElement;
    if (target.className === 'gantt_tree_content') {
        console.log('點擊task項目區', id);
    }
    else {
        console.log('點擊task進度條區', id);
    }
    return true;});

//onTemplatesReady
gantt.attachEvent('onTemplatesReady', function () {

    //依照年月日顯示欄位
    gantt.templates.date_scale = function (date) {
        let y = gantt.date.date_to_str("%Y");
        y = y(date);
        let d = gantt.date.date_to_str("%n/%j");
        let md = d(date);
        let cy = '<div style="opacity:0.6; font-size:0.9em; height:15px; line-height:15px;">' + y + '</div>';
        let cd = '<div style="font-size:1.1em; height:15px; line-height:15px;">' + md + '</div>';
        return '<div style="padding:10px 0px;">' + cy + cd + '</div>';
    };

    //針對週末標注為灰色
    gantt.templates.scale_cell_class = function (date) {
        if (date.getDay() === 0 || date.getDay() === 6) {
            return 'dhtmlxgantt_weekend';
        }
    };

});
gantt.i18n.setLocale("tw");
gantt.init("gantt_block");
gantt.load("js/data.json");
////function Demo
//功能 確認行數資料的id
// gantt.attachEvent("onTaskClick", function(id, e) {
//     alert("You've just clicked an item with id="+id);
// });
//移除某事件处理器，需要用到detachEvents方法：
// //A general way to attach/detach the event handler
// //to attach event
// var eventId = gantt.attachEvent("onTaskClick", function(id, e) {
//     alert("You've just clicked an item with id="+id);
// });
// console.log(eventId);
// //to detach event
// gantt.detachEvent(eventId);
//移除所有事件处理器，需要用到detachAllEvents方法：
// gantt.attachEvent("onTaskClick", function(id, e) {
//     alert("You've just clicked an item with id="+id);
// });
// gantt.attachEvent("onTaskDblClick", function(id, e) {
//     alert("You've just double clicked an item with id="+id);
// });

// gantt.detachAllEvents();

// // 检查某个事件是否添加了事件处理器，可以用checkEvent方法：

// gantt.attachEvent("onTaskClick", function(id, e) {
//     alert("You've just clicked a task with id="+id);
// });

// gantt.checkEvent("onTaskClick"); //returns 'true'