import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { useSelector } from "react-redux";
import { addVisitedSection } from "../store/actions/app.actions";

export function Hero() {
    const [isvisited, setIsvisited] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const visitedSections = useSelector(state => state.appModule.visitedSections);

    useEffect(() => {

        if (visitedSections.includes('hero')) {
            setIsVisible(true)
            setIsvisited(true)
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    addVisitedSection('hero')
                }
            });
        });

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);
    return (
        <div className={`section ${isVisible ? 'visible' : ''} ${isvisited ? 'visited' : ''} hero`} ref={sectionRef}>
            <img className="hero-img women" src="/img/two-women-flower.png" />
            <div className="flex column align-center title-container">
                <Logo />
                <h2 className="roman">Tattoo Artist & More</h2>
            </div>
            <img className="hero-img flowers" src="/img/flowers.png" />
        </div>
    )
}
