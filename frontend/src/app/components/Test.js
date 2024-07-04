/*
export default function Test(props)

{
    return (<div>
        Hello {props.name}
    </div>)
}
*/
//Properties can change the UI and Rendering
//But props is constant. So it's difficult to change;

import {useState} from "react";

export default function Test()
{

    const [data , setData] = useState({
            name : 'TK',
            age: 39,
            address: '127.0.0.1',
    });
    const clickHandler = ()=> {
        console.log("Click Handler");
        setData({...data, name: 'wai wai'});
    }
    console.log('Rendering');
    return(<div>
        refEquality {data.name}
        &nbsp;
        {data.age}
        &nbsp;
        {data.address}
        &nbsp;
        <button type={"button"} onClick={clickHandler}>Change</button>
        &nbsp;

    </div>);
}