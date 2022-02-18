import { Switch, Route } from "react-router-dom";

import { MiddlewareExample } from "./middleware";
import { FetchExample } from "./fetch"
import { Todos } from "./todos"




export const ExercisesRoute = () => {
    return (
        <Switch>
            
            <Route component={Todos} path={'/todos'}/>
            
        </Switch>
    )
}