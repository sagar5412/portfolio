import { useState, useEffect } from "react";

const titles = [
    "Frontend Developer",
    "React Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Software Developer"
];

export default function Typewriter() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = titles[index];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentWord.length) {
                    setIsDeleting(true);
                }
            } else {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setIndex((index + 1) % titles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <h1 style={{ fontSize: "30px", fontWeight: "bold", color: "red" }}>
            {text}
            <span className="cursor">|</span>
        </h1>
    );
}