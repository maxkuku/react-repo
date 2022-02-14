import { SimpleRedux}  from './lesson-5/examples/SimpleRedux';
import { HOCs}  from './lesson-5/examples/HOCs';

import { BrowserRouter } from 'react-router-dom'; // v5
import { ReduxExample } from './lesson-5/examples/ReduxExample';
import { ContextExample } from './lesson-5/examples/context';


function App() {
    return (
        <div className='App'>
            {/* <ContextExample/> */}
            {/* <HOCs/> */}
            {/* <SimpleRedux/> */}
            <BrowserRouter>
                <ReduxExample/>
            </BrowserRouter>
            
        </div>
    )
}

export default App;