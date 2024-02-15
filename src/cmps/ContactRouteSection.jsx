import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { addVisitedSection } from "../store/actions/app.actions";

export function ContactRouteSection() {
    const [isvisited, setIsvisited] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const visitedSections = useSelector(state => state.appModule.visitedSections);

    useEffect(() => {

        if (visitedSections.includes('contact-route-section')) {
            setIsVisible(true)
            setIsvisited(true)
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    addVisitedSection('contact-route-section')
                }
            });
        }, { threshold: 0.5 });

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);

    function scrollToBottom() {
        document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={`section even contact-route-section ${isVisible ? 'visible' : ''} ${isvisited ? 'visited' : ''}`} ref={sectionRef}>
            <img className="horse-img" src="/img/horse-women.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות גוף חיוניות <span onClick={scrollToBottom}>צרו קשר</span></p>
        </div>
    );
}
