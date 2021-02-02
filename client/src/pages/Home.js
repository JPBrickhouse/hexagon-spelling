// ---------------------------------------------------------------------------------
import React, { useEffect, useState } from "react"
// ---------------------------------------------------------------------------------
// Importing the bootstrap container, row, and column components for responsive layout design
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// ---------------------------------------------------------------------------------
// https://www.npmjs.com/package/tiled-hexagons
// https://josephsurin.github.io/tiled-hexagons/
import { Hexagon, TiledHexagons } from 'tiled-hexagons'
// ---------------------------------------------------------------------------------
// Getting the data used to create and test the functions for the words
import word from "../wordData/initial-word-test"
console.log(word)
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

    const [middleLetter, setMiddleLetter] = useState(word.letters.middle)
    const [otherSixLetters, setOtherSixLetters] = useState(word.letters.otherSix)


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
    function updateLetters() {
        let currentArrayOrder = otherSixLetters;
        let newArrayOrder = shuffleArray(currentArrayOrder)
        setOtherSixLetters([...newArrayOrder]);
    }




    // Style for the text within the buttons
    const textStyle = {
        fontFamily: 'Source Sans Pro',
        fontSize: '120px',
        fill: '#000000'
    }

    // Proof that the button click works
    function testTest(event) {
        event.preventDefault()

        console.log("hello")

        if (event.target.innerHTML) {
            console.log(event.target.innerHTML)
        }
    }

    return (
        <div>

            {/* bootstrap container containing the hexagons */}
            <Container>




                {/* MAKE THIS BUTTON FANCY AND PUT IN A BETTER LOCATION */}
                <button onClick={updateLetters}>
                    Revise letter order
                </button>



                {/* First row of 2 hexagons */}
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text={otherSixLetters[0]}
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text={otherSixLetters[1]}
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                </Row>

                {/* Second row of 3 hexagons */}
                <Row>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text={otherSixLetters[2]}
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#F6C700"
                            shadow="#696969"
                            text={middleLetter}
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text={otherSixLetters[3]}
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                </Row>

                {/* Third row of 2 hexagons */}
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text={otherSixLetters[4]}
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text={otherSixLetters[5]}
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Home;
