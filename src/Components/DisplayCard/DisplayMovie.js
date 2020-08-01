import React from "react";
import Col from "react-bootstrap/Col";

const DisplayMovie = ({ input }) => {
  return (
    <Col md={5} sm={6} className="d-block justify-content-center pb-3 mb-5">
      <img src={input.Poster} alt="" />
      <h3> {input.Title}</h3>
    </Col>
  );
};

export default DisplayMovie;
