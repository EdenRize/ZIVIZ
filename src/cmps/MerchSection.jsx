import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { useSelector } from "react-redux";
import { addVisitedSection } from "../store/actions/app.actions";
import { Image } from "./Image";

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
            <p>Available <a href="https://www.ona.co.il/prd?collection=ziviz&fbclid=PAAaYNx4uKmHhCYjd3D6n_vkJykdNkDC9N_WAiXo34kDnepJ7bYm-kCnT9asE_aem_AaGFiPqPpNMd6aT2LKGvvC-DTLnYH1G66d4-WAxQLdkUwczFYbAByn3rUC1kgc5A6aM&page=2" target="_blank">here</a></p>

            <img className="ziv-2" src="/img/ziv2.jpeg" />
            <Image classes={['ziv-and-men3']} src="/img/ziv+men3.jpeg" />
            <Image classes={['ziv-and-men4']} src="/img/ziv+men4.jpeg" />
            <Image classes={['men-3']} src="/img/men3.jpeg" />
            <Image classes={['ziv']} src="/img/ziv.jpeg" />
            <Image classes={['no-faces']} src="/img/no-faces.jpeg" />
            <Image classes={['ziv-and-men']} src="/img/ziv+men.jpeg" />
            <Image classes={['men']} src="/img/men.jpeg" />
            <Image classes={['ziv-and-men-2']} src="/img/ziv+men2.jpeg" />
            <Image classes={['men-2']} src="/img/men2.jpeg" />
        </div>
    )
}
