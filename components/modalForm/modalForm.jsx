import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { toFirebaseTimestamp } from "../../services/api";
import ReCAPTCHA from "react-google-recaptcha";

const ModalForm = ({ showModal, handleCloseModal, handleSaveButton }) => {
  const [formValues, setFormValues] = useState({});
  const [captcha, setCaptcha] = useState(false);

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

  const handleRealTimeValidation = (e) => {
    const temp = { ...formValues };
    temp[e.target.name] = e.target.value;
    setFormValues(temp);
  };

  const getButtonDisabledStatus = () => {
    if(!captcha)return true;
    const values = Object.values(formValues);
    const filtered = values.filter((v) => v !== "");
    return filtered.length === 0;
  };

  const onCaptchaChange = () => {
    setCaptcha(true);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      className="modal-content-dark-bg"
    >
      <Modal.Header closeButton style={{ color: "white" }}>
        <Modal.Title>Adauga impresia ta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} onChange={handleRealTimeValidation}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Titlu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titlu"
              autoFocus
              name="title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nume</Form.Label>
            <Form.Control
              type="text"
              placeholder="Numele tau"
              name="fullName"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detalii</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="details"
            />
          </Form.Group>
          <div className="mt-2 mb-2">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
              onChange={onCaptchaChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <Button
              className="me-3"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Renunta
            </Button>
            <Button
              type="submit"
              variant={`${getButtonDisabledStatus() ? "secondary" : "primary"}`}
              disabled={getButtonDisabledStatus()}
            >
              Salveaza
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
