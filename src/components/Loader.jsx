import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = ({ onFinish }) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (window.innerWidth <= 375) {
            setShowLoader(false);
            onFinish();
            return;
        }

        const timeout = setTimeout(() => {
            onFinish();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [onFinish]);

    if (!showLoader) return null;

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
