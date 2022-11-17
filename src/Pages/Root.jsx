import React, { useEffect, useState } from "react";
import SideMenu from "../Components/SideMenu";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Trade from "./Trade";
import BuyItem from "./BuyItem";
import AddItem from "./AddItem";
import About from "./About";

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
            {selected === "trade" ? <Trade /> : null}
            {selected === "buy item" ? <BuyItem /> : null}
            {selected === "add item" ? <AddItem /> : null}
            {selected === "about" ? <About /> : null}
        </div>
    );
}

export default Root;
