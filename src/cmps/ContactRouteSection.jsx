import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ContactRouteSection() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from('.horse-img', {
            scrollTrigger: {
                trigger: '.contact-route-section'
            },
            opacity: 0,
            x: 400, // Slide in from the right, adjust the value as needed
            duration: 1.8 // Adjust duration as needed
        });
    }, []);

    function scrollToBottom() {
        document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="section even contact-route-section">
            <img className="horse-img" src="/img/horse-women.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות גוף חיוניות <span onClick={scrollToBottom}>צרו קשר</span></p>
        </div>
    )
}