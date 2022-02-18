
import { Projects } from "./todo/components/Projects"
import { Tasks } from "./todo/components/Tasks/tasks"
import { FetchExample } from "../pages/fetch"
import { Route } from 'react-router'; // v5




export const MiddlewareExample2 = () => {

    

    return <div style={{
        display:"flex",
        gap:"16px",
    }}>
        
        <Route path={'/middleware'}>
            <FetchExample/>
        </Route>
        
        
    </div>
}
