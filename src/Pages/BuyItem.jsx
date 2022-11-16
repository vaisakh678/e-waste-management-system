import React, { useState } from "react";
import {
    TextField,
    Button,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
    Stack,
} from "@mui/material";
import BuyItemList from "../Components/BuyItemList";

function BuyItem() {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);

    async function handleSearch(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                itemName,
                category,
            }),
        });

        const data = await response.json();
        setItems(data["result"]);
    }

    console.log(items);

    return (
        <div className=" w-5/6 h-full">
            <div className="title-height px-8 flex items-center border-b border-slate-300">
                Buy Item
            </div>
            <div className="w-full content-height bg-slate-400fuck">
                <form className="menu p-4" onSubmit={handleSearch}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            size="small"
                            id="standard-basic"
                            label="Search"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />

                        <FormControl size="small" className="w-40">
                            <InputLabel
                                // variant="standard"
                                id="demo-simple-select-label"
                            >
                                Category
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value={"phone"}>Phone</MenuItem>
                                <MenuItem value={"laptop"}>Laptop</MenuItem>
                                <MenuItem value={"watch"}>Watch</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            className="w-20"
                            variant="contained"
                            // size="small"
                            type="submit"
                        >
                            Search
                        </Button>
                    </Stack>
                </form>
                <div className="search-items w-full overflow-y-auto content-height bg-slate-200fuck p-4">
                    {items.map((element, idx) => (
                        <BuyItemList
                            key={idx}
                            name={element["name"]}
                            qty={element["qty"]}
                            price={element["price"]}
                            itemId={element["_id"]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuyItem;
