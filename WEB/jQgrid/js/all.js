$(document).ready(function() {
    jQuery("#mytable").jqGrid({
      datatype:"clientSide",
      data:[ {"number": 1, "segment":"first", "name": "chap0"},
             {"number": 2, "segment":"second",  "name": "chap1"},
             {"number": 3, "segment":"third",  "name": "chap2"},
           ],
      colNames:['Chapter Name', 'Chapter Number', 'Document Segment'],
      colModel:[
              {name:'name'},
              {name:'number', sorttype:'number'},
              {name:'segment'},
              ],
      autowidth:true,
      height:'200',
      sortname: 'number',
      viewrecords: true,
      caption: 'My first grid',
      altRows:true
        
  }); 
   jQuery("#mytable").sortableRows();   
   jQuery("#mytable").jqGrid('gridDnD');
});