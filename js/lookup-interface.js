var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#lookup-form').submit(function(event){
    event.preventDefault();
    const location = (45.523062, -122.676482, 100);
    let medicalIssue = $('#medical').val();
    $('#medical').val("");
    $.ajax({
      url: `http://https://api.betterdoctor.com/2016-03-01/doctors?query=medicalIssue&location=location&user_key=apiKey`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#result').append('Here are the result for ${medicalIssue} is ${response.data}%');
      },
      error: function(){
        $('#errors').text("There was an errir processing your request. Please try again.")
      }
    });
  });
});
