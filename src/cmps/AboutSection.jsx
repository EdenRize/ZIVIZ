import { useNavigate } from "react-router-dom";
import { setCurrSection } from "../store/actions/app.actions";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
    const router = useNavigate()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from('.fish-img', {
            scrollTrigger: {
                trigger: '.about-section'
            },
            opacity: 0,
            x: 400, // Slide in from the right, adjust the value as needed
            duration: 1.8 // Adjust duration as needed
        });
    }, []);

    function onLinkClick(ev) {
        ev.preventDefault()
        setCurrSection('about-section')
        router('/about')
    }

    return (
        <div className="section even about-section">
            <img className="fish-img" src="/img/fish.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<a href={`${window.origin}/about`} onClick={onLinkClick}>מי אני</a></p>


        </div>
    )
}
