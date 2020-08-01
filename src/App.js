import React from "react";

import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div
      style={{ backgroundColor: "linen" }}
      className="min-vh-100 position-relative"
    >
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
