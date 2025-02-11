import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    const [typingCompleted, setTypingCompleted] = useState(false);

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
                    onLoopDone={() => {
                        setTypingCompleted(true);
                        setTimeout(onFinish, 1000); // Da un margen de 1s después del tipeo
                    }}
                />
            </h1>
        </div>
    );
};

export default Loader;




