


import React, {useEffect, useState} from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';


export default function EffCounter() {
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }
    useEffect(() => {
        console.log(count);
    }, [count]);
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
