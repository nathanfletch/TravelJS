import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DestinationService from './js/destination-service.js';


async function makeApiCall() {
  const response = await DestinationService.getDestinations();
  displayResult(response);
}

function displayResult(destinations) {
  //log it
  console.log(destinations);
  // const pointsHtml = items
  //   .map((item) => {
  //     let imageUrl = Default;
  //     if (item.poi.images.length > 0) {
  //       imageUrl = item.poi.images[0].source_url;
  //     }
  //     return `<div class="col my-3">
  //       <div class="card mx-auto h-100" style="width: 18rem;">
  //         <img class="card-img-top tour-image" src=${imageUrl} alt="Card image cap">
  //         <div class="card-body d-flex flex-column">
  //           <h5 class="card-title">${item.poi.name}</h5>
  //           <p class="card-text">${item.description}</p>
  //         </div>
  //       </div>
  //     </div>`;
  //   })
  //   .join("");
  // $("#container").hide();
  // $("#results-container").show();
  // $("#navBar").show();
  // $(".dayPlan").show();
  // $("#outdoors-div").show();
  // $(".movies").show();
  // $("#cityDisplay").empty();
  // $("#cityDisplay").append(pointsHtml);
  
}

$(document).ready(function () {
  $('#get-destinations').click(function () {
    makeApiCall();
  });
});
