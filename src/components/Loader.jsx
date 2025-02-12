import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    const [typingFinished, setTypingFinished] = useState(false);

    useEffect(() => {
        if (typingFinished) {
            const timeout = setTimeout(() => {
                onFinish(); // ✅ Llamamos a onFinish después de que termine el texto
            }, 1000); // Espera breve antes de redirigir

            return () => clearTimeout(timeout);
        }
    }, [typingFinished, onFinish]);

    return (
        <div className="loader-container">
            <h1 className="typing-effect">
                <Typewriter
                    words={["Cargando..."]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={() => setTypingFinished(true)} // ✅ Detecta cuando termina de escribir
                />
            </h1>
        </div>
    );
};

export default Loader;
