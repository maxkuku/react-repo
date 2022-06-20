import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';








const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });


  const [result, setResult] = useState(null);


  const sendEmail = event => {
    event.preventDefault();
    axios
     .post('/send', { ...state })
     .then(response => {
       setResult(response.data);
       setState({ name: '', email: '', message: '' });
     })
     .catch(() => {
       setResult({ success: false, message: 'Something went wrong. Try again later'});
   });
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div>

{result && (
<p className={`${result.success ? 'success' : 'error'}`}>
{result.message}
</p>
)}

      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Введите имя"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Ваш email"
            onChange={onInputChange}
          />
        </Form.Group>
        
        <Form.Group controlId="message">
          <Form.Label>Список</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Список товаров для доставки"
            onChange={onInputChange}
          />
        </Form.Group>
        <br/>
        <Form.Group>
        <Button variant="primary" type="submit">
          Отправить
        </Button>
        </Form.Group>
      </form>
    </div>
  );
};



export default ContactForm;