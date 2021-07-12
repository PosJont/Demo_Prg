function customViewFormatter (data) 
{
  var template = $('#profileTemplate').html();
  var view = '';
  $.each(data, function (i, row) {
    view += template
      .replace('%NAME%', row.name)
      .replace('%QTY%', row.qty);
  })

  return `<div class="row mx-0">${view}</div>`
}