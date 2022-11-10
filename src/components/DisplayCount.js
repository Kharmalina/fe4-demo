import React, { useContext } from 'react';
import { CountContext } from '../CountProvider';

//  a component function gets called to return the HTML needed ti display that component
function DisplayCount() {

    const {count} = useContext(CountContext);

    return(
        <h1>The count is {count}</h1>
    )
}

export { DisplayCount }
// another way to export is export default DisplayCount (no curly braces!!)