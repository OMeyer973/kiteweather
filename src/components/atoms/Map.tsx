import React, { useRef, useEffect, useState } from "react";
import CSS from "csstype";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hhbWFya2luIiwiYSI6ImNra2d2aGxydjAzYTUyb21tY3IzazNzamkifQ.lahFmUNO07-YoSdAFi0ZSA";

import { throttle } from "~components/abstracts/DataManagement";

export interface Props {
  onRotate: (bearing: number) => void;
  style?: CSS.Properties;
}

export const Map: React.FC<Props> = ({ onRotate, style }) => {
  const mapContainer = useRef();
  const [longitude, setLongitude] = useState(-52.6446239);
  const [latitude, setLatitude] = useState(5.168286);
  const [bearing, setBearing] = useState(0);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      width: 400,
      height: 400,
      style: "mapbox://styles/shamarkin/ckkgs8xvm0nyn17pdo4splpqe",
      center: [longitude, latitude],
      zoom: zoom,
    });

    // todo throttle ? => should it be platform spcefic ?
    map.on("move", () => {
      setZoom(map.getZoom());
      setBearing(map.getBearing());
      onRotate(map.getBearing());
    });

    // stay centered on point of interest
    map.on("moveend", () => {
      const eps = 0.0001; //epsilon for lat and long coordinates comparison

      const currCenter = map.getCenter();
      if (
        Math.abs(currCenter.lng - longitude) > eps &&
        Math.abs(currCenter.lat - latitude) > eps
      )
        map.setCenter([longitude, latitude]);
    });

    //map.dragPan.disable();

    return () => map.remove();
  }, []);
  return <div id="map" ref={mapContainer} style={style} />;
};