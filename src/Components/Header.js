import React from "react";
import logo from '../assets/images/LocationG.png'

function Header()
{
    return (
        <div className="container-fluid bg-light shadow">
            <div className="d-flex p-2 ps-5">
                <img  src={logo} alt="logo" width={25} height={40}/>
                <h3 className="ps-2">LIESE</h3>
            </div>
        </div>
    );
}

export default Header;