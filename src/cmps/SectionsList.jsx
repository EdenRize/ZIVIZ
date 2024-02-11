export function SectionsList({ sections }) {
    return (
        <ul className="clean-list sections-list">

            {sections.map((section, idx) => {
                return <li key={idx} className={`${(idx) % 2 === 0 && 'even'} section`}>
                    <img style={section.imgStyle || {}} src={section.imgUrl} />
                    <p style={section.pStyle || {}}>{section.txt}</p>
                </li>
            })}

        </ul>
    )
}
