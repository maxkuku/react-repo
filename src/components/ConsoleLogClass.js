
import React from 'react';



export class ConsoleLogClass extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    render() {
        console.log('render');
        return (
            <div>
            rendered!
            <ChildConsoleLogClass />
            </div>
        );
    }
}
class ChildConsoleLogClass extends React.Component {
        constructor(props) {
            super(props);
            console.log("child constructor");
    }
    componentDidMount() {
        console.log("child componentDidMount");
    }
    render() {
        console.log("child render");
        return <div>rendered!</div>;
    }
}


export default ConsoleLogClass;