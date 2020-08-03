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
            <img
              src={selected.Poster}
              className="thumbnail "
              alt="movie poster"
            />
          </Col>
          <Col>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong> Genre: </strong> {selected.Genre}
              </li>
              <li className="list-group-item">
                <strong> Language: </strong> {selected.Language}
              </li>
              <li className="list-group-item">
                <strong> Released: </strong> {selected.Released}
              </li>
              <li className="list-group-item">
                <strong> Rated: </strong> {selected.Rated}
              </li>
              <li className="list-group-item">
                <strong> IMDB Rating: </strong> {selected.imdbRating}
              </li>
              <li className="list-group-item">
                <strong> Director: </strong> {selected.Director}
              </li>
              <li className="list-group-item">
                <strong> Writer: </strong> {selected.Writer}
              </li>
              <li className="list-group-item">
                <strong> Actors: </strong> {selected.Actors}
              </li>
              <li className="list-group-item">
                <strong> Production: </strong> {selected.Production}
              </li>
            </ul>
          </Col>
        </Row>
        <Modal.Title className="display-4 border-top p-2">Plot</Modal.Title>
        <p className="text-muted"> {selected.Plot}</p>
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
