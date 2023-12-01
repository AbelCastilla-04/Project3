let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const position = { lat: 41.87892532348633, lng: -87.63587951660156 };

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
  });

   setMarkers(map);
}

const buildings = [
  ["City Hall", -34.028249, 151.157507, 3],
  ["Cloud Gate", -33.80010128657071, 151.28747820854187, 2],
  ["Sears Tower", -33.950198, 151.259302, 1],
];

function setMarkers(map) {
  const image = {
    url: "image/sears.jpg",
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const buildings = beaches[i];

    new google.maps.Marker({
      position: { lat: buildings[1], lng: buildings[2] },
      map,
      icon: image,
      shape: shape,
      title: buildings[0],
      zIndex: buildings[3],
    });
  }
  
}
initMap();