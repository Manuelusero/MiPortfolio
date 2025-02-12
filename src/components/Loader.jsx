import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    const [typingFinished, setTypingFinished] = useState(false);

    useEffect(() => {
        if (typingFinished) {
            console.log("⏳ Loader terminado, llamando a onFinish...");
            setTimeout(onFinish, 1000); // Espera 1s y luego cambia la página
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
                    delaySpeed={1000}
                    onLoopDone={() => {
                        console.log("✅ Typewriter completado");
                        setTypingFinished(true);
                    }}
                />
            </h1>
        </div>
    );
};

export default Loader;
