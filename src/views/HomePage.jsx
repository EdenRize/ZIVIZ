import { useSelector } from "react-redux"
import { Hero } from "../cmps/Hero"
import { SectionsList } from "../cmps/SectionsList"
import { utilService } from "../services/util.service"

export function HomePage() {
    const screenSize = useSelector((storeState) => storeState.appModule.screenSize)
    const screen = utilService.getScreenSize(screenSize)

    const sections = [
        {
            txt: 'A tattoo artist blending modern flair with traditional craftsmanship to create vibrant and meaningful body art',
            imgUrl: '/img/fish.png'
        },
        {
            txt: 'A tattoo artist blending modern flair with traditional craftsmanship to create vibrant and meaningful body art',
            imgUrl: '/img/women-cry-sun.png',
            pStyle: { top: '54%', right: screen === 'mobile' || screen === 'mid-narrow' ? '5px' : '10px', translate: '0 -54%', maxWidth: screen === 'mobile' ? '174px' : screen === 'mid-narrow' ? '222px' : '300px' },
            imgStyle: { top: '55%', translate: '0 -55%' }
        },
        {
            txt: 'A tattoo artist blending modern flair with traditional craftsmanship to create vibrant and meaningful body art',
            imgUrl: '/img/horse-women.png',
            pStyle: { top: '45%', translate: '-30% -45%', maxWidth: screen === 'mobile' ? '222px' : screen === 'mid-narrow' ? '300px' : '350px' },
            imgStyle: { width: screen === 'mobile' ? '165px' : screen === 'mid-narrow' ? '200px' : '250px', right: '3px', top: '72%', translate: '0 -72%' }
        },
    ]

    return (
        <section className="home-page">
            <Hero />
            <SectionsList sections={sections} />
        </section>
    )
}