import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function BuyItemList({ name, price, qty, itemId }) {
    const [toggle, setToggle] = useState(false);
    const [purpose, setPurpose] = useState("");

    async function handlePurchase(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/api/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ itemId, purpose: purpose }),
        });

        const data = await response.json();
        let list = data["result"];
        if (data["status "] === "oK") console.log(data);

        setToggle(false);
        console.log({ itemId });
        console.log("btn clicked");
    }
    return (
        <div>
            <div className="item p-4 bg-slate-300  flex">
                <div className="image h-40 w-40 bg-slate-600"></div>
                <div className="ml-4 details h-40 w-40 bg-slate-600fuck">
                    <div className="name mb-1">{name}</div>
                    <div className="cost mb-1">${price}</div>
                    <div className="qty mb-1">Qty: {qty}</div>
                </div>
                <div className="w-4/5 flex">
                    <div className="h-full w-full"></div>
                    <div className="flex flex-col-reverse">
                        {!toggle ? (
                            <Button
                                variant="contained"
                                onClick={() => setToggle(true)}
                            >
                                Buy
                            </Button>
                        ) : null}
                    </div>
                </div>
            </div>
            {toggle ? (
                <form
                    onSubmit={handlePurchase}
                    className="buy-item bg-slate-400 p-4 flex"
                >
                    <div className="content flex-grow">
                        <TextField
                            size="small"
                            id="standard-basic"
                            sx={{ width: 500 }}
                            label="Purpose"
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                        />
                    </div>
                    <Button type="submit" variant="contained">
                        Buy
                    </Button>
                </form>
            ) : null}
        </div>
    );
}

export default BuyItemList;
