import { useNavigate } from "react-router-dom";
import { setCurrSection } from "../store/actions/app.actions";

export function AboutSection() {
    const router = useNavigate()

    function onLinkClick(ev) {
        ev.preventDefault()
        setCurrSection('about-section')
        router('/about')
    }

    return (
        <div className="section even about-section">
            <img src="/img/fish.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<a href={`${window.origin}/about`} onClick={onLinkClick}>מי אני</a></p>


        </div>
    )
}
