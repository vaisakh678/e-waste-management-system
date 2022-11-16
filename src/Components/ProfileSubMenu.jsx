import React from "react";
import { Stack } from "@mui/system";
import { TextField, Button } from "@mui/material";

function ProfileSubMenu() {
    return (
        <div className="p-4 bg-slate-400fuck w-full h-full">
            <Stack sx={{ width: 450 }} spacing={2}>
                <Stack direction="row" spacing={2}>
                    <TextField
                        size="small"
                        id="standard-basic"
                        label="First name"
                        variant="standard"
                        sx={{ width: 180 }}
                    />

                    <TextField
                        size="small"
                        id="standard-basic"
                        label="Last name"
                        variant="standard"
                        sx={{ width: 180 }}
                    />
                </Stack>

                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Email"
                    variant="standard"
                    sx={{ width: 180 }}
                />

                <TextField
                    size="small"
                    id="standard-basic"
                    type="number"
                    label="Mobile"
                    variant="standard"
                    sx={{ width: 180 }}
                />

                <Button className="w-20" variant="contained" small>
                    Add
                </Button>
            </Stack>
        </div>
    );
}

export default ProfileSubMenu;
