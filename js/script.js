let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const loc = { lat: 41.87892532348633, lng: -87.63587951660156 };

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: loc,
  });
  
  const buildings = [
    [{ lat: 41.88379084951497, lng: -87.63202952023772 }, "City Hall"],
    [{ lat: 41.882689151051935, lng: -87.62329853558197 }, "Cloud Gate"],
    [{ lat: 41.87892532348633, lng: -87.63587951660156 }, "Sears Tower"],
  ];
 
  const infoWindow = new google.maps.InfoWindow();

 
  buildings.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
initMap();