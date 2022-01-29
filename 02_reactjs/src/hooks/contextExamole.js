import React from "react";
import { useContext } from "react";

const getTime = (date) => {
    return new Date.getTime(date);
}

export const MyThemeContext = React.createContext(
    {
        theme: 'dark',
        time: getTime(),
    }
);



// не пойму куда вставить

// export default function Example() {
//     const contextValue = useContext(MyThemeContext);
//     console.log(contextValue);
//     return <span>Example</span>;
// }


