
import { Projects } from "./todo/components/Projects"
import { Tasks } from "./todo/components/Tasks/tasks"
import { FetchExample } from "../pages/fetch"
import { Route } from 'react-router'; // v5




export const ReduxExample = () => {

    

    return <div style={{
        display:"flex",
        gap:"16px",
    }}>
        <Route path={'/projects'}>
            <Projects/>
        </Route>
        <Route path={'/projects/:projectId'}>
            <Tasks/>
        </Route>
        <Route path={'/fetch'}>
            <FetchExample/>
        </Route>
        
        
    </div>
}