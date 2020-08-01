import React from "react";

import { MDBFooter, MDBContainer } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      className="bg-dark text-light mt-auto position-absolute
    w-100 mt-5"
      style={{ bottom: 0 }}
    >
      <div className="footer-copyright text-center py-3 ">
        <MDBContainer fluid style={{ fontSize: "20px" }}>
          &copy; {new Date().getFullYear()} Copyright: Nabin Neupane
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
