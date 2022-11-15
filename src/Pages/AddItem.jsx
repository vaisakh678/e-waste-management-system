import React, { useState } from "react";
import { Stack } from "@mui/system";
import {
    TextField,
    Button,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
} from "@mui/material";

function AddItem() {
    const [category, setCategory] = useState("");
    return (
        <div className=" w-5/6 h-full">
            <div className="p-4 px-8 border-b border-slate-300">Add Item</div>
            <Stack className="p-4" sx={{ width: 250 }} spacing={2}>
                <TextField
                    size="small"
                    id="standard-basic"
                    label="Item name"
                    variant="standard"
                />

                <FormControl fullWidth size="small">
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

                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Qty"
                    variant="standard"
                />
                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Price"
                    variant="standard"
                />
                <Button className="w-20" variant="contained" small>
                    Add
                </Button>
            </Stack>
        </div>
    );
}

export default AddItem;
