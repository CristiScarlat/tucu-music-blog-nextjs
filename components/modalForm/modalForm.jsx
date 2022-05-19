import { Modal, Form, Button } from "react-bootstrap";
import { toFirebaseTimestamp } from "../../services/api";

const ModalForm = ({ showModal, handleCloseModal, handleSaveButton }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formTitle = e.target[0].value || "";
    const formFullname = e.target[1].value || "";
    const formDetails = e.target[2].value || "";
    if (
      (formTitle && formTitle !== "") ||
      (formFullname && formFullname !== "") ||
      (formDetails && formDetails !== "")
    ) {
      handleSaveButton({
        title: formTitle,
        fullName: formFullname,
        details: formDetails,
        timestamp: toFirebaseTimestamp(new Date()),
      });
    }
    return;
  };

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      className="modal-content-dark-bg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Adauga impresia ta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Titlu</Form.Label>
            <Form.Control type="text" placeholder="Titlu" autoFocus />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nume</Form.Label>
            <Form.Control type="text" placeholder="Numele tau" autoFocus />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detalii</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              className="me-3"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Renunta
            </Button>
            <Button type="submit" variant="primary">
              Salveaza
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
