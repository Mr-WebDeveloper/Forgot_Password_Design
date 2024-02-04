import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer()
{
    return  (
        <div className="bg-success text-light d-flex justify-content-between px-3 pt-2">
            <p><i class="bi bi-geo-alt-fill"></i> Location</p>
            <p><i class="bi bi-c-circle"></i> Copyright2023</p>
            <p>Privacy Policy</p>
        </div>
    );
}

export default Footer;