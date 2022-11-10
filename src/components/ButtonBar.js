import React from 'react';
import { IncrementButton, DecrementButton } from './Buttons'

//  a component function gets called to return the HTML needed ti display that component
function ButtonBar() {


    return(
        <>
            <IncrementButton />
            <DecrementButton />
        </>
    )
}

export { ButtonBar }