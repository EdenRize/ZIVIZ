import { Hero } from "../cmps/Hero"
import { AboutSection } from "../cmps/AboutSection"
import { GallerySection } from "../cmps/GallerySection"
import { ContactRouteSection } from "../cmps/ContactRouteSection"
import { ReviewSection } from "../cmps/ReviewSection"
import { MerchSection } from "../cmps/MerchSection"
import { ContactSection } from "../cmps/ContactSection"
import { useSelector } from "react-redux"
import { useEffect } from "react"


export function HomePage() {
    const currSection = useSelector(state => state.appModule.currSection);


    useEffect(() => {
        document.querySelector(`.${currSection}`).scrollIntoView({ behavior: 'instant' });
    }, [currSection]);

    return (
        <section className="home-page">
            <div style={{ height: '150px' }}></div>
            <Hero />
            <div className="info-sections">
                <AboutSection />
                <GallerySection />
                <ContactRouteSection />
            </div>
            <ReviewSection />
            <MerchSection />
            <ContactSection />
            <div style={{ height: '150px' }}></div>
        </section>
    );
}
