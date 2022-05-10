// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 16.80773121317605, lng: 96.12389275163417 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  