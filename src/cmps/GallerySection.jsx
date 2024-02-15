import { useNavigate } from "react-router-dom";
import { setCurrSection } from "../store/actions/app.actions";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GallerySection() {
    const router = useNavigate()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from('.women-cry-img', {
            scrollTrigger: {
                trigger: '.gallery-section'
            },
            opacity: 0,
            x: -400, // Slide in from the right, adjust the value as needed
            duration: 1.8 // Adjust duration as needed
        });
    }, []);

    function onLinkClick(ev) {
        ev.preventDefault()
        setCurrSection('gallery-section')
        router('/gallery')
    }

    return (
        <div className="section gallery-section">
            <img className="women-cry-img" src="/img/women-cry-sun.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<a href={`${window.origin}/gallery`} onClick={onLinkClick}>גלריה</a></p>


        </div>
    )
}
