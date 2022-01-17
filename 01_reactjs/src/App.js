import './App.css';
import {Message} from './components';

function App() {
  return (
    <div className="App">
      <div className="container">

        <Message weight="bold">Текст передается через свойство props.children и оформлен жирным.</Message>

        <Message>Текст передается через свойство props.children и не оформлен.</Message>

      </div>
    </div>
  );
}

export default App;
