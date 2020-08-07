import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Container from "react-bootstrap/Container";
import CardDisplay from "./DisplayCard/CardDisplay";
//import ModalPopup from "./DisplayCard/ModalPopup";
import ModalView from "./DisplayCard/ModalView";
import apiKey from "../apiKey";
import axios from "axios";
require("dotenv").config();

const Main = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [selected, setSelected] = useState({});

  const apiKey_OMDB = apiKey.REACT_APP_API_KEY_OMDB;
  console.log(apiKey_OMDB);
  const api_OMDB = `//www.omdbapi.com/?apikey=` + apiKey_OMDB;

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
          console.log("Error is: ", error);
          setArr([]);
        });
    }
  };

  const openModal = (id) => {
    const finalSearch = api_OMDB + "&i=" + id;
    axios(finalSearch).then(({ data }) => {
      let result = data;
      console.log(result);
      setSelected(result);
    });
  };

  const closeModal = () => {
    setSelected({});
  };
  return (
    <Container fluid={true}>
      <LandingPage handleInput={handleInput} searchItems={searchItems} />
      <CardDisplay arr={arr} open={openModal} />
      {typeof selected.Title != "undefined" ? (
        <ModalView selected={selected} close={closeModal} />
      ) : (
        false
      )}
    </Container>
  );
};

export default Main;
