import { Hero } from "../cmps/Hero"
import { AboutSection } from "../cmps/AboutSection"
import { GallerySection } from "../cmps/GallerySection"
import { ContactRouteSection } from "../cmps/ContactRouteSection"
import { ReviewSection } from "../cmps/ReviewSection"
import { MerchSection } from "../cmps/MerchSection"
import { ContactSection } from "../cmps/ContactSection"
import { ScrollArrow } from "../cmps/ScrollArrow"

export function HomePage() {

    return (
        <section className="home-page">
            <Hero />
            <div className="info-sections">
                <AboutSection />
                <GallerySection />
                <ContactRouteSection />
            </div>

            <ReviewSection />
            <MerchSection />
            <ContactSection />
        </section>
    )
}