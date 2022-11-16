import React, { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SideListButton from "../Components/SideListButton";
import ProfileSubMenu from "../Components/ProfileSubMenu";

function Profile() {
    const [menuSelected, setMenuSelected] = useState("profile");

    return (
        <div className=" w-5/6 h-full">
            <div className="title-height px-8 flex items-center border-b border-slate-300">
                Profile
            </div>
            <div className="content flex justify-center items-center w-full content-height bg-slate-500fuck">
                <div className="preferences bg-slate-700fuck w-3/4 h-3/4 flex transition-all">
                    <div className="menu-selector p-4 bg-slate-400fuck h-full w-1/4">
                        <SideListButton
                            icon={<ManageAccountsIcon />}
                            label="Profile"
                            menuSelected={menuSelected}
                            setMenuSelected={setMenuSelected}
                        />
                        <SideListButton
                            icon={<HomeIcon />}
                            label="Address"
                            menuSelected={menuSelected}
                            setMenuSelected={setMenuSelected}
                        />
                        <SideListButton
                            icon={<SettingsIcon />}
                            label="General"
                            menuSelected={menuSelected}
                            setMenuSelected={setMenuSelected}
                        />
                    </div>
                    <div className="menu w-full">
                        {menuSelected === "profile" ? <ProfileSubMenu /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
