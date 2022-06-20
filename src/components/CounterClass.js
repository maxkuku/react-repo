

import React, {setState} from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

class CounterClass extends React.Component {
    state = {
        count: 0, // начальное значение
    };
    updateCount = () => {
        const { count } = this.state; // деструктуризация стейта
        this.setState({ count: count + 1 });
    };
    render() {
        return (
            <div> 
                
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder={this.state.count}
                    aria-label="Счетчик"
                    aria-describedby="basic-addon2"
                    
                    />
                    <Button variant="warning" id="button-addon2" onClick={this.updateCount}>
                    Добавить 1
                    </Button>
                </InputGroup>
            </div>
        );
    }
}


export default CounterClass;