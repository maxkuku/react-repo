
import { Projects } from "./todo/components/Projects"
import { Tasks } from "./todo/components/Tasks/tasks"
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
        
        
    </div>
}