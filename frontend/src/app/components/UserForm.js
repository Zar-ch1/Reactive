import {useState} from "react";

export default function UserForm()
{
    /*
     const [firstName, setFirstName] = useState('');
     const [lastName , setLastName] = useState('');
    */
    const [user, setUser] = useState({
        firstName : '',
        lastName : ''
    });
    /*
     //handlers
     const firstNameOnChangeHandler = (e) => {
         console.log(e.target.value);
         setFirstName(e.target.value);
     }

     const lastNameOnChangeHandler = (e) => {
         console.log(e.target.value);
         setLastName(e.target.value);
     }
    */
    //onChange Handler for obj
    const onChangeHandler = (e)=> {
        console.log(e.target.name + " " + e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    console.log('Render');
    return(<div>
        <h2>User Login Form</h2>
        &nbsp;
        <div>First Name <input type={"text"} value={user.firstName} name={"firstName"} onChange={onChangeHandler}/></div>
        &nbsp;
        <div>Last Name <input type={"text"} value={user.lastName} name={"lastName"} onChange={onChangeHandler}/></div>
        &nbsp;
        <div>Full Name {user.firstName +  " " + user.lastName}</div>
    </div>)
}