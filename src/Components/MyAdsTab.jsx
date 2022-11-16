import React, { useState, useEffect } from "react";
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

function MyAdsTab() {
    const [adsList, setAdsList] = useState([]);

    async function handleFetch() {
        const response = await fetch("http://localhost:3001/api/my-items", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ hello: "world" }),
        });

        const data = await response.json();
        let list = data["result"];
        // if (data["status "] === "oK") setAdsList(data["result"]);
        setAdsList(list);
    }

    console.log(adsList);

    useEffect(() => {
        handleFetch();
    }, []);

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
                                Category
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Price
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adsList.map((element, idx) => (
                            <StyledTableRow key={idx}>
                                <TableCell>{idx + 1}</TableCell>
                                <TableCell>{element["name"]}</TableCell>
                                <TableCell align="right">
                                    {element["category"]}
                                </TableCell>

                                <TableCell align="right">
                                    {element["price"]}
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default MyAdsTab;
