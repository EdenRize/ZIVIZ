import { Logo } from "./Logo";

export function Hero() {
    return (
        <div className="section hero">
            <img className="hero-img women" src="/img/two-women-flower.png" />
            <div className="flex column align-center title-container">
                <Logo />
                <h2 className="roman">Tattoo Artist & More</h2>
            </div>
            <img className="hero-img flowers" src="/img/flowers.png" />
        </div>
    )
}
