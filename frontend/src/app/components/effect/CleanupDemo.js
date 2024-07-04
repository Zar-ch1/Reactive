import {useEffect, useState} from "react";

export default function CleanupDemo()
{
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log("Plugin initialized");
        return ()=>{ console.log("Plugin Destroyed");};
    }, []);

    const btnIncHandler = ()=>{
        setCounter(counter + 1);
    }
    return(<div>
        cleanup demo
        Effect &nbsp; Counter {counter}
        <button type='button' onClick={btnIncHandler}>Inc</button>
    </div>)
}