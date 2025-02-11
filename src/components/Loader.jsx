import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    const [typingFinished, setTypingFinished] = useState(false);

    useEffect(() => {
        if (typingFinished) {
            const timeout = setTimeout(onFinish, 2000); // Agregamos un margen extra
            return () => clearTimeout(timeout);
        }
    }, [typingFinished, onFinish]);

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
                    onLoopDone={() => setTypingFinished(true)} // Esperamos a que termine el tipeo
                />
            </h1>
        </div>
    );
};

export default Loader;
