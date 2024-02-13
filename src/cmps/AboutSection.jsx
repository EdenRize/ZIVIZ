import { Link } from "react-router-dom";

export function AboutSection() {
    return (
        <div className="section even about-section">
            <img src="/img/fish.png" />
            {/* <p>A tattoo artist blending modern flair with traditional craftsmanship to create vibrant and meaningful body art</p> */}
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<Link to="/about">מי אני</Link></p>


        </div>
    )
}
