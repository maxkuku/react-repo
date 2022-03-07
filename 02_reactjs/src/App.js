import { SimpleRedux}  from './lesson-5/examples/SimpleRedux';
import { HOCs}  from './lesson-8/examples/HOCs';
import { Switch, Route } from 'react-router';
import { Layout } from './lesson-8/components/Layout'
import { BrowserRouter } from 'react-router-dom'; // v5
import { ReduxExample } from './lesson-8/examples/ReduxExample';
import { ContextExample } from './lesson-8/examples/context';
import { MiddlewareExample } from './lesson-8/pages/middleware'
import { ExercisesRoute } from './lesson-8/pages'


export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}


function App() {
    return (
        <div className='App'>
            {/* <ContextExample/> */}
            {/* <HOCs/> */}
            {/* <SimpleRedux/> */}


            <BrowserRouter>


            <Layout>
                <Switch >
                    <Route exact path = {'/'} component = {Home}/> 


                    <Route path = {'/todos'}>
                        <ExercisesRoute/>
                    </Route> 




                    <Route path = {'/redux'}>
                        <ReduxExample/>
                    </Route>   
                    
                    <Route path={'/middlewear'} component={MiddlewareExample}/>    


                </Switch> 
            </Layout>


                {/* <ExercisesRoute/>
                <ReduxExample/>
                <MiddlewareExample/> */}

            </BrowserRouter>
            
        </div>
    )
}

export default App;