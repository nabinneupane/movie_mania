import React from "react";
import DisplayMovie from "./DisplayMovie";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const CardDisplay = ({ arr }) => {
  console.log("arr is: " + arr.length);
  return (
    <Container fluid={true}>
      <Row className="justify-content-center ">
        {arr.map((value) => (
          <DisplayMovie key={value.imdbID} input={value} />
        ))}
      </Row>
    </Container>
  );
};

export default CardDisplay;
