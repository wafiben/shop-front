import React, { useState } from 'react';
import MapPicker from 'react-google-map-picker'

function MapPickerComponent() {
    const DefaultLocation = { lat: 10, lng: 106 };
    const DefaultZoom = 10;
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }
    return (<>
        <button onClick={handleResetLocation}>Reset Location</button>
        <label>Latitute:</label><input type='text' value={location.lat} disabled />
        <label>Longitute:</label><input type='text' value={location.lng} disabled />
        <label>Zoom:</label><input type='text' value={zoom} disabled />
        <MapPicker defaultLocation={defaultLocation}
            zoom={zoom}
            mapTypeId="roadmap"
            style={{ height: '100px' }}
            onChangeLocation={() => handleChangeLocation(10, 106)}
            onChangeZoom={handleChangeZoom}
            apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'
        />
    </>
    )
}

export default MapPickerComponent