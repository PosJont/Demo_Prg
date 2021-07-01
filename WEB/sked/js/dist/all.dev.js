"use strict";

// --------------------------- Data --------------------------------
var locations = [{
  id: '1',
  name: '成磨1',
  tzOffset: 7 * 60
}, {
  id: '2',
  name: '成磨2',
  tzOffset: -10 * 60
}, {
  id: '3',
  name: '成磨3',
  tzOffset: 4 * 60
}, {
  id: '4',
  name: '成磨4',
  tzOffset: -1 * 60
}, {
  id: '5',
  name: '成磨5',
  tzOffset: -2 * 60
}, {
  id: '6',
  name: '成磨6',
  tzOffset: -2 * 60
}, {
  id: '7',
  name: '成磨7',
  tzOffset: -2 * 60
}, {
  id: '8',
  name: '成磨8',
  tzOffset: -2 * 60
}, {
  id: '9',
  name: '成磨9',
  tzOffset: -2 * 60
}, {
  id: '10',
  name: '成磨10',
  tzOffset: -2 * 60
}];
var events = [{
  name: 'AAA-03-02',
  location: '1',
  start: yesterday(22, 0),
  end: today(7, 30)
}, {
  name: 'Meeting 1',
  location: '4',
  start: today(4, 15),
  end: today(7, 30)
}, {
  name: 'Meeting 2 (ovelapping)',
  location: '4',
  start: today(6, 30),
  end: today(9, 15)
}, {
  name: 'Meeting 3 (ovelapping)',
  location: '4',
  start: today(9, 0),
  end: today(11, 30)
}, {
  name: 'Meeting 4 (ovelapping)',
  location: '4',
  start: today(7, 45),
  end: today(8, 30)
}, {
  name: 'Meeting 5 (ovelapping)',
  location: '4',
  start: today(8, 0),
  end: today(8, 15)
}, {
  name: 'Meeting',
  location: '1',
  start: today(0, 0),
  end: today(1, 30)
}, {
  name: 'Meeting',
  location: '5',
  start: today(0, 0),
  end: today(1, 30)
}, {
  name: 'Meeting',
  location: '1',
  start: today(10, 0),
  end: today(11, 30)
}, {
  name: 'Meeting with custom class',
  location: '2',
  start: yesterday(22, 0),
  end: today(1, 30),
  "class": 'custom-class'
}, {
  name: 'Meeting just after the previous one',
  location: '2',
  start: today(1, 45),
  end: today(2, 45),
  "class": 'custom-class'
}, {
  name: 'And another one...',
  location: '2',
  start: today(3, 10),
  end: today(5, 30),
  "class": 'custom-class'
}, {
  name: 'Disabled meeting',
  location: '3',
  start: yesterday(22, 15),
  end: yesterday(23, 30),
  disabled: true
}, {
  name: 'Meeting',
  location: '3',
  start: yesterday(23, 45),
  end: today(1, 30)
}, {
  name: 'Meeting that started early',
  location: '6',
  start: yesterday(21, 45),
  end: today(0, 45)
}, {
  name: 'Late meeting',
  location: '5',
  start: today(11, 15),
  end: today(13, 45)
}]; // -------------------------- Helpers ------------------------------

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
} // --------------------------- Example 1 ---------------------------


var $sked1 = $('#sked1').skedTape({
  caption: 'Cities',
  start: yesterday(22, 0),
  end: today(12, 0),
  showEventTime: true,
  showEventDuration: true,
  scrollWithYWheel: true,
  locations: locations.slice(),
  events: events.slice(),
  maxTimeGapHi: 60 * 1000,
  // 1 minute
  minGapTimeBetween: 1 * 60 * 1000,
  snapToMins: 1,
  editMode: true,
  timeIndicatorSerifs: true,
  showIntermission: true,
  formatters: {
    date: function date(_date) {
      return $.fn.skedTape.format.date(_date, 'l', '.');
    },
    duration: function duration(ms, opts) {
      return $.fn.skedTape.format.duration(ms, {
        hrs: 'ч.',
        min: 'мин.'
      });
    }
  },
  canAddIntoLocation: function canAddIntoLocation(location, event) {
    return location.id !== 'london';
  },
  postRenderLocation: function postRenderLocation($el, location, canAdd) {
    this.constructor.prototype.postRenderLocation($el, location, canAdd);
    $el.prepend('<i class="fas fa-thumbtack text-muted"/> ');
  }
});
$sked1.on('event:dragEnded.skedtape', function (e) {
  console.log(e.detail.event);
});
$sked1.on('event:click.skedtape', function (e) {
  $sked1.skedTape('removeEvent', e.detail.event.id);
});
$sked1.on('timeline:click.skedtape', function (e, api) {
  try {
    $sked1.skedTape('startAdding', {
      name: 'New meeting',
      duration: 60 * 60 * 1000
    });
  } catch (e) {
    if (e.name !== 'SkedTape.CollisionError') throw e; //alert('Already exists');
  }
});