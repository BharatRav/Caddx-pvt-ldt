import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OurLocationMap = () => {
  const mapRef = useRef(null);
  //   const center =[latitude,longitude];
  const center = [28.617020697454524, 77.38868364420385];
  return (
    <MapContainer
      center={center}
      className="w-[90vw] mx-auto h-[70vh] rounded-lg z-0 my-4"
      // style={{ height: "100vh", width: "100vw" }}
      zoom={13}
      ref={mapRef}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Cadx Automation <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default OurLocationMap;
