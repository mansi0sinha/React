import React from 'react'
const Navbar=(props)=>{
return (
    <div>
        <h1>{props.logoText}</h1>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact us</li>
</ul>
    </div>
)
}
export default Navbar;