import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import CustomMapPopUp from './CustomMapPopUp';
import './index.module.css'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configure default marker icon
const DefaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => (
    <MapContainer center={[6.5244, 3.3792]} zoom={13} style={{ height: "400px", width: "100%", }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[6.5244, 3.3792]} >
            <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>

    </MapContainer>
);

export default MyMap;

