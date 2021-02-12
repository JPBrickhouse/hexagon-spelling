import React from "react"

// Importing components from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing reacter router dom
import { Link } from 'react-router-dom'

// Importing the bee gif
import beeImage from "./bee.gif"

const Rules = () => {
    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";

    return (
        <div>
            <Container>

                <Row className={colCenterClassName}>
                    <h1>Rules for <span><Link to="/">Hexagon Spelling</Link></span></h1>
                </Row>
                <br />
                <Row>
                    <Col lg={6}>
                        <h4>Build words using letters from the honeycomb!</h4>
                        <ul>
                            <li>Words must be a minimum of 4 letters long!</li>
                            <li>Words must include the middle letter to be valid!</li>
                            <li>No proper nouns, obsure words, or hyphenated words!</li>
                            <li>No swears or naughty words, but we appreciate you trying!</li>
                            <li>Use each letter as many times as you'd like to build a word!</li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <h4>Earn points for building correct words!</h4>
                        <ul>
                            <li>Words that are 4-letters long are only worth 1 point, because we know you can do better!</li>
                            <li>Words that are longer than 4-letters are as many points as their lenght! (5-letter word for 5 points, 9-letter word for 9 points, etc.)</li>
                            <li>See how high you can get your score!</li>
                        </ul>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className={colCenterClassName}>
                        <h2>For more information about the game, click <span><Link to="/about">here</Link></span></h2>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className={colCenterClassName}>
                        <Image src={beeImage} roundedCircle fluid />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Rules;
