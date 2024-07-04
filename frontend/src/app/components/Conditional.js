function User()
{
    return(<div>
        <h1>User</h1>
    </div>);
}
function Admin()
{
    return(<div>
        <h1>Admin</h1>
    </div>);
}
function UserProfile({isAdmin})
{
    return(
        <div>
            {!isAdmin && null}
            {isAdmin && "User Profile"}
        </div>);
}
export default function Conditional({isAdmin, isUser})
{
    /*
    if(isAdmin){
        return(<div><Admin/></div>);
    }
    else{
        return(<div><User/></div>);
    }
    */
    return(
        <div>
            <UserProfile isAdmin={isAdmin} />
            {/*{isAdmin && <Admin/>}*/}
            {/*{!isAdmin && <User/>}*/}
            {/* !Admin is not false, he just said must NOT Admin so that is true
             and ture && <User/> is truly. So truly return the last element*/}
            {isAdmin? <Admin/>: <User/>}
        </div>);
}