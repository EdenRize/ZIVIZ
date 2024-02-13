import { Hero } from "../cmps/Hero"
import { AboutSection } from "../cmps/AboutSection"
import { GallerySection } from "../cmps/GallerySection"
import { ContactSection } from "../cmps/ContactSection"
import { ReviewSection } from "../cmps/ReviewSection"
import { MerchSection } from "../cmps/MerchSection"

export function HomePage() {

    return (
        <section className="home-page">
            <Hero />
            <div className="info-sections">
                <AboutSection />
                <GallerySection />
                <ContactSection />
            </div>

            <ReviewSection />
            <MerchSection />
        </section>
    )
}