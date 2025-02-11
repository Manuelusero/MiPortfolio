import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    useEffect(() => {
        const text1 = "Cargando...";
        const text2 = "Bienvenido a mi portafolio!";
        const typeSpeed = 70;  // Velocidad de tipeo por carácter (ms)
        const deleteSpeed = 50; // Velocidad de borrado por carácter (ms)
        const delaySpeed = 1000; // Tiempo de espera entre textos (ms)

        const totalTime =
            (text1.length * typeSpeed) + delaySpeed + // Tiempo de tipeo + espera
            (text1.length * deleteSpeed) + delaySpeed + // Tiempo de borrado + espera
            (text2.length * typeSpeed) + delaySpeed + // Tiempo de tipeo del segundo texto
            2000; // Margen extra para asegurar visibilidad completa

        const timeout = setTimeout(onFinish, totalTime);

        return () => clearTimeout(timeout);
    }, [onFinish]);

    return (
        <div className="loader-container">
            <h1 className="typing-effect">
                <Typewriter
                    words={["Bienvenido...", "A mi portafolio!"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
        </div>
    );
};

export default Loader;





