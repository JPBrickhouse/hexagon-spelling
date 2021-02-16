import React from "react"

// Importing components from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing reacter router dom
import { Link } from 'react-router-dom'

// Importing the relevant gifs
import gifNYT from "./HexSpell-NYT.gif"
import gifJPB from "./HexSpell-JPB.gif"

const About = () => {
    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";
    // Style to increase the font size of the <p> text
    const pTextSize = { "fontSize": "18px" };

    return (
        <div>
            <Container>

                <Row>
                    <Col className={colCenterClassName}>
                        <h1>About <span><Link to="/">Hexagon Spelling</Link></span></h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className={colCenterClassName}>
                        <p style={pTextSize}>
                            Test your spelling skills at <span><Link to="/">Hexagon Spelling</Link></span>,
                            a game inspired by, but not affiliated with, the <span><a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank" rel="noopener noreferrer">New York Times Spelling Bee</a></span>.
                        <br />
                        <br />
                        Posted at every day at 3am EST, the New York Times Spelling Bee is an international obsession.
                        Don't just take my word for it, though!
                        This <span><a href="https://www.nytimes.com/2020/10/16/crosswords/spellingbee-puzzles.html" target="_blank" rel="noopener noreferrer">article</a></span> and
                        this <span><a href="https://slate.com/human-interest/2020/02/spelling-bee-new-york-times-praise.html" target="_blank" rel="noopener noreferrer">article</a></span> document
                        the craze, and millions of players – myself included – fawn over the puzzle daily.
                        <br />
                        <br />
                        As a challenge, I decided to reverse engineer the gameplay logic.
                        Solution sets – which were essential to my efforts in building this game – were
                        sourced from this <span><a href="https://www.shunn.net/bee/" target="_blank" rel="noopener noreferrer">website</a></span>.
                        After that, I focused on building a responsive page and dynamic user interface. The source code for the game and webpage can be found
                        on my <span><a href="https://github.com/JPBrickhouse/hexagon-spelling"> Github repo</a></span>.
                        <br />
                        <br />
                        Feel free to <span><Link to="/">connect</Link></span> or reach out with any questions! Thanks for stopping by!
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={6}>
                        <Row className={colCenterClassName}>
                            <h3>The <span><a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank" rel="noopener noreferrer">original version</a></span> by the New York Times</h3>
                            <Image src={gifNYT} fluid />
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className={colCenterClassName}>
                            <h3>My version</h3>
                            <Image src={gifJPB} fluid />
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default About;
