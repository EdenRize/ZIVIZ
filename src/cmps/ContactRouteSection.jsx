export function ContactRouteSection() {

    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div className="section even contact-route-section">
            <img src="/img/horse-women.png" />
            <p>אמן/ת קעקועים שמשלב/ת טווים מודרניים עם מלאכת יד מסורתית כדי ליצור יצירות גוף חיוניות <span onClick={scrollToBottom}>צרו קשר</span></p>
        </div>
    )
}