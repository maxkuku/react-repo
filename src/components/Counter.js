import React, {useState} from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';


const Counter = () => {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
    <div> 
        
        <InputGroup className="mb-3">
            <Form.Control
            placeholder={count}
            aria-label="Счетчик"
            aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2" onClick={updateCount}>
            Добавить 1
            </Button>
        </InputGroup>
    </div>
    );
};

export default Counter;