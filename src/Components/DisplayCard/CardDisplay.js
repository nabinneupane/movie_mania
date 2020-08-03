/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import DisplayMovie from "./DisplayMovie";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardDisplay = ({ arr, open }) => {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        {typeof arr === "undefined" ? (
          <Row className="h3 mx-auto text-dark  py-5 my-5">
            Oops.... There are no films with corresponding name. Please try a
            new one..
          </Row>
        ) : (
          arr.map((value) => (
            <DisplayMovie key={value.imdbID} input={value} open={open} />
          ))
        )}
      </Row>
    </Container>
  );
};

export default CardDisplay;
