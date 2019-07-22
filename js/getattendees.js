  function getAttendees(){
    var jsonAPI = "https://dev.iweek.org.za/json/attendees";
    $.getJSON( jsonAPI, {format: "json" }).done(function( data ) {
    var attendee_table = '';
    attendee_table += '<table>';
    attendee_table += '<thead>';
    attendee_table += '<tr>';
    attendee_table += '<th>Name</th>';
    attendee_table += '<th>Surname</th>';
    attendee_table += '<th>Company</th>';
    attendee_table += '</tr>';
    attendee_table += '</thead>';
    attendee_table += '<tbody>';

    var len = data.Attendee.length
          for(var i = 0 ; i < len; i++) {
              attendee_table += '<tr>';
              attendee_table += '<td>' + data.Attendee[i].Name+ '</td>';
              attendee_table += '<td>' + data.Attendee[i].Surname + '</td>';
              attendee_table += '<td>' + data.Attendee[i].Company + '</td>';
              attendee_table += '</tr>';          
          }
    attendee_table += '</tbody>';
    attendee_table += '</table>';      
    $('#json_table').html(attendee_table);
    });
  }
