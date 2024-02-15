import { useNavigate } from "react-router-dom";
import { setCurrSection } from "../store/actions/app.actions";

export function GallerySection() {
    const router = useNavigate()

    function onLinkClick(ev) {
        ev.preventDefault()
        setCurrSection('gallery-section')
        router('/gallery')
    }

    return (
        <div className="section gallery-section">
            <img src="/img/women-cry-sun.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<a href={`${window.origin}/gallery`} onClick={onLinkClick}>גלריה</a></p>


        </div>
    )
}
