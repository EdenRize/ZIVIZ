import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { useSelector } from "react-redux";
import { addVisitedSection } from "../store/actions/app.actions";

export function MerchSection() {
    const [isvisited, setIsvisited] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const visitedSections = useSelector(state => state.appModule.visitedSections);

    useEffect(() => {

        if (visitedSections.includes('merch-section')) {
            setIsVisible(true)
            setIsvisited(true)
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    addVisitedSection('merch-section')
                }
            });
        }, { threshold: .5 });

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`section ${isVisible ? 'visible' : ''} ${isvisited ? 'visited' : ''} flex column align-center justify-center merch-section`} ref={sectionRef}>

            <h1 className="ltr"><Logo />'s Merch</h1>
            <p>Available <a rel="noreferrer" href="https://il.ona.co.il/?swoof=1&pa_product-type=%D7%91%D7%99%D7%99%D7%A1%D7%99%D7%A7-%D7%98%D7%99&product_cat=ziviz" target="_blank">here</a></p>

            <img className="ziv-2" src="/img/ziv2.jpeg" />
            <img className="ziv-and-men3" src="/img/ziv+men3.jpeg" />
            <img className="ziv-and-men4" src="/img/ziv+men4.jpeg" />
            <img className="men-3" src="/img/men3.jpeg" />
            <img className="ziv" src="/img/ziv.jpeg" />
            <img className="no-faces" src="/img/no-faces.jpeg" />
            <img className="ziv-and-men" src="/img/ziv+men.jpeg" />
            <img className="men" src="/img/men.jpeg" />
            <img className="ziv-and-men-2" src="/img/ziv+men2.jpeg" />
            <img className="men-2" src="/img/men2.jpeg" />
        </div>
    )
}
