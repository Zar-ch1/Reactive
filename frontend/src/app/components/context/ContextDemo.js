import {ThemeContext} from "./ThemeContext";
import {useContext, useState} from "react";


function Parent()
{
    return (<div>
        Parent
        <Child></Child>
    </div>);
}
function Child()
{
    return(<div>
        Child
        <Child2></Child2>
    </div>);
}
function Child2()
{
    const theme = useContext(ThemeContext);
    return(<div style={theme}>
        Child 2

    </div>);
}
export default function ContextDemo()
{
    console.log("Render");
    const [color, setColor] = useState("red");
    const updateColor = (color)=> {
        setColor(color);
    }
    return (<div>
        Context Demo
        &nbsp;
        <button type={"button"} onClick={()=>updateColor("yellow")}>Yellow</button>
        &nbsp;
        <button type={"button"} onClick={()=>updateColor("green")}>Green</button>
        <ThemeContext.Provider value={{color: color}}>
            <Parent></Parent>
        </ThemeContext.Provider>

    </div>);
}