export function AnotherChild() {
    return(<div>Another Child</div>);
}

export default function HelloWorld()
{
    return(<div>
        <h1>Hello World Components!</h1>
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
        <AnotherChild/>
    </div>);
}