/**
 * 普通にやると widow is not defined とエラーが出るので下記のサイトを参考に対処する
 * https://stackoverflow.com/questions/57704196/leaflet-with-next-js
 */

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/**
 * そのままだとIconが壊れているので下記のサイトを参考に対処する
 * https://github.com/PaulLeCam/react-leaflet/issues/808
 */
import L, { popup } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { ReactNode } from "react";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});


interface IProps{
  lat: number
  lng: number
  zoom?: number 
  popup?: ReactNode
}

const DEFAULT_MAP_ZOOM = 13

const Map: React.FC<IProps> = (props) => {
  return (
    <MapContainer
      center={[props.lat, props.lng]}
      zoom={props.zoom ?? DEFAULT_MAP_ZOOM}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.lat, props.lng]}>
        <Popup>
          {props.popup}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;