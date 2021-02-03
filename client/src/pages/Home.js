// ---------------------------------------------------------------------------------
import React, { useEffect, useState } from "react"
// ---------------------------------------------------------------------------------
// Importing the bootstrap container, row, and column components for responsive layout design
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
// ---------------------------------------------------------------------------------
// https://www.npmjs.com/package/tiled-hexagons
// https://josephsurin.github.io/tiled-hexagons/
import { Hexagon, TiledHexagons } from 'tiled-hexagons'
// ---------------------------------------------------------------------------------
// Getting the data used to create and test the functions for the words
import word from "../wordData/initial-word-test"
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
const Home = () => {

    // Style for the text within the buttons
    const textStyle = {
        fontFamily: 'Source Sans Pro',
        fontSize: '120px',
        fill: '#000000'
    }

    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center"

    // State objects getting the letters for the puzzle
    const [middleLetter, setMiddleLetter] = useState(word.letters.middle)
    const [otherSixLetters, setOtherSixLetters] = useState(word.letters.otherSix)

    // State object displaying the letters as the user clicks them
    // (The default message appears, indicating where their letters will appear)
    const [displayedAsEntered, setDisplayedAsEntered] = useState("Your letters will appear here!")

    // State object for the click count, which is used to help determine when to display the default message
    const [clickCount, setClickCount] = useState(0)

    // State object containing the possible answers for the puzzle
    const [answerObject, setAnswerObject] = useState(word.answers)

    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // Durstenfeld shuffle, an optimized version of Fisher-Yates
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render
    // "You've changed one of its values but it's still the same array, and I suspect React doesn't
    // see any reason to re-render because state hasn't changed; the new array is the old array.
    // One easy way to avoid this is by spreading the array into a new array."
    function updateLetterOrder() {
        let currentArrayOrder = otherSixLetters;
        let newArrayOrder = shuffleArray(currentArrayOrder);
        setOtherSixLetters([...newArrayOrder]);
    }

    function updateDisplay(originalString, clickedLetter) {
        if (clickCount === 0) {
            let newString = clickedLetter
            return newString;
        }
        else {
            let newString = originalString.concat(clickedLetter);
            return newString;
        }
    }

    // Button click function that gets called when the user clicks the "Remove last letter" button
    function removeLetterFromDisplay(event) {
        event.preventDefault();

        // Getting the currentString from the display
        let currentString = displayedAsEntered;

        // Making sure that it's not an empty / zero length string already
        if (currentString.length !== 0 && currentString.length !== 1) {
            // https://flaviocopes.com/how-to-remove-last-char-string-js/
            // Removing the last letter from the string
            let newString = currentString.slice(0, -1)

            // Updating the state of the display
            setDisplayedAsEntered(newString);
        }
        // If the string length is 1 (aka, there's only one last letter displayed and user clicks to remove it)
        // Then change the string to the default message, reset the click count, and update the state display
        if (currentString.length === 1) {
            // Change the string to the default message
            let newString = "Your letters will appear here!"

            // Resetting the click count
            setClickCount(0)

            // Updating the state of the display
            setDisplayedAsEntered(newString);
        }
    }

    // Button click function that gets called any time a hexagon button is clicked
    function clickingALetter(event) {
        event.preventDefault();

        // Making sure that the letter is clicked
        if (event.target.textContent) {

            if (clickCount === 0) {
                // Get the letter clicked
                let clickedLetter = event.target.textContent;

                // Get the current state of the display
                let originalString = displayedAsEntered;

                // Run the updateDisplay to add the clickedLetter
                let newString = updateDisplay(originalString, clickedLetter);

                // Updating the state of the display
                setDisplayedAsEntered(newString);

                // Updating the click count
                setClickCount(clickCount + 1);
            }
            else {
                // Get the letter clicked
                let clickedLetter = event.target.textContent;

                // Get the current state of the display
                let originalString = displayedAsEntered;

                // Run the updateDisplay to add the clickedLetter
                let newString = updateDisplay(originalString, clickedLetter);

                // Updating the state of the display
                setDisplayedAsEntered(newString);

                // Updating the click count
                setClickCount(clickCount + 1);
            }
        }
    }

    // Button click function that gets called when the "Submit word" button is pushed
    function submitButtonClicked(event) {
        event.preventDefault();

        // If click count is zero, do nothing

        // If click count is not zero, let the submit happen


        console.log("Hello!")

        // Need to check if the middle letter is used
        // If it isn't used, change the display and let the user know
        // If it IS used, then proceed to other checks




        


        // Check if the word exists in the answer object
        // If it doesn't exist, then return a message letting the user know it's not a successful word

        // If it does exist, either the word has or hasn't been found already
        
        // If it has been found already, the corresponding key value will be 0

        // If it hasn't been found, the corresponding key value will be 1
        // Revise the answer object to 0, meaning it has been found!



    }




    return (
        <div>

            {/* bootstrap container containing the hexagons, buttons, and everything in between */}
            <Container>

                <br />

                {/* Row where the user clicked letters get displayed */}
                <Row>
                    <Col className={colCenterClassName}>
                        <h1>{displayedAsEntered}</h1>
                    </Col>
                </Row>

                {/* First row of 2 hexagons */}
                <Row>
                    <Col className={colCenterClassName}>
                        <Col xs={2}>
                            <Hexagon
                                fill="#C0C0C0"
                                shadow="#696969"
                                text={otherSixLetters[0]}
                                textStyle={textStyle}
                                onClick={clickingALetter}
                            />
                        </Col>
                        <Col xs={2}>
                            <Hexagon
                                fill="#C0C0C0"
                                shadow="#696969"
                                text={otherSixLetters[1]}
                                textStyle={textStyle}
                                onClick={clickingALetter}
                            />
                        </Col>
                    </Col>
                </Row>

                {/* Second row of 3 hexagons */}
                <Row>
                    <Col className={colCenterClassName}>
                        <Col xs={2}>
                            <Hexagon
                                fill="#C0C0C0"
                                shadow="#696969"
                                text={otherSixLetters[2]}
                                textStyle={textStyle}
                                onClick={clickingALetter}
                            />
                        </Col>
                        <Col xs={2}>
                            <Hexagon
                                fill="#F6C700"
                                shadow="#696969"
                                text={middleLetter}
                                textStyle={textStyle}
                                onClick={clickingALetter}
                            />
                        </Col>
                        <Col xs={2}>
                            <Hexagon
                                fill="#C0C0C0"
                                shadow="#696969"
                                text={otherSixLetters[3]}
                                textStyle={textStyle}
                                onClick={clickingALetter}
                            />
                        </Col>
                    </Col>
                </Row>

                {/* Third row of 2 hexagons */}
                <Row>
                    <Col className={colCenterClassName}>
                        <Col xs={2}>
                            <Hexagon
                                fill="#C0C0C0"
                                shadow="#696969"
                                text={otherSixLetters[4]}
                                textStyle={textStyle}
                                onClick={clickingALetter}
                            />
                        </Col>
                        <Col xs={2}>
                            <Hexagon
                                fill="#C0C0C0"
                                shadow="#696969"
                                text={otherSixLetters[5]}
                                textStyle={textStyle}
                                onClick={clickingALetter}
                            />
                        </Col>
                    </Col>
                </Row>

                <br />

                {/* Row of buttons for actions */}
                <Row>
                    <Col className={colCenterClassName}>
                        <Col xs={2}>
                            <Button variant="danger" size="lg" onClick={removeLetterFromDisplay}>
                                Remove last letter
                            </Button>
                        </Col>

                        <Col xs={2}>
                            <Button variant="info" size="lg" onClick={updateLetterOrder}>
                                Revise letter order
                            </Button>
                        </Col>

                        <Col xs={2}>
                            <Button variant="success" size="lg" onClick={submitButtonClicked}>
                                Submit word
                            </Button>
                        </Col>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Home;
