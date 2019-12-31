import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



import headerImage from '../images/header_image.jpg'
import './styles.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Jason Dirnbauer Web Design" />
    <img src={headerImage} alt="header" className="full_page_container"/>
    <div className="top-left text-color">
      <h1>Jason Dirnbauer.<br /></h1>
      <h1>Web Developer.<br /></h1>
      <h1>We make websites to help your company succeed.</h1>
    </div>
  </Layout>
)

export default IndexPage
