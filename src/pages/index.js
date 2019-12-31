import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';


import headerImage from '../images/header_image.jpg'
import './styles.css'

const IndexPage = () => (
  <div className="page">
<section>
  <Navbar bg="dark" variant="dark" expand="md" fixed="top">
  <Navbar.Brand href="#home">Jason Dirnbauer Web Design</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Nav>
    <Nav.Link href="#about">About</Nav.Link>
    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    <Nav.Link href="#blog">Blog</Nav.Link>
    <Nav.Link href="#contact">Contact</Nav.Link>
  </Nav>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
      <SEO title="Jason Dirnbauer Web Design" />
      <img src={headerImage} alt="header" className="full_page_container"/>
      <div className="top-left text-color">
        <h1 className="text-resize">Jason Dirnbauer.<br /></h1>
        <h1 className="text-resize">Web Developer.<br /></h1>
        <h1 className="text-resize">We make websites to help your company succeed.</h1>
      </div>
</section>
<Container>
<section id="about">
<p>Lorem ipsum dolor amet actually migas PBR&B shaman taxidermy ramps authentic distillery health goth. Roof party hell of glossier occupy. Flannel helvetica cronut flexitarian, meditation mustache wayfarers gochujang meh vexillologist affogato raclette. Aesthetic man bun truffaut chillwave cardigan actually cred put a bird on it farm-to-table kogi mixtape jean shorts occupy. IPhone typewriter photo booth scenester adaptogen subway tile cloud bread woke +1 deep v readymade narwhal coloring book dreamcatcher. Pug kickstarter farm-to-table, vape taiyaki waistcoat gluten-free snackwave.
</p>

<p>
Helvetica before they sold out celiac whatever readymade fixie. Flannel 90's photo booth la croix everyday carry craft beer. Vaporware la croix taiyaki, fixie butcher franzen intelligentsia brooklyn drinking vinegar. You probably haven't heard of them letterpress enamel pin narwhal migas gluten-free listicle hammock air plant cloud bread echo park pop-up.
</p>

<p>
Knausgaard poke copper mug gentrify scenester lo-fi street art. Everyday carry synth tousled aesthetic. Try-hard air plant humblebrag shaman. Af kogi fixie portland aesthetic vape franzen lumbersexual. Umami shoreditch selvage paleo hashtag lo-fi fingerstache occupy sartorial. Poutine man bun next level cliche kogi mumblecore polaroid seitan venmo mlkshk pinterest drinking vinegar truffaut. Seitan cornhole air plant banh mi, master cleanse sustainable salvia 3 wolf moon pabst enamel pin cliche flexitarian humblebrag.
</p>
<p>Lorem ipsum dolor amet actually migas PBR&B shaman taxidermy ramps authentic distillery health goth. Roof party hell of glossier occupy. Flannel helvetica cronut flexitarian, meditation mustache wayfarers gochujang meh vexillologist affogato raclette. Aesthetic man bun truffaut chillwave cardigan actually cred put a bird on it farm-to-table kogi mixtape jean shorts occupy. IPhone typewriter photo booth scenester adaptogen subway tile cloud bread woke +1 deep v readymade narwhal coloring book dreamcatcher. Pug kickstarter farm-to-table, vape taiyaki waistcoat gluten-free snackwave.
</p>

<p>
Helvetica before they sold out celiac whatever readymade fixie. Flannel 90's photo booth la croix everyday carry craft beer. Vaporware la croix taiyaki, fixie butcher franzen intelligentsia brooklyn drinking vinegar. You probably haven't heard of them letterpress enamel pin narwhal migas gluten-free listicle hammock air plant cloud bread echo park pop-up.
</p>

<p>
Knausgaard poke copper mug gentrify scenester lo-fi street art. Everyday carry synth tousled aesthetic. Try-hard air plant humblebrag shaman. Af kogi fixie portland aesthetic vape franzen lumbersexual. Umami shoreditch selvage paleo hashtag lo-fi fingerstache occupy sartorial. Poutine man bun next level cliche kogi mumblecore polaroid seitan venmo mlkshk pinterest drinking vinegar truffaut. Seitan cornhole air plant banh mi, master cleanse sustainable salvia 3 wolf moon pabst enamel pin cliche flexitarian humblebrag.
</p>
</section>
</Container>

  </div>
)

export default IndexPage
