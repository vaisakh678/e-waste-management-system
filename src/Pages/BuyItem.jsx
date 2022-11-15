import React, { useState } from "react";
import {
    TextField,
    Button,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
} from "@mui/material";

function BuyItem() {
    const [category, setCategory] = useState("");

    return (
        <div className=" w-5/6 h-full">
            <div className="title-height px-8 flex items-center border-b border-slate-300">
                Buy Item
            </div>
            <div className="w-full content-height bg-slate-400">
                <form className="menu p-4">
                    <TextField
                        size="small"
                        id="standard-basic"
                        label="Search"
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
                </form>
            </div>
        </div>
    );
}

export default BuyItem;
