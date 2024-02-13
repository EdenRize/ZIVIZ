import { SocialLink } from "./SocialLink";
import { SocialList } from "./SocialList";

export function ContactSection() {

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
    ]

    return (
        <div className="section flex column align-center justify-center contact-section">
            <h1><span>בואי</span> נדבר</h1>
            <p>הסטודיו שלי נמצא <span>בגבעתיים</span>, אני זמינה לקביעת תורים וייעוץ <span>❤</span></p>

            <SocialList socials={socials} />

            <img className="girl" src="/img/girl-bat.png" />
            <img className="sumo" src="/img/sumo.png" />
        </div>
    )
}
