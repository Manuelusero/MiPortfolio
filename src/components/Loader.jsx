import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    useEffect(() => {
        console.log("⏳ Loader iniciado...");
        const timeout = setTimeout(() => {
            console.log("✅ Tiempo completado, llamando a onFinish...");
            onFinish(); // Aseguramos que se llama correctamente
        }, 3000); // Espera 3 segundos tras iniciar

        return () => clearTimeout(timeout); // Limpiamos para evitar errores
    }, [onFinish]);

    return (
        <div className="loader-container">
            <h1 className="typing-effect">
                <Typewriter
                    words={["Bienvenidos..."]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    delaySpeed={1000}
                />
            </h1>
        </div>
    );
};

export default Loader;
