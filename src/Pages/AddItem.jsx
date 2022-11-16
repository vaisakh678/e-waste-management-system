import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Tabs, Tab, Box } from "@mui/material";
import AddItemTab from "../Components/AddItemTab";
import MyAdsTab from "../Components/MyAdsTab";

function AddItem() {
    const [tab, setTab] = useState(0);

    return (
        <div className=" w-5/6 h-full">
            <div className="title-height px-8 flex items-center border-b border-slate-300">
                Add Item
            </div>

            <div className="tade-wrapper w-full content-height p-4">
                <div className="content-wrapper h-full border p-2 border-slate-300  rounded-l">
                    <Box sx={{ height: "8%" }}>
                        <Tabs
                            value={tab}
                            aria-label="icon position tabs example"
                            className="border-slate-300 border-b"
                        >
                            <Tab
                                iconPosition="start"
                                label="My Ads"
                                onClick={() => setTab(0)}
                            />
                            <Tab
                                iconPosition="end"
                                label="Add Item"
                                onClick={() => setTab(1)}
                            />
                        </Tabs>
                    </Box>
                    {tab === 0 ? <MyAdsTab /> : null}
                    {tab === 1 ? <AddItemTab /> : null}
                </div>
            </div>
        </div>
    );
}

export default AddItem;
