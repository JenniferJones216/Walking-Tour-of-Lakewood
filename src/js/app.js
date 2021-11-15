
let lakewoodMap;

function lakewoodMapDisplay() {
  lakewoodMap = new google.maps.Map(document.getElementById("mapone"), {
    center: { lat: 41.4816475, lng: -81.806277 },
    zoom: 13

    ,
  });
}