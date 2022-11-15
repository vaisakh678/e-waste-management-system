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
                        {Trade.map((e) => (
                            <StyledTableRow>
                                <TableCell>{e}</TableCell>
                                <TableCell>Apple</TableCell>
                                <TableCell align="right">Messi</TableCell>
                                <TableCell align="right">7907214132</TableCell>
                                <TableCell align="right">11/22/2022</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default OrderTable;
