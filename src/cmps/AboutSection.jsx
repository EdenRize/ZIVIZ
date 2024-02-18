import { useNavigate } from "react-router-dom";
import { addVisitedSection, setCurrSection } from "../store/actions/app.actions";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

export function AboutSection() {
    const router = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isvisited, setIsvisited] = useState(false);
    const sectionRef = useRef(null);
    const currSection = useSelector(state => state.appModule.currSection);
    const visitedSections = useSelector(state => state.appModule.visitedSections);

    useEffect(() => {
        if (visitedSections.includes('about-section')) {
            setIsVisible(true)
            setIsvisited(true)
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    addVisitedSection('about-section')
                }
            });
        }, { threshold: 0.5 });

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (currSection === 'hero') {
            setIsVisible(false);
        }
    }, [currSection]);

    function onLinkClick(ev) {
        ev.preventDefault();
        setCurrSection('about-section');
        router('/about');
    }

    return (
        <div className={`section even about-section ${isVisible ? 'visible' : ''} ${isvisited ? 'visited' : ''}`} ref={sectionRef}>
            <img className="fish-img" src="/img/fish.png" />
            <p>לפני הקעקוע, חשוב להכיר את הסיפור מאחורי המקעקעת. בואו <a href={`${window.origin}/about`} onClick={onLinkClick}>להכיר אותי</a></p>
        </div>
    );
}
