import {useState} from "react";
import Greeting from "@/app/components/Greeting";

export default function Counter()
{
    /*let counter = 0;
    const incCounter = ()=>{
        console.log('Counter ',counter);
        counter++;
    };*/
    const [counter, setCounter] = useState(0);
    const [another, setAnother] = useState(new Date());
    const incCounter=()=>{
        console.log("Counter ", counter);
        setCounter(counter+1);
    }
    //change another
    const changeDate =()=>{
        console.log("Another ", another);
        setAnother(new Date());
    }
    //change properties will change the UI?
    const changeLocalDate =()=>{
        localMessage  = new Date().toString();
    }
    console.log("Render");
    let localMessage =  new Date().toString();
    return(
        <div>
            Counter is {counter}
            &nbsp;
            <button type={"button"} onClick={incCounter}>+</button>
            &nbsp;
            <button type={"button"} onClick={changeDate}>Update date</button>
            {/*&nbsp;&nbsp;*/}
            {/*<Greeting name={localMessage}/>*/}
            &nbsp;
            <button type={"button"} onClick={changeLocalDate}>Update Local Date</button>
            &nbsp;
            {/*<Greeting name={localMessage}/>*/}
        </div>);
}
