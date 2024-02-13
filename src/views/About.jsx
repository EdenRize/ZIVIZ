import { Link } from "react-router-dom";
import { Logo } from "../cmps/Logo";

export function About() {
    return (
        <section className="page about">

            <header className="page-header">
                <h1 className="ltr logo-header">About <Link to="/"><Logo /></Link></h1>
                <Link to="/"><img className="back-arrow" src="/img/back.svg" /></Link>
            </header>

            <div className="flex column align-center page-content">
                <p>
                    אני ההפשטה של יצירתיות שמוקשת על בד חי. עם כל מכה של המחט שלי, אני נופחת חיים לתוך החזונות שרוקדים בתוך דמיוני.
                    ידיי, מסומכות בדיו, הם הכלים שבאמצעותם אני מבטאת את עומקם של נפשי.
                    אני לא רק אמן קעקועים; אני סופר סיפורים, מארג סיפורי אהבה, כאב ועמידות על עורם של אלה המחפשים ללבוש את סיפוריהם בגאווה.
                </p>

                <p>
                    בקדש השקט של הסטודיו שלי, מסובב סביב רעש של מכונות קעקועים וריח של דיו, אני מוצא את עצמי האמיתי ביותר.
                    אני מופקרת לביטוי עצמי, משקפת של עזרה עצמית לאלה שמעזים לקבל את אמנות גופם.
                    עם כל עיצוב, אני מזמינה אחרים להצטרף אלי במסע של גילוי עצמי, היכן שקווים בין אמנות וזהות מתמעטים, ויופיו של האינדיבידואליות מזרח ביותר.
                </p>

                <p>
                    בקדש השקט של הסטודיו שלי, מסובב סביב רעש של מכונות קעקועים וריח של דיו, אני מוצא את עצמי האמיתי ביותר.
                    אני מופקרת לביטוי עצמי,
                </p>
            </div>

            <img className="girl-skate" src="/img/girl-skate.png" />

        </section>
    )
}
