import React from "react"

// Importing components from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing the Font Awesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const About = () => {
    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";
    
    return (
        <div>
            <Container>

                {/* Little header bar of options?
                Clicking an option will scroll down to the section? */}

                <Row>
                    <Col>
                        <h2>About the game!</h2>
                    </Col>

                    <Col>
                        <Row className={colCenterClassName}>
                            <h2>About the developer!</h2>
                        </Row>
                        <br/>
                        <Row className={colCenterClassName}>
                            <Image src={"https://avatars1.githubusercontent.com/u/63511774?s=400&u=399ed99b324c1fb9db704a3d130080e7f66b3924&v=4"} roundedCircle fluid />
                        </Row>
                        <br/>
                        <Row className={colCenterClassName}>
                            <h3>Let's connect!</h3>
                        </Row>
                        <br/>
                        <Row className={colCenterClassName}>
                            <a href="https://www.linkedin.com/in/joshpbrickman/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="6x" color="#0e76a8" /></a>
                            <a href="https://github.com/JPBrickhouse" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="6x" color="black" /></a>
                            <a href="mailto:joshpbrickman@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="6x" color="#808080" /></a>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default About;
