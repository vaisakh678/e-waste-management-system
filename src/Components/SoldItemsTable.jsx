import React, { useState } from "react";
import { styled, Box } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function SoldItemsTable() {
    const [soldItemsList, setSoldItemsList] = useState([]);

    async function fetchSoldItems() {
        const response = await fetch(
            "http://localhost:3001/api/fetch-sold-items",
            {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    "x-access-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({ status: "ok" }),
            }
        );

        const data = await response.json();
        setSoldItemsList(data["result"]);
        console.log("fetchSoldItems called");
        console.log(data);
    }

    useState(() => {
        fetchSoldItems();
    }, []);

    return (
        <Box sx={{ height: "92%" }} className="trade-content w-full p-8">
            <TableContainer
                sx={{ width: "1050px", height: "100%" }}
                component={Paper}
            >
                <Table
                    sx={{ minWidth: 650 }}
                    stickyHeader
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead sx={{ backgroundColor: "black" }}>
                        <TableRow>
                            <StyledTableCell>Sl.</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">
                                Buyer
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Contact No.
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Purpose
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Status
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {soldItemsList.map((e, idx) => (
                            <StyledTableRow>
                                <TableCell>{idx + 1}</TableCell>
                                <TableCell>{e.ItemName}</TableCell>
                                <TableCell align="right">{e.buyer}</TableCell>
                                <TableCell align="right">
                                    +91 9447985590
                                </TableCell>
                                <TableCell align="right">{e.purpose}</TableCell>
                                <TableCell align="right">lost</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default SoldItemsTable;
