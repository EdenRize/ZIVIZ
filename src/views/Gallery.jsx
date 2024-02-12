import { Link } from "react-router-dom";
import { GalleryList } from "../cmps/GalleryList";
import { Logo } from "../cmps/Logo";

export function Gallery() {

    const imgUrls = [
        '/img/dog.png',
        '/img/fish.png',
        '/img/flower-women.png',
        '/img/flowers.png',
        '/img/handheld-fan-women.png',
        '/img/horse-women.png',
        '/img/moon.png',
        '/img/string.png',
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
        <section className="gallery">
            <header>
                <h1 className="ltr"><Link to="/"><Logo /></Link>'s Gallery</h1>
                <Link to="/"><img className="back-arrow" src="/img/back.svg" /></Link>
            </header>
            <GalleryList imgUrls={imgUrls} />
        </section>
    )
}
