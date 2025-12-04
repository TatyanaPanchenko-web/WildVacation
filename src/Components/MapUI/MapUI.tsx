import React, { useRef, useEffect } from "react";
import { initMap } from "./initMap";

type MapUIProps = {
  location: number[];
};
export default function MapUI({ location }: MapUIProps) {
  useEffect(() => {
    initMap(location);
  }, [location]);

  return <div id="map"></div>;
}
