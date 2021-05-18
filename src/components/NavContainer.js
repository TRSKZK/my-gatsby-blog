import React from 'react'
import styled from 'styled-components'
import LinkContainer, { NavLink }  from './LinkContainer'


const NavBar = styled.nav`
display:flex;
justify-content:space-between;
align-items: center;
gap:100px;
`

const LogoLink = styled(NavLink)`
color:black;
font-weight: bold;
&:hover{
    color: black;
}
`



const  NavContainer = () => {
    return (
        <NavBar >
            <LogoLink to="/"> My Gatsby blog</LogoLink>
            <LinkContainer/>
        </NavBar >
    )
}


export default NavContainer