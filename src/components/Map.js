// Map.js
import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAkPJV9pzgo6m_oXO5143E6073meXj5Ppk&callback=initMap`;

    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      initMap();
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const location = { lat: 51.501, lng: -0.1197 }; // Replace with actual coordinates
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 15,
    });
    new window.google.maps.Marker({
      position: location,
      map: map,
      title: "Lastminute.com London Eye",
    });
  };

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default Map;
