import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

export function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);
    return (
        <div className={`section ${isVisible ? 'visible' : ''} hero`} ref={sectionRef}>
            <img className="hero-img women" src="/img/two-women-flower.png" />
            <div className="flex column align-center title-container">
                <Logo />
                <h2 className="roman">Tattoo Artist & More</h2>
            </div>
            <img className="hero-img flowers" src="/img/flowers.png" />
        </div>
    )
}
