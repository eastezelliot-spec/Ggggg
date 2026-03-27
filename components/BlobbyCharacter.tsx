import React, { useEffect, useState } from 'react';

const BlobbyCharacter = () => {
    const [size, setSize] = useState(100);
    const [color, setColor] = useState('#ff0000');

    useEffect(() => {
        const interval = setInterval(() => {
            setSize(prevSize => prevSize + 10);
            setColor(prevColor => prevColor === '#ff0000' ? '#00ff00' : '#ff0000');
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease'
        }}>
            <h2 style={{ color: '#fff' }}>Blobby</h2>
        </div>
    );
};

export default BlobbyCharacter;