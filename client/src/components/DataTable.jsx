import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(name, instansi, nid, rekening, saldo) {
  return { name, instansi, nid, rekening, saldo };
}

const rows = [
  createData(
    "Gladyne Berlian Alif Zago",
    "bina insani",
    "32435",
    "34353",
    20000
  ),
  createData(
    "Abdilah Ali Kurniawan",
    "bina insani",
    "0920001",
    "3434",
    1000000
  ),
];

export default function DataTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Instansi</StyledTableCell>
            <StyledTableCell align="right">NID</StyledTableCell>
            <StyledTableCell align="right">Saldo</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.nama}
              </StyledTableCell>
              <StyledTableCell align="right">{row.pesantren}</StyledTableCell>
              <StyledTableCell align="right">{row.nipd}</StyledTableCell>
              <StyledTableCell align="right">{row.saldo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
