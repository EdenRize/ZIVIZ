import { useState, useEffect, useRef } from "react";

export function ReviewSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.5 }); // Intersection Observer threshold set to 0.5 (50%)

        observer.observe(sectionRef.current);

        // Cleanup observer
        return () => observer.disconnect();
    }, []);

    const reviews = [
        {
            txt: 'ללא ספק אחת המקעקעות הכי נחמדות ואדיבות שהייתי אצלן'
        },
        {
            txt: 'חוויה מושלמת, זיו הכי מרגיעה והכי מקצועית שיש וסמכתי עליה בעיניים עצומות!'
        },
        {
            txt: 'ללא ספק אחת המקעקעות הכי נחמדות ואדיבות שהייתי אצלן'
        },
        {
            txt: 'חוויה מושלמת, זיו הכי מרגיעה והכי מקצועית שיש וסמכתי עליה בעיניים עצומות!'
        },
    ]

    return (
        <div className={`section flex column review-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <ul className="clean-list review-list">
                {reviews.map((review, idx) => {
                    return (
                        <li className={`${idx % 2 === 0 && 'even'} flex align-center review`} key={idx}>
                            <img className="quote" src="/img/quote.svg" />
                            <p>{review.txt}</p>
                        </li>
                    );
                })}
            </ul>
            <img className="fish" src="/img/fish-tatt.jpeg" />
            <img className="women" src="/img/women-tatt.jpeg" />
        </div>
    );
}
