import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../../index.css";
const DisplayMovie = ({ input, open }) => {
  return (
    <Col
      md={4}
      sm={5}
      className=" d-flex flex-wrap pb-3 mb-5 "
      onClick={() => open(input.imdbID)}
    >
      <Card className="mx-auto flex-fill shadow text-white bg-secondary border-light ">
        <Card.Header>
          <Card.Title className="text-center"> {input.Title} </Card.Title>
          <a href="#" className="stretched-link" />
        </Card.Header>
        <Card.Img
          className="img-bottom img-fluid "
          src={input.Poster}
          alt="Card Img"
        />
      </Card>
    </Col>
  );
};

export default DisplayMovie;
