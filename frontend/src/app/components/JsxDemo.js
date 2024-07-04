export  default function JsxDemo()
{
    let person = {
        name : 'TK',
        age : 39
    }
    let name = "Someone";

    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    return(
        <div>
        <div>One</div>
        <div>Two</div>
            <ol>
                <li>One</li>
                <li>Two</li>
            </ol>
            Hello {name}
            {person.name}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="avatar"
                src={avatar}
                alt={name}
            />
            <ul style={{
                backgroundColor: 'black',
                color: 'pink'
            }}>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}