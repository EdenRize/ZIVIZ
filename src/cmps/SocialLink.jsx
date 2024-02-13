export function SocialLink({ name, imgUrl, link }) {
    return (
        <a href={link} target="_blank" className="social-link">
            <div className={`${name} flex justify-center align-center icon-container`}>
                <img src={imgUrl} />
            </div>
        </a>
    )
}
