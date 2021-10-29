/*  
  show/hide divs approach - old jquery approach - CRUD
  build a mvc from scratch in js - 
    get the current url, have some if statements and call come .show/.hide combinations
    maybe a tags that call a function when certain links are clicked
  use an actual mvc js framework - angular/ember
*/
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//install npm
//import
import Chart from 'chart.js/auto';
//check the docs to see what functions/parameters/data structures we need/syntax

import './css/styles.css';
import DestinationService from './js/destination-service.js';
import Destination from './js/destination.js';



// CREATE
//click button
$('#create-destination').click(function () {
  //display form - equivalent to Create GET route returning view
  $('#create-div').show();
});
//submit form - equivalent to Create POST route handling form submission
$('#create-form').submit(function(e) {
  e.preventDefault();
  // constructor(username, country, city, rating, review) - could have probably just put the values in a {} without calling constructor - not sure of the advantages or disadvantages
  const destination = new Destination($('#username').val(), $('#country').val(),$('#city').val(), Number.parseInt($('#rating').val()), $('#review').val());
  //call api
  DestinationService.postDestination(destination);
  
  //this is similar to RedirectToAction("Index");
  $('#create-div').hide();
  makeApiCall();
});



//READ - equivalent to Index() route in MVC
$('#get-destinations').click(function () {
  makeApiCall();
});

async function makeApiCall() {
  const response = await DestinationService.getDestinations();
  //equivalent to calling return View(response);
  displayResult(response);
}

//Equivalent to a .cshtml view file - cshtml uses cs logic to generate html - this uses js logic to generate html
function displayResult(destinations) {

  //example from docs
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  //adjusted to our data
  const destinationLabels = destinations.map(dest => dest.city);
  
  //example from docs
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  //adjusted to our data
  const destinationRatings = destinations.map(dest => dest.rating);
  const destinationData = {
    labels: destinationLabels,
    datasets: [{
      label: 'Destination Ratings',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: destinationRatings,
    }]
  };

  //example from docs
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  //adjusted to our data
  const destinationConfig = {
    type: 'line',
    data: destinationData,
    options: {}
  };

  //example from docs
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  //adjusted to our data
  const destinationChart = new Chart(
    document.getElementById('destinationChart'),
    destinationConfig
  );

  console.log(myChart);
  console.log(destinationChart);

  console.log(destinations)
  const destinationsHtml = destinations
    .map((destinationObjectFromApi) => {
      return `<div class="col my-3">
        <div class="card mx-auto h-100" style="width: 18rem;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${destinationObjectFromApi.city}</h5>
            <p class="card-text">${destinationObjectFromApi.rating}</p>
          </div>
        </div>
      </div>`;
    })
    .join("");

  $("#display").append(destinationsHtml);
}