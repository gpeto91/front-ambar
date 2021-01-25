import Leaflet from "leaflet";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer, LayerGroup } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/slices/weatherSlice'
import weather from '../openweather/config'

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { useEffect } from "react";

const markers = [
    {
        name: "São Paulo",
        coords: [-23.5475, -46.6361]
    },
    {
        name: "São Carlos",
        coords: [-22.0175, -47.8908]
    },
    {
        name: "Ribeirão Preto",
        coords: [-21.1775, -47.8103]
    },
    {
        name: "Campinas",
        coords: [-22.9056, -47.0608]
    },
    {
        name: "Marília",
        coords: [-22.2139, -49.9458]
    },
    {
        name: "Franca",
        coords: [-20.5386, -47.4008]
    },
    {
        name: "Itajubá",
        coords: [-22.4256, -45.4528]
    }
]

const Map = ({ updateCity }) => {
    const dispatch = useDispatch()
    const handleClick = city => {
        weather.setCity(city)
        weather.getSmartJSON(function(err, smart) {
            let name = city
            let current = smart.temp
            let min;
            let max; 

            weather.getWeatherForecastForDays(1, (err, info) => {
                min = info.list[0].temp.min
                max = info.list[0].temp.max
    
                updateCity({ name, current, min, max })
            })
        })
    }

    return (
        <MapContainer
            center={[-22.5295578, -47.6940699]}
            style={{ width: '100%', height: '100%', minHeight: 230 }}
            zoom={8}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
            />

            { markers.map(marker => <Marker key={marker.name} position={marker.coords} eventHandlers={{ click: () => handleClick(marker.name) }} />)}
        </MapContainer>
    )
}

export default Map