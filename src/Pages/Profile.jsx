import React from "react";
import { Stack } from "@mui/system";
import {
    TextField,
    Button,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
} from "@mui/material";

function Profile() {
    return (
        <div className=" w-5/6 h-full">
            <div className="p-4 px-8 border-b border-slate-300">Profile</div>
            <Stack className="p-4" sx={{ width: 250 }} spacing={2}>
                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="First name"
                    variant="standard"
                />

                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Last name"
                    variant="standard"
                />

                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Email"
                    variant="standard"
                />

                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Mobile"
                    variant="standard"
                />

                <Button className="w-20" variant="contained" small>
                    Add
                </Button>
            </Stack>
        </div>
    );
}

export default Profile;
