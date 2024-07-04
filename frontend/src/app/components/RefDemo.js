import {useRef, useState} from 'react';
let counter = 0;
export default function RefDemo()
{
    let ref = useRef(0);
    const [state, setState] = useState(new Date());

    const btnIncHandler = ()=> {
        ref.current++;
        console.log('Counter', ref.current);
    }
    const btnRerenderHandler = () => {
        setState(new Date());
    }
    console.log("Render");
    return(<div>
        Counter {ref.current}
        &nbsp;
        <button type='button' onClick={btnIncHandler}>Inc</button>
        &nbsp;
        <button type='button' onClick={btnRerenderHandler}>Change</button>
    </div>)
}