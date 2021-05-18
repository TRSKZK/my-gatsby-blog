import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const LinkContainer = styled.ul`
list-style: none;
display:flex;
gap: 15px;
padding: 0px
`

const NavLink = styled(Link)`
text-decoration: none;
color: black;
&:hover{
    color: tomato;
}
`
const Container = styled.main`
margin:auto;
max-width: 500px;
font-family: sans-serif;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const Layout = ({ pageTitle, children }) => {
    return (
        <Container>
            <title>{pageTitle}</title>
            <nav>
                <LinkContainer>
                    <li>
                        <NavLink to='/'>Home page</NavLink>
                    </li>
                    <li>
                        <NavLink to='/AboutPage'>About</NavLink>
                    </li>
                </LinkContainer>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </Container>
    )
}


export default Layout