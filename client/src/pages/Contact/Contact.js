import React from "react";

// Importing components from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing the Font Awesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons"


const Contact = () => {
    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";
    // Style to increase the font size of the <p> text
    const pTextSize = { "fontSize": "24px" };
    // Style for margins wth the two main columns
    const marginLeft = { "marginLeft": "35px" }
    const marginRight = { "marginRight": "35px" }

    return (
        <div>
            <Container>
                <Row className={colCenterClassName}>
                    <h1>Meet the developer!</h1>
                </Row>
                <br />
                <Row>
                    <Col lg={3} style={marginRight}>
                        <Row className={colCenterClassName}>
                            <Image src={"https://avatars1.githubusercontent.com/u/63511774?s=400&u=399ed99b324c1fb9db704a3d130080e7f66b3924&v=4"} roundedCircle fluid />
                        </Row>
                    </Col>
                    <Col lg={8} style={marginLeft}>
                        <Row>
                            <p style={pTextSize}>
                                I have built <span><a href="http://150northriverside.com/" target="_blank" rel="noopener noreferrer">office skyscrapers</a></span> in Chicago,
                                created <span><a href="https://www.atlasobscura.com/places/epiccampus" target="_blank" rel="noopener noreferrer">whimsical buildings</a></span> for Epic Systems,
                                and designed a space toilet – <span><a href="https://www.nasa.gov/feature/nasa-names-lunar-loo-challenge-winners" target="_blank" rel="noopener noreferrer">the THRONE</a></span> – for NASA.
                                <br />
                                <br />
                                <b> Now I build the future through code. </b>
                                <br />
                                <br />
                                Visit my <span><a href="https://jpbrickhouse.github.io/portfolio/" target="_blank" rel="noopener noreferrer">portfolio</a></span>,
                                or reach and out connect!
                                <br />
                                <br />
                                <b>Let's build something together!</b>
                            </p>
                        </Row>
                        <br />
                    </Col>
                </Row>
                <Row className={colCenterClassName}>
                    <Col md={1}></Col>
                    <Col><a href="https://www.linkedin.com/in/joshpbrickman/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="6x" color="#0e76a8" /></a></Col>
                    <Col><a href="https://github.com/JPBrickhouse" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="6x" color="black" /></a></Col>
                    <Col><a href="mailto:joshpbrickman@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="6x" color="#808080" /></a></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
