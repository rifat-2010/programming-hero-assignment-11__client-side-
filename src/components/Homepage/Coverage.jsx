import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Coverage = () => {
    const [coverageData, setCoverageData] = useState([]);
    const initialPosition = [23.8103, 90.4125]; 
    const initialZoom = 1; 

    useEffect(() => {
        fetch('/Mapdata.json')
            .then(response => response.json())
            .then(data => setCoverageData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='w-full h-[400px]'>
            <MapContainer 
            center={initialPosition} 
            zoom={initialZoom} 
            scrollWheelZoom={true} 
            className='h-[400px]' 
            style={{ borderRadius: '16px', zIndex: 1 }} 
>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> 
                
                {coverageData.map((location, index) => (
                    <Marker 
                        key={index} 
                        position={[location.latitude, location.longitude]} 
                    >
                        <Popup>
                            <div>
                                <h3>{location.city}, {location.country}</h3>
                                <p>Region: {location.region}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </div>
    );
};

export default Coverage;