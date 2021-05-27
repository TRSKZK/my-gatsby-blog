import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components"
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const PostContainer = styled.div`
width: 500px;
height: 300px;
// background: no-repeat url('https://musiclife.kiev.ua/eshop.new/images/electronics/roland/116940/894b.jpg');
background-size: cover;

`

const MyCoolPost = ({ data }) => {
    return (
        <Layout>
            <h1>Proudly present my new toy, and my inspiration TR-8S</h1>
            <PostContainer>
                <StaticImage alt='image of Roland tr8-s'
                src='https://musiclife.kiev.ua/eshop.new/images/electronics/roland/116940/894b.jpg'/>
            </PostContainer>
        </Layout>
    )
}



export default MyCoolPost