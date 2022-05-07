import { Modal, Form, Button } from 'react-bootstrap';

const ModalForm = ({showModal, handleCloseModal, handleSaveButton}) => {
  
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Adauga impresia ta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titlu</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titlu"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nume</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Numele tau"
                  autoFocus
                />
              </Form.Group>
              
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Detalii</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Renunta
            </Button>
            <Button variant="primary" onClick={handleSaveButton}>
              Salveaza
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default ModalForm;