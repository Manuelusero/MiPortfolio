import React from 'react'
import './Contact.css'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <div>
            <h1 className='contact'>contacto.</h1>
            <span className='text1'>Estas interesado en que trabajemos juntos ? No seas timido, dejame tu mensaje! </span>
            <br />
            <span className='text2'>
                <FaWhatsapp style={{ marginRight: '8px' }} />
                +54 2477560509
            </span>
            <br />
            <span className='text3'>
                <FaEnvelope style={{ marginRight: '8px' }} />
                manuelusero6@gmail.com
            </span>
        </div>
    )
}

export default Contact
