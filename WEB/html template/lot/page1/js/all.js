function customViewFormatter (data) 
{
  var template = $('#profileTemplate').html();
  var view = '';
  $.each(data, function (i, row) {
    view += template
      .replace('%MAC_CODE%', row.mac_code)
      .replace('%TYPE%', row.type)
      .replace('%REPAIR%', row.repair)
      .replace('%STAFF%', row.staff)
      .replace('%RATE%', row.rate)
      .replace('%WORK_TIMER%', row.work_timer)
      .replace('%STOP_TIMER%', row.stop_timer)
      .replace('%IMAGE%', row.image)
      .replace('%STUTUS%', row.stutus);
  })

  return `<div class="row mx-0">${view}</div>`
}