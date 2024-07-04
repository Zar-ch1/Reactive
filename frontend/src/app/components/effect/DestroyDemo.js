import CleanupDemo from "@/app/components/effect/CleanupDemo";
import {useState} from "react";

export default function DestroyDemo()
{
    const [show, setShow] = useState(false);
    const btnToggle = ()=>{
        setShow(!show);
    }
    return(<div>
        Destroy Component &nbsp;
        { show && <CleanupDemo/>}
        <button type={"button"} onClick={btnToggle}>Toggle</button>
    </div>)
}