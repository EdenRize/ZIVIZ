
export function ScrollArrow({ isShow }) {
    return (
        <img className={`${isShow ? 'visible' : ''} down-arrow`} src="/img/down.svg" />
    )
}
