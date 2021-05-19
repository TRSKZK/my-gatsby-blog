import React from 'react'
import { Link } from 'gatsby'
import NavContainer from './NavContainer'
import styled from 'styled-components'


const Container = styled.main`
margin:auto;
max-width: 500px;
font-family: sans-serif;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const PageName = styled.h1`
color:rebeccapurple;

`

const Layout = ({ pageTitle, children }) => {
    return (
        <Container>
            <title>{pageTitle}</title>
            <NavContainer/>
            <PageName>{pageTitle}</PageName>
            {children}
        </Container>
    )
}


export default Layout