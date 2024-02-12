
export function GalleryList({ imgUrls }) {
    return (
        <ul className="clean-list flex align-center justify-center gallery-list">
            {imgUrls.map((imgUrl, idx) => {
                return <li className="flex align-center justify-center" key={idx}>
                    <img src={imgUrl} />
                </li>
            })}
        </ul>
    )
}
