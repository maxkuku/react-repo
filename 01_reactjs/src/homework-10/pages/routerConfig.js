import { PureComponent } from "react";
import { PureComponentExample } from "./PureConponentExamples"
   
   
   
export const routerConfig = [
    {
        
        path: "/purecomponent",
        component: PureComponentExample,
        name: "PureComponent",
    },
    {
        
        path: "/signup",
        name: "Sign Up",
    },
    {
        
        path: "/login",
        name: "Login",
    }
]