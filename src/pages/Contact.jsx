// import React from "react";
// import "./Contact.css";
// import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//     return (
//         <div id="top">
//             <h1 className="contact">contacto.</h1>
//             <span className="text1">
//                 ¿Estás interesado en que trabajemos juntos? No seas tímido, ¡déjame tu mensaje!
//             </span>
//             <br />
//             <span className="text2">
//                 <FaWhatsapp style={{ marginRight: "8px" }} />
//                 +54 2477560509
//             </span>
//             <br />
//             <span className="text3">
//                 <FaEnvelope style={{ marginRight: "8px" }} />
//                 manuelusero6@gmail.com
//             </span>
//         </div>
//     );
// };

// export default Contact;

import React, { useEffect } from "react";
import "./Contact.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    useEffect(() => {
        // Hace scroll automático al cargar la página
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div id="contact">
            <h1 className="contact">contacto.</h1>
            <span className="text1">
                ¿Estás interesado en que trabajemos juntos? No seas tímido, ¡déjame tu mensaje!
            </span>
            <br />
            <span className="text2">
                <FaWhatsapp style={{ marginRight: "8px" }} />
                +54 2477560509
            </span>
            <br />
            <span className="text3">
                <FaEnvelope style={{ marginRight: "8px" }} />
                manuelusero6@gmail.com
            </span>
        </div>
    );
};

export default Contact;
