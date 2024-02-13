import { SocialLink } from "./SocialLink"

export function SocialList({ socials }) {
    return (
        <ul className="clean-list flex align-center social-list">
            {socials.map(social => {
                return <SocialLink key={social.name} {...social} />
            })}
        </ul>
    )
}
