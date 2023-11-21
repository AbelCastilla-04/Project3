function initMap() {
  const position = { lat: -25.344, lng: 131.031 };

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "f790a552a5b4967a",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();