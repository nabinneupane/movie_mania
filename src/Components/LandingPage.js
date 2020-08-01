import React from "react";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";

const LandingPage = ({ handleInput, searchItems }) => {
  return (
    <Jumbotron
      className="mx-auto w-75 p-2 my-3"
      style={{ backgroundColor: "darkgrey" }}
    >
      <Col sm={12} md={12}>
        <header className=" text-center p-0 my-3 display-4  font-weight-bolder border-bottom border-success ">
          Search a Movie
        </header>
      </Col>
      <section>
        <input
          type="text"
          className="form-control form-control-lg w-75 mx-auto my-3"
          placeholder=" Enter a movie name...."
          onChange={handleInput}
          onKeyPress={searchItems}
        />
      </section>
    </Jumbotron>
  );
};

export default LandingPage;
