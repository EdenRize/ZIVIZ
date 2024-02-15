import { useEffect, useState, useRef } from "react";

export function ContactRouteSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    function scrollToBottom() {
        document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={`section even contact-route-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <img className="horse-img" src="/img/horse-women.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות גוף חיוניות <span onClick={scrollToBottom}>צרו קשר</span></p>
        </div>
    );
}
