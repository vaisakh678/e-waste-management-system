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

function OrderTable() {
    const [orderList, setOrderList] = useState([]);

    async function fetchBroughtItems() {
        const response = await fetch(
            "http://localhost:3001/api/fetch-brought-items",
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
        setOrderList(data["result"]);
        console.log(data);
    }

    useState(() => {
        fetchBroughtItems();
    }, []);

    const [Trade, setTrade] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26,
    ]);

    return (
        <Box sx={{ height: "92%" }} className="trade-content w-full p-8">
            <TableContainer
                sx={{ width: "1000px", height: "100%" }}
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
                                Suplier
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Contact No.
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Date
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList.map((e, idx) => (
                            <StyledTableRow key={idx}>
                                <TableCell>{idx + 1}</TableCell>
                                <TableCell>{e.itemName}</TableCell>
                                <TableCell align="right">
                                    {e.supplier}
                                </TableCell>
                                <TableCell align="right">7907214132</TableCell>
                                <TableCell align="right">
                                    {/* {dateFormat(e.date, "dddd, mmmm dS, yyyy")} */}
                                    {e.date}
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default OrderTable;
