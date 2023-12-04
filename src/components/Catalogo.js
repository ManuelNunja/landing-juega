// Componente Catalogo.js
import React, { useState } from 'react';
import LandingJuega from './LandingJuega';

const Catalogo = () => {
    const [showLanding, setShowLanding] = useState(false);

    const handleClick = () => {
        setShowLanding(true);
    };

    return (
        <div>
            {!showLanding && (
                <button onClick={handleClick}>Abrir Landing Juega</button>
            )}
            {showLanding && <LandingJuega />}
        </div>
    );
};

export default Catalogo;
