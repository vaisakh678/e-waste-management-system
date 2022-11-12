import React from "react";

function SideButton({ icon, label, set, get }) {
    return (
        <div
            onClick={() => set(label.toLowerCase())}
            className={
                label.toLowerCase() === get.toLowerCase()
                    ? "flex items-center border-l-2 border-blue-700 text-blue-700 hover:bg-slate-300 cursor-pointer px-4 py-2"
                    : "flex items-center border-l-2 text-slate-900 hover:bg-slate-300 cursor-pointer px-4 py-2"
            }
        >
            <div className="icon">{icon}</div>
            <div className="label pl-4">{label}</div>
        </div>
    );
}

export default SideButton;
