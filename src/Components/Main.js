import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Container from "react-bootstrap/Container";
import CardDisplay from "./DisplayCard/CardDisplay";
import Row from "react-bootstrap/Row";
import axios from "axios";
require("dotenv").config();

const Main = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  const apiKey_OMDB = process.env.REACT_APP_API_KEY_OMDB;

  const api_OMDB = `http://www.omdbapi.com/?apikey=` + apiKey_OMDB;

  const handleInput = (e) => {
    let s = e.target.value;
    setInput(s);
  };

  const searchItems = (e) => {
    if (e.key === "Enter") {
      const finalApiSearch = api_OMDB + "&s=" + input;

      axios(finalApiSearch)
        .then(({ data }) => {
          let response = data.Search;
          console.log(response);
          setArr(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Container fluid={true}>
      <LandingPage handleInput={handleInput} searchItems={searchItems} />
      <CardDisplay arr={arr} />
    </Container>
  );
};

export default Main;
