import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"




const IndexPage = () => {
  return (
    
      <Layout pageTitle="Home Page">
      <p>I'm making this by following Gatsby's totorial</p>
      <StaticImage alt='picture'
       src='https://lh3.googleusercontent.com/proxy/0dlMERch2gGWARl_u0bIlZ1DMARVcxDmmwJb1_dVL7jY-ZKyjpe9qFyVONNONbX8nD5RHOzF4ytWfIefG3DYagH_eCvw6eWNotTkDSQfkq1p5xBJltn6qUweLRsvLcHt0H-oxfRx7b_Jm5U'/>
      </Layout>
      
    
  )
}

export default IndexPage
