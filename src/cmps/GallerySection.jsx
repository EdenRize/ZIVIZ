import { useNavigate } from "react-router-dom";
import { setCurrSection } from "../store/actions/app.actions";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

export function GallerySection() {
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
        }, { threshold: .5 });

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (currSection === 'gallery-section') {
            setIsVisible(false);
        }
    }, [currSection]);

    function onLinkClick(ev) {
        ev.preventDefault();
        setCurrSection('gallery-section');
        router('/gallery');
    }

    return (
        <div className={`section gallery-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <img className="women-cry-img" src="/img/women-cry-sun.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<a href={`${window.origin}/gallery`} onClick={onLinkClick}>גלריה</a></p>
        </div>
    );
}
