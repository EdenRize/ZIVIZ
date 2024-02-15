import { useNavigate } from "react-router-dom";
import { setCurrSection } from "../store/actions/app.actions";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

export function AboutSection() {
    const router = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const currSection = useSelector(state => state.appModule.currSection);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
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
        <div className={`section even about-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <img className="fish-img" src="/img/fish.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<a href={`${window.origin}/about`} onClick={onLinkClick}>מי אני</a></p>
        </div>
    );
}
