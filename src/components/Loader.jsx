import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    const [typingCompleted, setTypingCompleted] = useState(false);

    useEffect(() => {
        const totalTime =
            (70 * "Cargando...".length) +  // Tiempo de tipeo de "Cargando..."
            1000 +                        // Delay antes del borrado
            (50 * "Cargando...".length) + // Tiempo de borrado de "Cargando..."
            1000 +                        // Delay antes de escribir "Bienvenido a mi portafolio!"
            (100 * "Bienvenido a mi portafolio!".length) + // Tiempo de tipeo de la segunda frase
            1000;                         // Espera final antes de ocultar

        const timeout = setTimeout(() => {
            setTypingCompleted(true);
            onFinish();
        }, totalTime);

        return () => clearTimeout(timeout);
    }, [onFinish]);

    return (
        <div className="loader-container">
            <h1 className="typing-effect">
                <Typewriter
                    words={["Cargando...", "Bienvenido a mi portafolio!"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
        </div>
    );
};

export default Loader;




