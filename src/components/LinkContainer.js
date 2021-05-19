import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const LinkList = styled.ul`
list-style: none;
display:flex;
gap: 15px;
padding: 0px
`
export const NavLink = styled(Link)`
text-decoration: none;
color:rebeccapurple;
&:hover{
    color: tomato;
}
`

const LinkContainer = () => {
    return (
        <LinkList>
            <li>
                <NavLink to='/'>Home page</NavLink>
            </li>
            <li>
                <NavLink to='/AboutPage'>About</NavLink>
            </li>
            <li>
                <NavLink to='/Contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/Blog'>Blog</NavLink>
            </li>
        </LinkList>
    )
}
export default LinkContainer
