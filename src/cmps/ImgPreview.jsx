import { useState } from "react"

export function ImgPreview({ imgUrl, onClose }) {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div className="flex align-center justify-center img-preview">
            <div onClick={onClose} className="black-screen"></div>

            <div className={`${isLoaded && 'loaded'} img-container`}>
                <img onLoad={() => setIsLoaded(true)} src={imgUrl} />
            </div>
        </div>
    )
}
