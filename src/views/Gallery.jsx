import { Link } from "react-router-dom";
import { GalleryList } from "../cmps/GalleryList";
import { Logo } from "../cmps/Logo";
import { ScrollArrow } from "../cmps/ScrollArrow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addVisitedSection } from "../store/actions/app.actions";

export function Gallery() {
    const [showScrollArrow, setShowScrollArrow] = useState(false)
    const visitedSections = useSelector(state => state.appModule.visitedSections)

    useEffect(() => {

        if (visitedSections.includes('gallery')) {
            setShowScrollArrow(false)
            return
        } else {
            addVisitedSection('gallery')
            setShowScrollArrow(true)
        }

        function handleScroll() {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setShowScrollArrow(false);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const imgUrls = [
        '/img/dog.png',
        '/img/fish.png',
        '/img/flower-women.png',
        '/img/flowers.png',
        '/img/handheld-fan-women.png',
        '/img/horse-women.png',
        '/img/moon.png',
        '/img/tea.png',
        '/img/two-girls.png',
        '/img/two-women-flower.png',
        '/img/two-women.png',
        '/img/women-cry-sun.png',
        '/img/women-drink.png',
        '/img/women-sun.png',
        '/img/flowers-2.png',
        '/img/flower-face.png',
        '/img/leaves-squares.png',
        '/img/girl-bat.png',
        '/img/girl-skate.png',
        '/img/kid-fish.png',
        '/img/girl-fall.png',
        '/img/sumo.png',
        '/img/circle-head.png',
        '/img/women-flower-chick.png',
    ]

    return (
        <section className="page gallery">
            <header className="page-header">
                <h1 className="ltr logo-header"><Link to="/"><Logo /></Link>'s Gallery</h1>
                <Link to="/"><img className="back-arrow" src="/img/back.svg" /></Link>
            </header>
            <div className="page-content">
                <GalleryList imgUrls={imgUrls} />
            </div>

            <ScrollArrow isShow={showScrollArrow} />

        </section>
    )
}
