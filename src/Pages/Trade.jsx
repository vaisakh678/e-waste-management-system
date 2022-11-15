import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import OrderTable from "../Components/OrderTable";
import SoldItemsTable from "../Components/SoldItemsTable";

function Trade() {
    const [tab, setTab] = useState(0);
    return (
        <div className=" w-5/6 h-full">
            <div className="title-height px-8 flex items-center border-b border-slate-300">
                Trade
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
                                label="Buy"
                                onClick={() => setTab(0)}
                            />
                            <Tab
                                iconPosition="end"
                                label="Sell"
                                onClick={() => setTab(1)}
                            />
                        </Tabs>
                    </Box>
                    {tab === 0 ? <OrderTable /> : null}
                    {tab === 1 ? <SoldItemsTable /> : null}
                </div>
            </div>
        </div>
    );
}

export default Trade;
