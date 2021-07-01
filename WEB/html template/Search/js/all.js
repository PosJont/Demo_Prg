function cellStyle(value, row, index) {
  var test = value.split('%');

  if (test[0] > 70) {
    return {
      css: {
        color: 'red'
      }
    }
  }
  return {
    css: {
      color: '#fff'
    }
  }
}
function TimerStyle(value, row, index) {
  var test = value.split('小時');

  if (test[0] >= 11 && test[0] <= 13) {
    return {
      css: {
        color: 'red'
      }
    }
  }
  return {
    css: {
      color: '#fff'
    }
  }
}
$('#pro_qty').change(function () {
  var rule_no =$('#rule_no').val();
  if(rule_no !=null){
    var  value = $(this).val();
    $('#search_no').val(value*2);
  }

})



var $table = $('#table')

function operateFormatter(value, row, index) {
  return [
    '<a class="remove" href="javascript:void(0)" title="Remove">',
    '<i class="fa fa-trash"></i>',
    '</a>'
  ].join('')
}

window.operateEvents = {
  'click .like': function (e, value, row, index) {
    alert('You click like action, row: ' + JSON.stringify(row))
  },
  'click .remove': function (e, value, row, index) {
    $table.bootstrapTable('remove', {
      field: 'id',
      values: [row.id]
    })
  }
}