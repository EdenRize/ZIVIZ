export function FiveStars() {
    return (
        <div className="flex align-center five-stars">
            {Array.from({ length: 5 }, (_, index) => (
                <img key={index} src="/img/star.svg" />
            ))}
        </div>
    )
}
