import { useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl";
import { UberContext } from "../context/uberContext";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji",
      center: [-79.3832, 43.6532],
      zoom: 9,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 400,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className={style.wrapper} id="map" />;
};

export default Map;
