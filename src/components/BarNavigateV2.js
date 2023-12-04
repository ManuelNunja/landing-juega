// Componente BarNavigate.js
import React from 'react';

const BarNavigate = ({ onNavigate }) => {
    const bannerStyle = {
        position: 'fixed',
        top: 'calc(50% - 100px)', 
        left: '20px',      
        zIndex: 1000,       
        cursor: 'pointer', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        justifyItems: 'center',
        alignContent: 'center',
        gap: '16px',
        backgroundColor: 'rgba(41, 41, 41, 0.37)',
        with: 'auto',
        height: '200px',
        overflow: 'hidden',
        overflowY: 'auto',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        borderRadius: '8px',
    };
    const styleLink = { width: '25px', height: '25px', color: 'white', textDecoration: 'none', fontSize: '12px' }
    const colores = ["#12968b","#12968b","#f48acc","#13b8c3","#e0c33c","#c4a9b8","#1f1f1f","#1686b0","#ca973b","#ffd457","#ffd457","#ffd457","#ffd457","#2e2e2e","#2e2e2e","#2e2e2e","#2e2e2e"];
    return (
        <div style={bannerStyle}>
            {colores.map((color, index) => (
                <div className='navBarAnimation' style={{backgroundColor: color, 
                                width: '32px', 
                                minHeight: '32px', 
                                textAlign: 'center', 
                                borderRadius: '8px', 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                alignContent: 'center',
                                fontWeight: 'bold',
                                border: 'solid 1px white',
                                }}>
                        <p>
                            <a href={'#NavPage' + index} style={styleLink}>
                                {index + 1}
                            </a>
                        </p>
                </div>
            ))}
        </div>
    );
};

export default BarNavigate;