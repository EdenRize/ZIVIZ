import { useNavigate } from "react-router-dom";
import { addVisitedSection, setCurrSection } from "../store/actions/app.actions";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Image } from "./Image";

export function GallerySection() {
    const router = useNavigate();
    const [isvisited, setIsvisited] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const visitedSections = useSelector(state => state.appModule.visitedSections);

    useEffect(() => {

        if (visitedSections.includes('gallery-section')) {
            setIsVisible(true)
            setIsvisited(true)
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    addVisitedSection('gallery-section')
                }
            });
        }, { threshold: .5 });

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);

    function onLinkClick(ev) {
        ev.preventDefault();
        setCurrSection('gallery-section');
        router('/gallery');
    }

    return (
        <div className={`section gallery-section ${isVisible ? 'visible' : ''} ${isvisited ? 'visited' : ''}`} ref={sectionRef}>
            <Image classes={['women-cry-img']} src="/img/women-cry-sun.png" />
            <p>לעוד פלאשים וסקיצות מבית ZIVIZ, היכנסו ל<a href={`${window.origin}/gallery`} onClick={onLinkClick}>גלריה</a></p>
        </div>
    );
}
