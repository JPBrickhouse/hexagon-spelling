import React from "react"

// Importing components from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


const About = () => {
    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";

    return (
        <div>
            <Container>

                <Row>
                    <Col lg={4}>
                        <Row className={colCenterClassName}>
                            <h2>About the game!</h2>

                            {/* Background, history, rules
                            Reverse engineered the gameplay */}

                            {/* Test your spelling skills at a game inspired by, but not affiliated with, the New York Times "Spelling Bee"
                            https://www.nytimes.com/puzzles/spelling-bee */}
                        </Row>
                    </Col>

                    <Col lg={8}>

                        {/* Show the original game in action

                        Show my version

                        Link to rules
                        Link to gameplay
                        Link to developer */}

                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default About;
