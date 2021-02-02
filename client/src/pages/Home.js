// ---------------------------------------------------------------------------------
import React from "react"
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

    // Proof that the button click works
    function testTest(event) {
        event.preventDefault()

        console.log("hello")

        if(event.target.innerHTML) {
            console.log(event.target.innerHTML)
        }
    }

    return (
        <div>
            
            {/* bootstrap container containing the hexagons */}
            <Container>

                {/* First row of 2 hexagons */}
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text="1"
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text="2"
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
                            text="3"
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text="4"
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text="5"
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
                            text="6"
                            textStyle={textStyle}
                            onClick={testTest}
                        />
                    </Col>
                    <Col xs={2}>
                        <Hexagon
                            fill="#C0C0C0"
                            shadow="#696969"
                            text="7"
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
