import React from "react";
import SideButton from "./SideButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

function SideMenu({ selected, setSelected }) {
    return (
        <div className="h-full w-1/6 bg-slate-100 border-r border-slate-300">
            <div className="top flex flex-col h-full justify-between">
                <div className="">
                    <div className="wrapper p-4">
                        <div className="w-full h-20 bg-slate-400 rounded"></div>
                    </div>
                    <div className="mb-2">
                        <SideButton
                            icon={<DashboardIcon />}
                            label="Dashboard"
                            get={selected}
                            set={setSelected}
                        />
                    </div>

                    <div className="mb-2">
                        <SideButton
                            icon={<PersonIcon />}
                            label="Profile"
                            get={selected}
                            set={setSelected}
                        />
                    </div>

                    <div className="mb-2">
                        <SideButton
                            icon={<ShoppingCartIcon />}
                            label="Orders"
                            get={selected}
                            set={setSelected}
                        />
                    </div>

                    <div className="mb-2">
                        <SideButton
                            icon={<AccountBalanceWalletIcon />}
                            label="Rewards"
                            get={selected}
                            set={setSelected}
                        />
                    </div>

                    <div className="mb-2">
                        <SideButton
                            icon={<AddIcon />}
                            label="Add item"
                            get={selected}
                            set={setSelected}
                        />
                    </div>
                </div>
                <div className="bottom mb-8">
                    <div>
                        <div
                            className="flex items-center border-l-2 text-slate-900 hover:bg-slate-300 cursor-pointer px-4 py-2"
                            onClick={() => {
                                localStorage.removeItem("token");
                                window.location = "/login";
                            }}
                        >
                            <div className="icon">
                                <LogoutIcon />
                            </div>
                            <div className="label pl-4">LogOut</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
