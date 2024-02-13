import { FiveStars } from "./FiveStars"

export function ReviewSection() {

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
        <div className="section flex column review-section">

            <ul className="clean-list review-list">
                {reviews.map((review, idx) => {

                    return <li className={`${idx % 2 === 0 && 'even'} flex align-center review`} key={idx}>
                        <img className="quote" src="/img/quote.svg" />
                        <p>{review.txt}</p>
                        {/* <FiveStars /> */}

                    </li>

                })}
            </ul>

        </div>
    )
}
