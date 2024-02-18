import { useState } from "react"
import { ImgPreview } from "./ImgPreview"
import { Image } from "./Image"

export function GalleryList({ imgUrls }) {
    const [previewImg, setPreviewImg] = useState(null)

    return (
        <>
            <ul className="clean-list flex align-center justify-center gallery-list">
                {imgUrls.map((imgUrl, idx) => {
                    return <li
                        className="flex align-center justify-center"
                        key={idx}
                        onClick={() => setPreviewImg(imgUrl)}
                    >
                        <Image src={imgUrl} />
                    </li>
                })}
            </ul>

            {previewImg && <ImgPreview imgUrl={previewImg} onClose={() => setPreviewImg(null)} />}
        </>
    )
}
