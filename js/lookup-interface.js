var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#lookup-form").submit(function(event){
  event.preventDefault();
  $("#result").empty();
  const pdxLocation = (45.523062, -122.676482, 100);
  let medicalIssue = $('#medical').val();
  let name = $('#name').val();

  let request = new XMLHttpRequest();
  let url = 'https://api.betterdoctor.com/2016-03-01/doctors?q=' + medicalIssue + '&location=' + pdxLocation + '&user_key=' + apiKey;
  console.log(medicalIssue);
  console.log(url);

  request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    let getElements = function(response) {
      response.datas.forEach(function(data){
        $("#result").append(`<div class="row">Practices: ${data.practices}<br>Profile: ${data.profile}<br></div>`);
      })
    };
  });
});
