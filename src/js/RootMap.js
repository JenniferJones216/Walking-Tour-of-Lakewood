class RootMap {

initMap() {
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
}  