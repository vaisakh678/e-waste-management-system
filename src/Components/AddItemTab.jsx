import React, { useState } from "react";
import {
    Stack,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from "@mui/material";

function AddItemTab() {
    function fileChangeHandle(e) {
        console.log(e.target.files[0]);
        img = e.target.files[0];
    }

    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    var img;

    async function handleAddItem(e) {
        let formData = new FormData();
        formData.append("itemName", itemName);
        formData.append("category", category);
        formData.append("qty", qty);
        formData.append("price", price);

        formData.append("images", img);

        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/add-item", {
            method: "POST",
            headers: {
                // "Content-Type": "form-data/multipart",
                "x-access-token": localStorage.getItem("token"),
            },
            body: formData,
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <form action="">
            <Stack className="p-4" sx={{ width: 250 }} spacing={2}>
                <TextField
                    size="small"
                    id="standard-basic"
                    label="Item name"
                    variant="standard"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />

                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
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
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                />
                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Price"
                    variant="standard"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input type="file" onChange={fileChangeHandle} />

                <Button
                    className="w-20"
                    variant="contained"
                    size="small"
                    type="submit"
                    onClick={handleAddItem}
                >
                    Add
                </Button>
            </Stack>
        </form>
    );
}

export default AddItemTab;
