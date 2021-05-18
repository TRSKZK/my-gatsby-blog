import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const LinkContainer = styled.ul`
list-style: none;
display:flex;
gap: 15px;
`

const Layout = ({ pageTitle, children }) => {
    return (

        <main>
            <title>{pageTitle}</title>
            <nav>
                <LinkContainer>
                    <li>
                        <Link to='/'>Home page</Link>
                    </li>
                    <li>
                        <Link to='/AboutPage'>About</Link>
                    </li>
                </LinkContainer>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}


export default Layout