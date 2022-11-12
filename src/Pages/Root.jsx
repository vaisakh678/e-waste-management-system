import React, { useEffect, useState } from "react";
import SideMenu from "../Components/SideMenu";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Orders from "./Orders";
import Rewards from "./Rewards";
import AddItem from "./AddItem";

function Root() {
    useEffect(() => {
        if (!localStorage.getItem("token")) window.location = "/login";
    }, []);

    const [selected, setSelected] = useState("dashboard");
    console.log(selected);

    return (
        <div className="h-full w-full flex">
            <SideMenu selected={selected} setSelected={setSelected} />
            {selected === "dashboard" ? <Dashboard /> : null}
            {selected === "profile" ? <Profile /> : null}
            {selected === "orders" ? <Orders /> : null}
            {selected === "rewards" ? <Rewards /> : null}
            {selected === "add item" ? <AddItem /> : null}
        </div>
    );
}

export default Root;
