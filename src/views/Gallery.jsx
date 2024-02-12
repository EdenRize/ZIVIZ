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
    ]

    return (
        <section className="gallery">
            <header>
                <h1 className="ltr"> <Logo />'s Gallery</h1>
            </header>
            <GalleryList imgUrls={imgUrls} />
        </section>
    )
}
