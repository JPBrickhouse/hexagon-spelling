import React from "react"

// Importing the container, row, and column from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


const About = () => {
    return (
        <div>
            <Container>

                {/* Little header bar of options?
                Clicking an option will scroll down to the section? */}

                <Row>
                    <Col>
                        <p>About the game!</p>
                    </Col>


                    <Col>
                        <p>About the developer!</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default About;
