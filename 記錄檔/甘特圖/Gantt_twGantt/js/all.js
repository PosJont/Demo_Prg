$(function(){
    //var canWrite = true; 

    let ge = new GanttMaster();
     // here starts gantt initialization
    ge = new GanttMaster();
    ge.set100OnClose=true;

    ge.shrinkParent=true;

    ge.init($("#workSpace"));
    loadI18n(); //overwrite with localized ones

    //in order to force compute the best-fitting zoom level
    delete ge.gantt.zoom;

    var project=loadFromLocalStorage();

    if (!project.canWrite)
        $(".ganttButtonBar button.requireWrite").attr("disabled","true");

    ge.loadProject(project);
    ge.checkpoint(); //empty the undo stack

    initializeHistoryManagement(ge.tasks[0].id);
    console.log(ge);
    
});