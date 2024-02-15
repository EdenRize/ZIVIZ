import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

export function MerchSection() {
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

    return (
        <div className={`section ${isVisible ? 'visible' : ''} flex column align-center justify-center merch-section`} ref={sectionRef}>

            <h1 className="ltr"><Logo />'s Merch</h1>
            <p>Available <a href="https://www.ona.co.il/prd?collection=ziviz&fbclid=PAAaYNx4uKmHhCYjd3D6n_vkJykdNkDC9N_WAiXo34kDnepJ7bYm-kCnT9asE_aem_AaGFiPqPpNMd6aT2LKGvvC-DTLnYH1G66d4-WAxQLdkUwczFYbAByn3rUC1kgc5A6aM&page=2" target="_blank">here</a></p>

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
