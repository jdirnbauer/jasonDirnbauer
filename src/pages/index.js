import React from "react"
import SEO from "../components/seo"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Col, Row } from 'react-bootstrap';


import headerImage from '../images/header_image.jpg'
import about_us_image from '../images/about_us.jpg'
import portfolio_image from '../images/portfolio_image.jpg'
import contact_us_image from '../images/contact_us.jpg'
import './styles.css'

const IndexPage = () => (
  <div className="page">
<section>
  <Navbar bg="dark" variant="dark" expand="md" fixed="top">
  <Navbar.Brand href="#home">Jason Dirnbauer Web Design Studios</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Nav>
    <Nav.Link href="#about">About</Nav.Link>
    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    <Nav.Link href="#blog">Blog</Nav.Link>
    <Nav.Link href="#contact">Contact</Nav.Link>
    <Nav.Link href="#login">Login</Nav.Link>

  </Nav>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
      <SEO title="Jason Dirnbauer Web Design" />
      <img src={headerImage} alt="header" className="full_page_container"/>
      <div className="top-left text-color">
        <h1 className="text-resize">Jason Dirnbauer<br /></h1>
        <h1 className="text-resize">Web Design Studios<br /></h1>
        <h1 className="text-resize">We make websites to help your company succeed.</h1>
      </div>
</section>

    <Container>
    <Row id="about">
      <Col md={6}>
         <img src={about_us_image} alt="about us" ></img>
      </Col>
      <Col md={6}>
      <h2 className="text-center">About</h2>
      <p className="text-center ml-5">Jason Dirnbauer Web Design is a web design company located in the La Crosse, WI area. We develop sites for businesses that need a web presence to further their business goals. We enjoy working with businesses no matter the size because everyone can benefit from a well thought web presence. All of our sites are handmade which ensures that every detail is examined to ensure the best possible results for your business. Whether it be a new web site, a SEO optimization, or a site redesign Jason Dirnbauer Web Design Studios can assist.</p>
      </Col>
      </Row>

      <Row id="portfolio">
      <Col md={6}>
        <img src={portfolio_image} alt="portfolio" ></img>
      </Col>
      <Col md={6}>
        <h2 className="text-center">Portfolio</h2>
        <p className="text-center ml-5">Our studio has had the opportunity to work with many fine clients including:</p>
        <ul className="text-center">
          <li><a href="https://www.thefrugalnomads.com" >The Frugal Nomads</a></li>
        </ul>
      </Col>
      </Row>

      <Row id="contact">
      <Col md={6}>
        <img src={contact_us_image } alt="contact us" ></img>
      </Col>
      <Col md={6}>
        <h2 className="text-center">Contact</h2>
        <p className="text-center">If you'd like to work with our design studio please <a href="mailto:jason@jasondirnbauer.com">contact us.</a> </p>
      </Col>
      </Row>
      </Container>
</div>
)

export default IndexPage
