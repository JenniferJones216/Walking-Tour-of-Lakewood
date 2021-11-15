const rootLL = new google.maps.LatLng(41.4851374, -81.8020788);
const lionLL = new google.maps.LatLng(41.4931367, -81.8085176);
const lakewoodLL = new google.maps.LatLng(41.4816475, -81.806277);


function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 41.4816475, lng: -81.806277 },
    });
  
    directionsRenderer.setMap(map);
  
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    }

    

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService
      .route({
        origin: { lat: 41.4851374, lng: -81.8020788 },
        destination: { lat: 41.4930923, lng: -81.8086524 },
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }