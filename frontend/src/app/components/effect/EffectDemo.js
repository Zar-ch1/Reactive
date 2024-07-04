import {useEffect, useState} from "react";

export default function EffectDemo()
{
    const [counter, setCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);
    useEffect(()=> {
        console.log("useEffect with Empty dependencies");
    }, []);

    useEffect(()=> {
        console.log("Universal useEffect with no dependencies");
    });

    useEffect(()=> {
        console.log("Second Counter Changed with secondCounter dependencies");
    }, [secondCounter]);


    const btnIncHandler = ()=>{
        setCounter(counter + 1);
    }

    const btnSecondIncHandler = ()=>{
        setSecondCounter(secondCounter + 1);
    }
    console.log("Rendering");
    return(<div>
        Effect &nbsp; Counter {counter}
        <button type='button' onClick={btnIncHandler}>Inc</button>
        <div>
            Effect Second Counter {secondCounter}
            <button type='button' onClick={btnSecondIncHandler}>Second Inc</button>
        </div>
    </div>)
}