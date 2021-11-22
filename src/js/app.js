  function lakewoodMap() {
        let simpleMap;
        simpleMap = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.4816475, lng: -81.806277 },
          zoom: 13    
        });
      }
      
  function rootMap() {
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
    
  function lionMap(){
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

  function pedestrianMap(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 41.4928521, lng: -81.8139789 },
    });
  
    directionsRenderer.setMap(map);
  
    calculateAndDisplayRoute(directionsService, directionsRenderer);

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      directionsService
        .route({
          origin: { lat: 41.4930923, lng: -81.8086524 },
          destination: { lat: 41.4928521, lng: -81.8139789 },
          travelMode: google.maps.TravelMode.WALKING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
    }
  }

  function overlookMap(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 41.4928521, lng: -81.8139789 },
    });
  
    directionsRenderer.setMap(map);
  
    calculateAndDisplayRoute(directionsService, directionsRenderer);

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      directionsService
        .route({
          origin: { lat: 41.493876, lng: -81.813984 },
          destination: { lat: 41.493535, lng: -81.820270 },
          travelMode: google.maps.TravelMode.WALKING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
    }
  }

  function solsticeMap(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 41.4928521, lng: -81.8139789 },
    });
  
    directionsRenderer.setMap(map);
  
    calculateAndDisplayRoute(directionsService, directionsRenderer);

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      directionsService
        .route({
          origin: { lat: 41.493535, lng: -81.820270 },
          destination: { lat: 41.4972126, lng: -81.8001537 },
          travelMode: google.maps.TravelMode.WALKING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
    }
  }

  function forageMap(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 41.4928521, lng: -81.8139789 },
    });
  
    directionsRenderer.setMap(map);
  
    calculateAndDisplayRoute(directionsService, directionsRenderer);

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      directionsService
        .route({
          origin: { lat: 41.4972126, lng: -81.8001537 },
          destination: { lat: 41.48557, lng: -81.79759 },
          travelMode: google.maps.TravelMode.WALKING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
    }
  }
  
