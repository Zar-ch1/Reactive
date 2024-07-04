import {useRef} from "react";

export default function FocusInput()
{
    const inputRef = useRef(null);//{ current : null }
    const handleClick = ()=>{
        inputRef.current.focus();
        console.log('DOM Ref ', inputRef.current);
    }
    console.log('DOM Ref ', inputRef.current);
    return(<div>
        <h2>Focus with useRef (touching the native DOM)</h2>
        <input type={"text"} ref={inputRef}/>
        &nbsp;
        <button type={"button"} onClick={handleClick}>Focus the Input</button>
    </div>)
}