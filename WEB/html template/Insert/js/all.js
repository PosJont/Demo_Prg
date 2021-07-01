var $table = $('#table');

function operateFormatter(value, row, index) {
  return [
    '<a class="edit" href="javascript:void(0)" title="Edit">',
    '<i class="fa fa-paint-brush"></i>',
    '</a>  ',
    '<a class="remove" href="javascript:void(0)" title="Remove">',
    '<i class="fa fa-trash"></i>',
    '</a>'
  ].join('')
}

window.operateEvents = {
  'click .edit': function (e, value, row, index) {
    $('#mac_code').val(row.name),
    $('#model_code').val(row.model),
    $('#legth_qty').val(row.legth),
    $('#width_qty').val(row.width),
    $('#suit_1').val(row.suit_1),
    $('#suit_2').val(row.suit_2),
    $('#suit_3').val(row.suit_3),
    $('#suit_4').val(row.suit_4),
    $('#suit_5').val(row.suit_5),
    $('#suit_6').val(row.suit_6)

    $('#Update_btn').removeClass('hidden');
    $('#Inser_btn').addClass('hidden');
  },
  'click .remove': function (e, value, row, index) {
    console.log(row);
    $table.bootstrapTable('remove', {
      field: 'name',
      values: [row.name]
    })
  }
}
  $(function() {
    $('#Inser_btn').click(function () {
      var randomId = 100 + ~~(Math.random() * 100)
      $table.bootstrapTable('insertRow', {
        index: 0,
        row: {
          use: "可用",
          name:   $('#mac_code').val(),
          model:  $('#model_code').val(),
          legth:  $('#legth_qty').val(),
          width:  $('#width_qty').val(),
          suit_1: $('#suit_1').val(),
          suit_2: $('#suit_2').val(),
          suit_3: $('#suit_3').val(),
          suit_4: $('#suit_4').val(),
          suit_5: $('#suit_5').val(),
          suit_6: $('#suit_6').val(),
        }
      })
    })
  })


  $(function() {
    $("#Update_btn").click(function () {
      $table.bootstrapTable('updateByUniqueId', {
        model: 2,
        row: {
          name:   $('#mac_code').val(),
          legth:  $('#legth_qty').val(),
          width:  $('#width_qty').val(),
          suit_1: $('#suit_1').val(),
          suit_2: $('#suit_2').val(),
          suit_3: $('#suit_3').val(),
          suit_4: $('#suit_4').val(),
          suit_5: $('#suit_5').val(),
          suit_6: $('#suit_6').val(),
        }
      })
    })
  })