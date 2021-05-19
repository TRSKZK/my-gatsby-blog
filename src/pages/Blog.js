import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'


const Blog = () => {
    return (
        <Layout pageTitle="Blog">
            <p>This is actual blog</p>
            <Link to='/my-cool-post'> My cool post</Link>
        </Layout>
    )

}


export default Blog;