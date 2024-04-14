'use strict';
$(document).ready(function () {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  /*  className colors
  className: default(transparent), important(red), chill(pink), success(green), info(blue)
  */

  /* initialize the external events */
  $('#external-events div.external-event').each(function () {
    var eventObject = {
      title: $.trim($(this).text())
    };
    $(this).data('eventObject', eventObject);
    $(this).draggable({
      zIndex: 999,
      revert: true,
      revertDuration: 0
    });
  });

  /* initialize the calendar */
  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'title',
      center: 'agendaDay,agendaWeek,month',
      right: 'prev,next today'
    },
    editable: true,
    firstDay: 1,
    selectable: true,
    defaultView: 'month',
    axisFormat: 'h:mm',
    columnFormat: {
      month: 'ddd',
      week: 'ddd d',
      day: 'dddd M/d',
      agendaDay: 'dddd d'
    },
    titleFormat: {
      month: 'MMMM yyyy',
      week: "MMMM yyyy",
      day: 'MMMM yyyy'
    },
    allDaySlot: false,
    selectHelper: true,
    select: function (start, end, allDay) {
      var title = prompt('Event Title:');
      if (title) {
        calendar.fullCalendar('renderEvent', {
          title: title,
          start: start,
          end: end,
          allDay: allDay
        }, true);
      }
      calendar.fullCalendar('unselect');
    },
    droppable: true,
    drop: function (date, allDay) {
      var originalEventObject = $(this).data('eventObject');
      var copiedEventObject = $.extend({}, originalEventObject);
      copiedEventObject.start = date;
      copiedEventObject.allDay = allDay;
      $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
      if ($('#drop-remove').is(':checked')) {
        $(this).remove();
      }
    },
    events: [
      {
        title: 'All Day Event',
        start: new Date(y, m, 1)
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false,
        className: 'info'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d + 4, 16, 0),
        allDay: false,
        className: 'info'
      },
      {
        title: 'Meeting',
        start: new Date(y, m, d, 10, 30),
        allDay: false,
        className: 'important'
      },
      {
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false,
        className: 'important'
      },
      {
        title: 'Birthday Party',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false,
      },
      {
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/',
        className: 'success'
      }
    ],
  });
});