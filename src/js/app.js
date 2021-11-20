const BackInput = document.getElementById("BackButton");
const NextInput = document.getElementById("NextButton");
const ViewCount = document.getElementById("ViewCountBox");

let view = 1;

NextInput.addEventListener("click", function() {
  NextStep();
})

function NextStep() {
  view = view+1;
  if (view == 4)
  {
    view = 1;
  }
  console.log(view);
}


  function initMap() {
    if (view == 1)
      {
        let simpleMap;
        simpleMap = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.4816475, lng: -81.806277 },
          zoom: 13    
        });
      }

    if (view == 2)
      {
        const myLatLng = { lat: 41.4851374, lng: -81.8020788 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: myLatLng,
        });
      
        new google.maps.Marker({
          position: myLatLng,
          map,
          title: "Root Cafe",
        });
      }
    
    if (view > 2)
      {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: { lat: 41.4816475, lng: -81.806277 },
        });
      
        directionsRenderer.setMap(map);
      
        calculateAndDisplayRoute(directionsService, directionsRenderer);

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
      }
  }
