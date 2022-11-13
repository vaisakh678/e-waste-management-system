import React from "react";
import error_404 from "../assets/404.png";

function Error404() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="object-covered w-1/2">
                <img src={error_404} alt="eror 404" />
            </div>
        </div>
    );
}

export default Error404;
