import {useState} from "react";

export default function RefEquality()
{
    const [data, setData] = useState({message:"Hello"});
    const changeHandler = () => {
        //data.message = "Change";
        setData({
            message: "Hello World"
        });
    };
    console.log('Rendering RefEquality');
    return(<div>
        Message: {data.message}
        &nbsp;
        <button type={"button"} onClick={changeHandler}>Change</button>
    </div>);
}