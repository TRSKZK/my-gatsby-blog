import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components"
import {graphql} from 'gatsby'


const PostContainer = styled.div`
width: 500px;
height: 300px;
background: no-repeat url('https://musiclife.kiev.ua/eshop.new/images/electronics/roland/116940/894b.jpg');
background-size: cover;

`

const MyCoolPost = ({ data }) => {
    return (
        <Layout>
            <h1>Proudly present my new toy, and my inspiration TR-8S</h1>
            <PostContainer>
                {/* <img src='https://musiclife.kiev.ua/eshop.new/images/electronics/roland/116940/894b.jpg'></img> */}
            </PostContainer>
        </Layout>
    )
}



export default MyCoolPost