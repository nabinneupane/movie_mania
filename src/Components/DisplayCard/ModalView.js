import React from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ModalView = ({ selected, close }) => {
  const link = "http://imdb.com/title/" + selected.imdbID;

  return (
    <Modal
      style={{ backgroundColor: "linen" }}
      keyboard="false"
      backdrop="static"
      id={selected.imdbID}
      show={true}
      tabIndex="-1"
      size="lg"
      role="dialog"
      aria-hidden="true"
      datatoggle="modal"
      onHide={close}
      autoFocus={true}
      animated="true"
      centered
    >
      <Modal.Dialog role="document">
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto mb-2">
            {selected.Title} <span> ({selected.Year})</span>
          </Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
      <Modal.Body className="p-2">
        <Row className="d-flex justify-content-center p-3 ">
          <Col md={5}>
            {selected.Poster !== "N/A" ? (
              <img
                src={selected.Poster}
                className="thumbnail "
                alt="movie poster"
              />
            ) : (
              <div className=" my-5 py-5 text-muted">
                No image to Display.....
              </div>
            )}
          </Col>
          <Col>
            <ul className="list-group list-group-flush">
              {selected.Genre !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Genre: </strong>
                  <span> {selected.Genre} </span>
                </li>
              ) : (
                false
              )}

              {selected.Language !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Language: </strong>
                  <span> {selected.Language} </span>
                </li>
              ) : (
                false
              )}

              {selected.Released !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Released: </strong>
                  <span> {selected.Released}</span>
                </li>
              ) : (
                false
              )}
              {selected.Rated !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Rated: </strong>
                  <span> {selected.Rated} </span>
                </li>
              ) : (
                false
              )}
              {selected.imdbRating !== "N/A" ? (
                <li className="list-group-item">
                  <strong> IMDB Rating: </strong>
                  <span> {selected.imdbRating} </span>
                </li>
              ) : (
                false
              )}
              {selected.Director !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Director: </strong>
                  <span> {selected.Director} </span>
                </li>
              ) : (
                false
              )}
              {selected.Writer !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Writer: </strong>
                  <span> {selected.Writer} </span>
                </li>
              ) : (
                false
              )}

              {selected.Actors !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Actors: </strong>
                  <span> {selected.Actors} </span>
                </li>
              ) : (
                false
              )}
              {selected.Production !== "N/A" ? (
                <li className="list-group-item">
                  <strong> Production: </strong>
                  <span> {selected.Production} </span>
                </li>
              ) : (
                false
              )}
            </ul>
          </Col>
        </Row>
        <Modal.Title className="display-4 border-top p-2">Plot</Modal.Title>
        <p className="text-muted">
          {selected.Plot === "N/A" ? "No plot to display" : selected.Plot}
        </p>
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View IMDB
        </a>
        <Button variant="secondary" datadismiss="modal" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
