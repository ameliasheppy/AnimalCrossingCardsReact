import { useState } from "react";


export default function ClickCounter(props){
//getter the var to ref my piece of state
//getter is currentCount, refer to it in the HTML!!!!!!!!!!!
//setter is func to do setCurrentCount
//use the setter to handle the clicking!!
//pass our initial val to useState, can be 0, [], "", "apple", just give it a value!!!
const [currentCount, setCurrentCount] = useState(props.initialCount)

const incrementCount =() =>{
    //increment the count! Tie it to the button
    //can update count in a couple of ways. Add to the val of the getter
    setCurrentCount(currentCount+1)
    //ORRRR       think of previsousCount as previousState
    //this allows for more flexible calcs
    // setCurrentCount( (previousCount) => previousCount +1)
}
    return(
        <div className="clicker-section">
<div>
    <h2>
        Current Count: {currentCount}
    </h2>
    </div>
    <button type="button" onClick={incrementCount}>
Click to increase count
    </button>
        </div>
    )
}