import { Link } from "react-router-dom";
import { Logo } from "../cmps/Logo";
import { ScrollArrow } from "../cmps/ScrollArrow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addVisitedSection } from "../store/actions/app.actions";

export function About() {
    const [showScrollArrow, setShowScrollArrow] = useState(false)
    const visitedSections = useSelector(state => state.appModule.visitedSections)

    useEffect(() => {

        if (visitedSections.includes('about')) {
            setShowScrollArrow(false)
            return
        } else {
            addVisitedSection('about')
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

    return (
        <section className="page about">

            <header className="page-header">
                <h1 className="ltr logo-header">About <Link to="/"><Logo /></Link></h1>
                <Link to="/"><img className="back-arrow" src="/img/back.svg" /></Link>
            </header>

            <div className="flex column align-center page-content">
                <p>
                    אני זיו (: רובכם מכירים אותי כZIVIZ.
                    ‏ZIVIZ הוא מותג של קעקועים, חולצות ותיקים (וכמובן שרק ילך ויגדל).
                    אני מציירת כל החיים בערך. מהרגע שלמדתי להחזיק עפרון. זה היה המקום שלי להתבטא ולהביע את היצירתיות שלי. בדרך עברתי פיסול בחימר, צילום סטילס, וידאו, עריכה, קולנוע, עיצוב, כתיבה ועוד ועוד…
                    למדתי במוזות- תיכון לאמנויות ביפו המהממת.
                </p>

                <p>
                    בניסיון להבין איך אני מתפרנסת מהאמנות שלי, התחלתי במכירת חולצות עם ציורים שלי כבר בגיל 16, בהמשך נוספו גם ספלים וכשהתחלתי לחשוב על איפה עוד אני יכולה לשים את האמנות שלי פתאום הבנתי שהתשוקה האמיתית שלי היא לצייר על אנשים. כלומר לקעקע.
                </p>

                <p>
                    הבנתי שכל הרקע שלי באיור, שנתן לי לדייק את היד שלי כל החיים, האופי הלא מתפשר שלי יבואו לידי ביטוי בצורה הכי טובה בקיעקוע. המחשבה שיצירות שלי מסתובבות להן בעולם כחלק מבן אדם ריגשה אותי ומרגשת אותי עד היום. המחשבה שמישהו בוחר דווקא בי ובאמנות שלי לקעקוע עוררה בי משהו. במשך תקופה ארוכה הלכתי, למדתי והתמקצעתי והמסע התחיל. אני מזמינה אתכם להיות חלק מהמסע שלי ואשמח להפוך לחלק משלכם.
                </p>

                <h3>על החוויה</h3>
                <p>
                    קעקועים זאת אהבה בשבילי. עוד הרבה לפני ששקלתי ללמוד את זה בעצמי, הייתי ״מקועקעת מתמידה״ אצל המון מקעקעים מהממים. הרבה פעמים היו זורקים לי ״יש לך וייב של מקעקעת״ ולא הבנתי מה זה אומר. אולי היום אני מבינה קצת יותר. בתוך החוויות שלי כמקועקעת קיבלתי את הערכים שלי כמקעקעת. כשהייתי מתקעקעת בסטודיויים מסוימים לפעמים הייתי מקבלת את ההרגשה שאני עוד אחת שצריך לסיים איתה ולהכניס עוד לקוח אחריי. מן פס יצור.
                </p>

                <p>
                    באותם רגעים הבטחתי לעצמי שאתרגש מכל קעקוע ואעביר את זה גם ללקוחות שלי. כשנכנס אליי לקוח לסטודיו חשוב לי להעביר לו חוויה שתכלול את הערכים שאני דוגלת בהם. אני יודעת מה החוויה שאני רציתי לקבל בתור מקועקעת וזו החוויה שאני רוצה להעניק לכל לקוח שלי.
                </p>

                <p>
                    כשבן אדם מסתכל על הקעקוע שלו הוא לא רואה רק את התוצאה, הוא נזכר בחוויה שהייתה לו בזמן שהתקעקע, ואני מבינה כמה חשוב שהזכרון הזה יהיה נעים.
                </p>
            </div>

            <ScrollArrow isShow={showScrollArrow} />
            <img className="girl-skate" src="/img/girl-skate.png" />

        </section>
    )
}
