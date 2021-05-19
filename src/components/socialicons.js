import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = styled.a`
tex-decoration:none;
color: blue;
margin:15px;
&:hover{
    color:#00FFFF;
}
`
const GitLink = styled(SocialLinks)`
color:black;
`

const StyledFontAwasome = styled(FontAwesomeIcon)`
font-size: 30px

`

const SocialIcons = () => {
    return (
        <div>
                <SocialLinks href="https://www.facebook.com/taras.kozak/">
                <StyledFontAwasome icon={faFacebookSquare} /></SocialLinks>
            
                <SocialLinks href="https://www.linkedin.com/in/taras-kozak-017583113/">
                <StyledFontAwasome icon={faLinkedin} /></SocialLinks>
            
                <GitLink href="https://github.com/TRSKZK/">
                <StyledFontAwasome icon={faGithub} /></GitLink>
        </div>
    )
}


export default SocialIcons