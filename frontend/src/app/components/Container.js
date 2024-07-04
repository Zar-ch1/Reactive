import Greeting from "@/app/components/Greeting";

function AnotherContainer(props){
    console.log("Properties in anotherContainer", props);
    return(<div>
        {props.children[0]}
    </div>)
}


export default function Container(props)
{
    let {message} = props;//obj destructuring
    console.log("Property Children", props.children);
    return(<div>
        Container
        {props.children}
        <Greeting name={message} />
        <AnotherContainer {...props}/>
        {/*give all props with obj destructure*/}
    </div>)
}