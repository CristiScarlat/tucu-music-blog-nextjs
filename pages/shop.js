import { useState, useRef, useEffect } from 'react';
import { Form, Button, Spinner, Toast } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

const Shop = () => {
  const [error, setError] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [toast, setToast] = useState({
    show: false
  });

  const formRef = useRef();

  useEffect(() => {
    const delayId = null;
    if (toast.show) {
      delayId = setTimeout(() => {
        setToast({ show: false });
      }, 5000);
    }
    return () => clearTimeout(delayId);
  }, [toast.show]);

  const validateOnSubmit = (formData) => {
    const tempError = { ...error };
    if (!formData.reCaptcha || formData.reCaptcha === '') {
      tempError.reCaptcha = 'Confirmă ca nu ești robot.';
    }
    if (!formData.name || formData.name === '') {
      tempError.name = 'Numele complet este obligatoriu.';
    }
    if (!formData.address || formData.address === '') {
      tempError.address = 'Adresa completă este obligatorie.';
    }
    if (!formData.phone || formData.phone === '') {
      tempError.phone = 'Numărul de telefon este obligatoriu.';
    }
    setError(tempError);
    return Object.values(tempError).find((e) => e !== null) === undefined;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const address = e.target[1].value;
    const phone = e.target[2].value;
    const qty = e.target[3].value;
    const reCaptcha = e.target[4].value;
    if (!validateOnSubmit({ name, address, phone, qty, reCaptcha })) return;
    setSpinner(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setToast({
            show: true,
            header: 'OK',
            body: 'Comanda dvs. a fost trimisa cu succes, multumim.',
            backgroundColor: 'green'
          });
          setSpinner(false);
        },
        (error) => {
          setToast({
            show: true,
            header: 'Error',
            body: 'Comanda nu s-a facut cu success, va rugam contactati-ne telefonic.',
            backgroundColor: 'red'
          });
          setSpinner(false);
        }
      );
  };

  const onCaptchaChange = (token) => {
    if (token || token !== '') {
      resetError('reCaptcha');
    }
  };

  const resetError = (whichError) => {
    if (error[whichError]) {
      const tempError = { ...error };
      tempError[whichError] = null;
      setError(tempError);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: 'url(images/poze-prelucrate/1.png)',
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
    flex: 'auto'
  };

  return (
    <div className="shop-page-container" style={backgroundImageStyle}>
      <Form onSubmit={handleSubmit} className="shop-form" ref={formRef}>
        <div className="shop-page-info">
          &#9432;
          <span className="m-2">
            CD ul se poate cumpara de la:
          </span>
        </div>
        <ul>
          <li>
            <a href="https://carturesti.ro/muzica/sauvage-1738493553?p=1&t=c_quick-search&s=tucu+bleich" target="__blank" className="shop-page-link">Cărturești</a>
          </li>
          <li>
            <a href="https://www.humanitas.ro" target="__blank" className="shop-page-link">Humanitas</a>
          </li>
          <li>
            <a href="https://ladouabufnite.ro/" target="__blank" className="shop-page-link">La doua bufnițe<span className="shop-page-link-span">{'( '}în magazin{' )'}</span></a>
          </li>
          <li>
            <a href="https://viniloteca.shop/" target="__blank" className="shop-page-link">Viniloteca<span className="shop-page-link-span">{'( '}în magazin{' )'}</span></a>
          </li>
          <li className="mt-3">
            Sau poți comanda CD-ul Sauvage online.<br/><span className="shop-page-pret me-1">53ron</span>{'( '}inclusiv ramburs{' )'}
          </li>
        </ul>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nume</Form.Label>
          <Form.Control
            type="text"
            autoFocus
            placeholder="Nume și Prenume"
            name="tucu_shop_name"
            onChange={() => resetError('name')}
          />
          <div className="shop-form-error">{error.name}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adresa de livrare</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adresa Completa, Oraș, Județ"
            name="tucu_shop_address"
            onChange={() => resetError('address')}
          />
          <div className="shop-form-error">{error.address}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Telefon"
            name="tucu_shop_phone"
            onChange={() => resetError('phone')}
          />
          <div className="shop-form-error">{error.phone}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Cantitate</Form.Label>
          <Form.Control
            type="number"
            min={1}
            placeholder="Numar de cd-uri."
            name="tucu_shop_qty"
            defaultValue={1}
          />
        </Form.Group>

        <div className="mt-2 mb-2">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
            onChange={onCaptchaChange}
          />
          <div className="shop-form-error">{error.reCaptcha}</div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <Button className="me-3" variant="secondary">
            Renunta
          </Button>
          <Button type="submit" variant="primary">
            {spinner && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
            )}
            Trimite Comanda
          </Button>
        </div>
      </Form>

      <Toast
        show={toast.show}
        onClose={() => { }}
        className="shop-toast"
        style={{ backgroundColor: toast.backgroundColor }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto"></strong>
        </Toast.Header>
        <Toast.Body>{toast.body}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Shop;
