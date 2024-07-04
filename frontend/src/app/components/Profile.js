export default function Profile({profile})
{                           //obj destructuring
    //let img = "https://randomuser.me/api/portraits/men/63.jpg";
    //console.log(props);
    const style = {borderRadius:15};
    return(
        <div>
            <h3>{profile.name}</h3>
            {/* eslint-disable-next-line @next/next/no-img-element,jsx-a11y/alt-text */}
            <img src={profile.imgUrl} style={style}/>
        </div>)
}