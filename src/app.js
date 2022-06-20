import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import ConsoleLogClass from './components/ConsoleLogClass';
import EffCounter from './components/useEff';
import PrExample from './components/PrExample';





class App extends React.Component {
    render() {

        
      return (
        <div>

            
            
            <Popup/>

            <p></p>

            <div className="container-fluid">
                
                <div className="col-md-10 offset-md-1">
                <h3 className="row">Function Counter</h3>
                    <Counter/>
                </div>
            </div>

            <div className="container-fluid">
                
                <div className="col-md-10 offset-md-1">
                <h3 className="row">Class CounterClass</h3>
                    <CounterClass/>
                </div>
            </div>

            <div className="container-fluid">
                
                <div className="col-md-10 offset-md-1">
                <h3 className="row">Class ConsoleLogClass</h3>
                
                    <ConsoleLogClass/>
                </div>
            </div>


            <div className="container-fluid">
                
                <div className="col-md-10 offset-md-1">
                <h3 className="row">Counter useEffect</h3>
                
                    <EffCounter />
                </div>
            </div>


            <div className="container-fluid">
                
                <div className="col-md-10 offset-md-1">
                <h3 className="row">Children Props</h3>
                
                    <PrExample />
                </div>
            </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));