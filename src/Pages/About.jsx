import React, { useState } from "react";

function About() {
    const [tab, setTab] = useState(0);

    return (
        <div className=" w-5/6 h-full">
            <div className="title-height px-8 flex items-center border-b border-slate-300">
                Add Item
            </div>

            <div className="tade-wrapper w-full content-height p-4 bg-slate-600fk flex justify-center items-center">
                <div className="about-content w-7/12 h-3/4 bg-slate-200 rounded">
                    <div className="title p-4 bg-slate-400">About</div>
                </div>
            </div>
        </div>
    );
}

export default About;
