import { Hero } from "../cmps/Hero"
import { SectionsList } from "../cmps/SectionsList"

export function HomePage() {

    const sections = [
        {
            txt: 'A tattoo artist blending modern flair with traditional craftsmanship to create vibrant and meaningful body art',
            imgUrl: '/img/fish.png'
        },
        {
            txt: 'A tattoo artist blending modern flair with traditional craftsmanship to create vibrant and meaningful body art',
            imgUrl: '/img/women-cry-sun.png',
            pStyle: { top: '61%', translate: '0 -61%', maxWidth: '174px' }
        },
        {
            txt: 'A tattoo artist blending modern flair with traditional craftsmanship to create vibrant and meaningful body art',
            imgUrl: '/img/horse-women.png',
            pStyle: { top: '45%', translate: '-30% -45%', maxWidth: '218px' },
            imgStyle: { width: '165px', right: '3px', top: '72%', translate: '0 -72%' }
        },
    ]

    return (
        <section className="home-page">
            <Hero />
            <SectionsList sections={sections} />
        </section>
    )
}