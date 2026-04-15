let map, marker;

function initMap() {
  let center = { lat: 33.8938, lng: 35.5018 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: center
  });

  marker = new google.maps.Marker({
    position: center,
    map: map
  });
}

function startTracking() {
  rtdb.ref("driver/location").on("value", snap => {
    let d = snap.val();
    if (!d) return;

    let pos = { lat: d.lat, lng: d.lng };
    marker.setPosition(pos);
  });
}
