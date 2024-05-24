import { useRef, useState } from "react"


const UseStateVsUseRef = () => {

///useState
    const [count, setCount] = useState(0);

///useRef

const countRef = useRef(0);

//Create a helper function to handle our Increment

const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    countRef.current++;
    console.log('from useState',count);
    console.log(countRef.current);
    
    
}


  return (
    <>
        <h1 className="text-center">UseState Vs UseRef</h1>
        <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
        <div>
            <span>Counter from UseState: {count}</span>
        </div>
        <div>
            <span>From Ref: {countRef.current}</span>
        </div>
    </>
  )
}

export default UseStateVsUseRef