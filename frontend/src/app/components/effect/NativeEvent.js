import {useEffect} from "react";

export default function NativeEvent()
{
    useEffect(() => {
        function handleClick(e){
            console.log(e);
        }
        document.addEventListener("click", handleClick);
        return ()=> document.addEventListener("click", handleClick);
        //event can cause the memory leak that why we used cleanup func.
    }, []);
    return(<div>
        Native Event
    </div>);
}