// Componente BotonWhatsApp.js
import React from 'react';
import whatsappIcon from '../resources/icons/whatsapp.png';
import messengerIcon from '../resources/icons/messenger.png';
import playIcon from '../resources/icons/play.png';

const BotonWhatsApp = ({ onOpenPopup }) => {
    const bannerStyle = {
        position: 'absolute',
        //bottom: '15%',
        bottom: '12%', 
        right: '20px',      
        zIndex: 1000,       
        cursor: 'pointer', 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        gap: '16px',
        backgroundColor: 'rgba(41, 41, 41, 0.37)',
        //width: '64px',
        with: 'auto',
        height: 'auto',
        //paddingTop: '16px',
        //paddingBottom: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '16px',
        paddingRight: '16px',
        borderRadius: '16px',
    };
    const linkStyle = {
        width: '32px',
        height: '32px',
    }

    return (
        //<a href="https://api.whatsapp.com/send/?phone=51920212623" target='_blank' style={botonStyle}>
        <div style={bannerStyle}>
            <a href="https://wa.me/51920212623?text=Juega !!!" target='_blank'>
                <img src={whatsappIcon} className='borderAnimation-whatsapp' alt="WhatsApp" height = '100%' style={linkStyle} />
            </a>
            <a href="https://wa.me/51920212623?text=Juega !!!" target='_blank'>
                <img src={messengerIcon} className='borderAnimation-messenger' alt="Messenger" height = '100%' style={linkStyle} />
            </a>
            <a href="#" onClick={onOpenPopup}>
                <img src={playIcon} className='borderAnimation-media' alt="Media" height = '100%' style={linkStyle} />
            </a>
        </div>
    );
};

export default BotonWhatsApp;
