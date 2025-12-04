export async function initMap(locationForMap) {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  const map = new YMap(document.getElementById("map"), {
    location: {
      center: locationForMap,

      zoom: 17,
    },
  });

  const markerElement = document.createElement("span");
  const marker = new YMapMarker(
    {
      coordinates: locationForMap,
      draggable: true,
    },
    markerElement
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  map.addChild(marker);
  markerElement.innerHTML = "\u{1F6A9}";
  markerElement.style.color = "#000";
  markerElement.style.fontSize = "24px";
  markerElement.style.position = "relative";
  markerElement.style.top = "-30px";
  markerElement.style.left = "-7px";
}
