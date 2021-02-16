// ---------------------------------------------------------------------------------
import React from "react"
// ---------------------------------------------------------------------------------
// Importing the bootstrap container, row, and column components for responsive layout design
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
// ---------------------------------------------------------------------------------
// https://www.npmjs.com/package/tiled-hexagons
// https://josephsurin.github.io/tiled-hexagons/
// npm package for the Hexagon button geometry and clickable interface
import { Hexagon } from 'tiled-hexagons'
// ---------------------------------------------------------------------------------
// https://www.npmjs.com/package/react-responsive
import { useMediaQuery } from 'react-responsive'
// npm package for making media queries and making the page responsive
// ---------------------------------------------------------------------------------

// NOTES about the button click

// Currently finicky with the event.target results
// WORKAROUND:
//   - Finds the event.target.innerHTML, which corresponds to the text="" applied in the Hexagon
//   - If the text is clicked, it works
//   - If the hexagon space outside of the text is clicked, it doesn't
//   - Hence the if statement catch-all
//   - ADJUST PADDING ON LEFT AND RIGHT (and maybe the top)?? (That way it captures it the full letter?)

// Hexagon sizing
// - Per the documentation (see above at the import statement), the default size is 100 pixels per side length
// - Need to use media queries to adjust size of hexagon based on device
// - Consider using https://www.npmjs.com/package/react-responsive to achieve this responsive design
// - When bootstrap's responsive columns reduce, the hexagons need to reduce respectively

// ---------------------------------------------------------------------------------
const Home = (props) => {

    // Block of media query possibilites, corresponding to screen size in pexels
    const isMobilePortrait = useMediaQuery({ maxWidth: 575 });
    const isMobileLandscape = useMediaQuery({ minWidth: 576, maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
    const isLargeDesktop = useMediaQuery({ minWidth: 1200 });

    // Variable styles for the hexagon side length and the associated text
    let hexSideLength = 75;
    let hexText = {
        fontFamily: 'Source Sans Pro',
        fontSize: '75px',
        fill: '#000000',
    }

    if (isMobilePortrait) {
        hexSideLength = 55;
        hexText.fontSize = "70px"
    }
    else if (isMobileLandscape) {
        hexSideLength = 60;
        hexText.fontSize = "75px"
    }
    else if (isTablet) {
        hexSideLength = 50;
        hexText.fontSize = "65px"
    }
    else if (isDesktop) {
        hexSideLength = 70;
        hexText.fontSize = "85px"
    }
    else if (isLargeDesktop) {
        hexSideLength = 85;
        hexText.fontSize = "100px"
    }

    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";

    // ---------------------------------------------------------------------------------
    // GETTING all the functions and variables passed down from props

    let displayedAsEntered = props.displayedAsEntered;
    let otherSixLetters = props.otherSixLetters;
    let middleLetter = props.middleLetter;
    let clickingALetter = props.clickingALetter;
    let removeLetterFromDisplay = props.removeLetterFromDisplay;
    let updateLetterOrder = props.updateLetterOrder;
    let submitButtonClicked = props.submitButtonClicked;
    let wordsRemaining = props.wordsRemaining;
    let userScore = props.userScore;
    let userFoundWords = props.userFoundWords;

    // ---------------------------------------------------------------------------------

    return (
        <div>

            {/* Temporary block of <p> tags for responsive display size reference */}
            {/* {isMobilePortrait ? <p>Mobile Portrait</p> : null}
            {isMobileLandscape ? <p>Mobile Landscape</p> : null}
            {isTablet ? <p>Tablet</p> : null}
            {isDesktop ? <p>Desktop</p> : null}
            {isLargeDesktop ? <p>Large Desktop</p> : null} */}

            {/* bootstrap container containing the hexagons, buttons, and everything in between */}
            <Container>

                <Row>

                    <Col md={7}>
                        <br />

                        {/* Row where the user clicked letters get displayed */}
                        <Row>
                            <Col className={colCenterClassName}>
                                <h2>{displayedAsEntered}</h2>
                            </Col>
                        </Row>

                        {/* First row of 2 hexagons */}
                        <Row>
                            <Col className={colCenterClassName}>
                                <Col xs={3}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[0]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={3}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[1]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                            </Col>
                        </Row>

                        {/* Second row of 3 hexagons */}
                        <Row>
                            <Col className={colCenterClassName}>
                                <Col xs={3}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[2]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={3}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#F6C700"
                                        shadow="#696969"
                                        text={middleLetter}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={3}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[3]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                            </Col>
                        </Row>

                        {/* Third row of 2 hexagons */}
                        <Row>
                            <Col className={colCenterClassName}>
                                <Col xs={3}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[4]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={3}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[5]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                            </Col>
                        </Row>

                        <br />

                        {/* Row of buttons for actions */}
                        <Row>
                            <Col className={colCenterClassName}>
                                <Button variant="danger" size="lg" onClick={removeLetterFromDisplay}>
                                    Remove last letter
                                </Button>

                                <Button variant="info" size="lg" onClick={updateLetterOrder}>
                                    Revise letter order
                                </Button>

                                <Button variant="success" size="lg" onClick={submitButtonClicked}>
                                    Submit word
                                </Button>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={5}>
                        <br />
                        <h2>Score: {userScore}</h2>
                        <h3>Words remaining: {wordsRemaining}</h3>
                        <h3>Words you've found:</h3>
                        {/* Make sure the array isn't empty */}
                        {/* Map over the array and create the list */}
                        <ul>
                            {userFoundWords.length !== 0 ? userFoundWords.map((singleWord) => (<li key={singleWord}>{singleWord}</li>)) : <div></div>}
                        </ul>
                    </Col>

                </Row>

            </Container>

        </div>
    );
}

export default Home;
