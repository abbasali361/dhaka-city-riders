import React from 'react';
import Direction from './Direction';
import React, { useState } from 'react';

const Map = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    return (
        <div>
            <input type="text" placeholder="Starting From" onBlur={e => setOrigin(e.target.value)} />
            <input type="text" placeholder="Going to" onBlur={e => setDestination(e.target.value)} />
            <Direction>origin={origin} destination={destination} /Direction></Direction>
        </div>
    );
};

export default Map;