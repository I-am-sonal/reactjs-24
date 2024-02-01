import { useEffect, useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("namaste react operation!");
        }, 1000);
        
        console.log("useEffect");

        return ()=> {
            clearInterval(timer);
            console.log("useEffect return");
    
        }
    },[]);
    
    console.log("render");

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                 setCount(count + 1)
            }}>Count Increse Functional</button>
            <h4>Count: {count2}</h4>
            <h2>Name: {name}</h2>
            <h3>Location: Mumbai</h3>
            <h4>Contact: sb@gmail.com</h4>
        </div>
    )
}

export default User;