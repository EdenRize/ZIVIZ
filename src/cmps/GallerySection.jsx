import { Link } from "react-router-dom";

export function GallerySection() {
    return (
        <div className="section gallery-section">
            <img src="/img/women-cry-sun.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות בואו ל<Link to="/gallery">גלריה</Link></p>

        </div>
    )
}
