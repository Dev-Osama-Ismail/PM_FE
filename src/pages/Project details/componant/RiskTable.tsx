import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { StyledTableCell, StyledTableRow } from '../../../theme/color';

// بيانات تجريبية
const riskRows = [
  {
    impact: 'High',
    probability: 'Medium',
    description: 'Server downtime due to overload',
    date: '2025-04-10',
  },
  {
    impact: 'Medium',
    probability: 'Low',
    description: 'Delay in delivery from vendor',
    date: '2025-04-12',
  },
  {
    impact: 'Low',
    probability: 'High',
    description: 'Unexpected UI bugs',
    date: '2025-04-13',
  },
];

export default function RiskTable() {
  const handleEdit = (row: any) => {
    alert(`Editing: ${row.description}`);
    // ممكن تفتحي مودال أو تعبّي فورم هون
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="risk table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Risk Impact</StyledTableCell>
            <StyledTableCell>Risk Probability</StyledTableCell>
            <StyledTableCell>Risk Description</StyledTableCell>
            <StyledTableCell>Risk Date</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {riskRows.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell>{row.impact}</StyledTableCell>
              <StyledTableCell>{row.probability}</StyledTableCell>
              <StyledTableCell>{row.description}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleEdit(row)} color="primary">
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
