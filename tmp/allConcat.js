var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#lookup-form').submit(function(){
    let medicalIssue = $('#medical').val();
    $('#medical').val("");
    const location = (45.523062, -122.676482, 100);

    let request = new XMLHttpRequest();
    let url = `http://https://api.betterdoctor.com/2016-03-01/doctors?q=${medicalIssue}&location=${location}&user_key=apiKey`;

    request.onreadystatechange = function() {
      if(this.readyState == 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    getElements = function(response) {
      $('#result').append(`Here are the result for ${medicalIssue} is ${response.data}%`);
    }
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#lookup-by-name-form').submit(function(event){
    event.preventDefault();
    var doctorName = $('#name').val();
  //  $('#result')
  });
});
