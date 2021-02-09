// ---------------------------------------------------------------------------------
import React, { useState } from "react"
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
// Getting the data used for the word puzzle content and solutions
import allTheWordSolutions from "../wordData/allTheWordSolutions"
// The maximum is exclusive and the minimum is inclusive
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let maxExclusive = allTheWordSolutions.length;
let indexOfWordToUse = getRandomArbitrary(0, maxExclusive);
let word = allTheWordSolutions[indexOfWordToUse];
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
        hexSideLength = 45;
        hexText.fontSize = "45px"
    }
    else if (isMobileLandscape) {
        hexSideLength = 45;
        hexText.fontSize = "45px"
    }
    else if (isTablet) {
        hexSideLength = 45;
        hexText.fontSize = "45px"
    }
    else if (isDesktop) {
        hexSideLength = 60;
        hexText.fontSize = "60px"
    }
    else if (isLargeDesktop) {
        hexSideLength = 75;
        hexText.fontSize = "75px"
    }

    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";

    // State objects getting the letters for the puzzle
    const [middleLetter, setMiddleLetter] = useState(word.letters.middle);
    const [otherSixLetters, setOtherSixLetters] = useState(word.letters.otherSix);

    // State object displaying the letters as the user clicks them
    // (The default message appears, indicating where their letters will appear)
    const [displayedAsEntered, setDisplayedAsEntered] = useState("Your letters will appear here!");

    // State object for the click count, which is used to help determine when to display the default message
    const [clickCount, setClickCount] = useState(0);

    // State object containing the possible answers for the puzzle
    const [answerObject, setAnswerObject] = useState(word.answers);

    // State object containing the words that the user has already found
    const [userFoundWords, setUserFoundWords] = useState([]);

    // State object containing the user's score
    const [userScore, setUserScore] = useState(0)

    // State object counting how many words remain!
    const [wordsRemaining, setWordsRemaining] = useState(Object.keys(word.answers).length)

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

    // Function called from with the clickingALetter function to help update the display
    function updateDisplay(originalString, clickedLetter) {
        if (clickCount === 0) {
            let newString = clickedLetter;
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

        // Criteria to make sure that it's okay to delete letters
        // - Make sure that there are letters to delete
        // - Make sure that the messages aren't deleted
        if (currentString.length > 1 && currentString !== "Your letters will appear here!" && currentString !== "Missing middle letter - try again" && currentString !== "Not a valid answer - try again" && currentString !== "Already found - try again" && currentString !== "Great job - keep going!" && currentString !== "You have found all the words!") {
            // https://flaviocopes.com/how-to-remove-last-char-string-js/
            // Removing the last letter from the string
            let newString = currentString.slice(0, -1);

            // Updating the state of the display
            setDisplayedAsEntered(newString);
        }
        // If the string length is 1 (aka, there's only one last letter displayed and user clicks to remove it)
        // Then change the string to the default message, reset the click count, and update the state display
        else if (currentString.length === 1) {
            // Change the string to the default message
            let newString = "Your letters will appear here!";

            // Resetting the click count
            setClickCount(0);

            // Updating the state of the display
            setDisplayedAsEntered(newString);
        }
    }

    // Button click function that gets called any time a hexagon button is clicked
    function clickingALetter(event) {
        event.preventDefault();

        // Making sure that the game isn't over
        if (wordsRemaining > 0) {

            // Making sure that the letter is clicked
            if (event.target.textContent) {

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

    // Function to sort the userFoundWords array alphabetically
    // By default, the sort() method sorts the values as strings in alphabetical and ascending order
    function alphabetizeTheUserWords(array) {
        array.sort();
        return array;
    }

    // Button click function that gets called when the "Submit word" button is pushed
    function submitButtonClicked(event) {
        event.preventDefault();

        // If click count is zero, do nothing
        // If click count is not zero, let the submit happen
        if (clickCount !== 0) {

            let wordToCheck = displayedAsEntered;

            // The includes() method determines whether a string contains the characters of a specified string.
            // This method returns true if the string contains the characters, and false if not.
            // https://www.w3schools.com/jsref/jsref_includes.asp

            // If middleLetter is NOT included in the wordToCheck
            // Change the display and let the user know
            if (!wordToCheck.includes(middleLetter)) {
                // Updating the state of the display
                let newString = "Missing middle letter - try again";
                setDisplayedAsEntered(newString);

                // Resetting the click count
                setClickCount(0);
            }
            // If the middleLetter IS included in the wordToCheck
            // If it IS used, then proceed to other checks
            else {

                // Check if the word exists in the answer object
                // If it doesn't exist, then return a message letting the user know it's not a successful word
                if ((wordToCheck in answerObject) === false) {
                    // Updating the state of the display
                    let newString = "Not a valid answer - try again";
                    setDisplayedAsEntered(newString);

                    // Resetting the click count
                    setClickCount(0);
                }
                // If the word does exists, proceed to other checks
                else {

                    // If the word has already been found, the corresponding key value will be 0
                    // Let the user know that the word has already been found
                    if (answerObject[wordToCheck] === 0) {

                        // Updating the state of the display
                        let newString = "Already found - try again";
                        setDisplayedAsEntered(newString);

                        // Resetting the click count
                        setClickCount(0);
                    }
                    // If the word hasn't already been found, the corresponding key value will be 1
                    else if (answerObject[wordToCheck] === 1) {

                        // Revise the answer object's corresponding key value to be 0, meaning that it has been found
                        answerObject[wordToCheck] = 0;

                        // Add the word to – and sort! – the userFoundWords array
                        let arrayToUpdate = userFoundWords;
                        arrayToUpdate.push(wordToCheck);
                        let sortedArray = alphabetizeTheUserWords(arrayToUpdate);
                        setUserFoundWords([...sortedArray]);

                        // Update the score
                        if (wordToCheck.length === 4) {
                            setUserScore(userScore + 1);
                        }
                        else {
                            setUserScore(userScore + wordToCheck.length);
                        }

                        // Count down how many words are remaining
                        // If there are still words remaining, return a message letting them know to keep going
                        if (wordsRemaining > 1) {
                            // Reduce the counter associated with the words remaining
                            setWordsRemaining(wordsRemaining - 1)

                            // Updating the state of the display
                            let newString = "Great job - keep going!";
                            setDisplayedAsEntered(newString);

                            // Resetting the click count
                            setClickCount(0);
                        }
                        // If the user finds the last word, return a congratulatory message!
                        else {
                            // Reduce the counter associated with the words remaining
                            setWordsRemaining(wordsRemaining - 1)

                            // Updating the state of the display
                            let newString = "You have found all the words!";
                            setDisplayedAsEntered(newString);

                            // Resetting the click count
                            setClickCount(0);
                        }
                    }
                }
            }
        }
    }

    // ---------------------------------------------------------------------------------

    return (
        <div>

            {/* Temporary block of <p> tags for responsive display size reference */}
            {isMobilePortrait ? <p>Mobile Portrait</p> : null}
            {isMobileLandscape ? <p>Mobile Landscape</p> : null}
            {isTablet ? <p>Tablet</p> : null}
            {isDesktop ? <p>Desktop</p> : null}
            {isLargeDesktop ? <p>Large Desktop</p> : null}

            {/* bootstrap container containing the hexagons, buttons, and everything in between */}
            <Container>

                <Row>

                    <Col md={9}>
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
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[0]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={2}>
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
                                <Col xs={2}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[2]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={2}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#F6C700"
                                        shadow="#696969"
                                        text={middleLetter}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={2}>
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
                                <Col xs={2}>
                                    <Hexagon
                                        sideLength={hexSideLength}
                                        fill="#C0C0C0"
                                        shadow="#696969"
                                        text={otherSixLetters[4]}
                                        textStyle={hexText}
                                        onClick={clickingALetter}
                                    />
                                </Col>
                                <Col xs={2}>
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
                                <Col xs={2}>
                                    <Button variant="danger" size="lg" onClick={removeLetterFromDisplay}>
                                        Remove last letter
                                    </Button>
                                </Col>
                                <Col xs={1}></Col>
                                <Col xs={2}>
                                    <Button variant="info" size="lg" onClick={updateLetterOrder}>
                                        Revise letter order
                                    </Button>
                                </Col>
                                <Col xs={1}></Col>
                                <Col xs={2}>
                                    <Button variant="success" size="lg" onClick={submitButtonClicked}>
                                        Submit word
                                    </Button>
                                </Col>
                            </Col>
                        </Row>

                    </Col>

                    <Col md={3}>
                        <br />

                        <h2>Words remaining: {wordsRemaining}</h2>

                        <h2>Score: {userScore}</h2>

                        <h2>Words you've found!</h2>

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
