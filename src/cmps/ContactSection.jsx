import { useEffect, useRef, useState } from "react";
import { utilService } from "../services/util.service";
import { SocialLink } from "./SocialLink";
import { SocialList } from "./SocialList";

export function ContactSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    const socials = [
        {
            imgUrl: '/img/instagram.svg',
            link: 'https://www.instagram.com/ziviz_tattoo/',
            name: 'instagram'
        },
        {
            imgUrl: '/img/whatsapp.svg',
            link: 'https://api.whatsapp.com/send?phone=972584229122',
            name: 'whatsapp'
        },
        {
            imgUrl: '/img/waze.svg',
            link: utilService.getWazeLink(32.082600773967236, 34.82010336765159),
            name: 'waze'
        },
        {
            imgUrl: '/img/maps.svg',
            link: utilService.geMapsLink(32.082600773967236, 34.82010336765159),
            name: 'maps'
        },
    ]

    return (
        <div className={`section ${isVisible ? 'visible' : ''} flex column align-center justify-center contact-section`} ref={sectionRef}>
            <h1><span>בואו</span> נדבר</h1>
            <p>הסטודיו שלי נמצא <span>בזיתים 11 - רמת גן</span>, אני זמינה לקביעת תורים וייעוץ <span>❤</span></p>

            <SocialList socials={socials} />

            <img className="girl" src="/img/girl-bat.png" />
            <img className="sumo" src="/img/sumo.png" />
        </div>
    )
}
