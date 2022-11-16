import React from "react";

function SideListButton({ icon, label, menuSelected, setMenuSelected }) {
    return (
        <div
            onClick={() => setMenuSelected(label.toLowerCase())}
            className={
                menuSelected.toLowerCase() === label.toLowerCase()
                    ? "bg-slate-200 border-l-4 cursor-pointer border-blue-400 mb-2  py-2 flex items-center transition-all"
                    : "border-white border-l-4 cursor-pointer mb-2 py-2 flex items-center hover:bg-slate-100 hover:border-blue-400"
            }
        >
            <div className="px-2 icon">{icon}</div>
            <div className="pl-2fuck label">{label}</div>
        </div>
    );
}

export default SideListButton;
