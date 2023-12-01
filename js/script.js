let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const position = { lat: 41.87892532348633, lng: -87.63587951660156 };

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
  });
  
  marker = new google.maps.Marker({
    position: position,
	icon: "image/sears.jpg",
	animation: google.maps.Animation.BOUNCE,
    title: "Sears Tower",
  });
  
  const constString = "Sears Tower was the largest building in the world in 1974"
  const infoWindow = new google.maps.InfoWindow({
	content: constString,
  });
  
  marker.addListener("click", function(){
	infoWindow.open({
      anchor: marker,
      map,
    });
  });
}
initMap();