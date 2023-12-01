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
  ["City Hall", 41.88379084951497, -87.63202952023772, 3],
  ["Cloud Gate", 41.882689151051935, -87.62329853558197, 2],
  ["Sears Tower", 41.87892532348633, -87.63587951660156, 1],
];

function setMarkers(map) {
  const image = {
    url: "image/sears.jpg",
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