import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { StyledTableCell, StyledTableRow } from '../../../theme/color';
import { PhaseType } from '../../../Types';
import { Chip } from '@mui/material';
import { rows } from '../../../Data/PhaseTable';
import Comment from '../../../assets/Comment.png'
import progress from '../../../assets/Progress.png'
import project from '../../../assets/Task Excalation.png'



export const getStatusChip = (status: PhaseType['Status']) => {
    switch (status) {
      case 'Completed':
        return <Chip label="Completed" color="success" size="small" />;
      case 'Overdue':
        return <Chip label="Overdue" color="error" size="small" />;
      case 'Pending':
        return <Chip label="Pending" color="default" size="small" />;
    }
  };






export default function PhaseTable() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [, setMenuRow] = React.useState<PhaseType | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: PhaseType) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Phase</StyledTableCell>
            <StyledTableCell>Task Description</StyledTableCell>
            <StyledTableCell>Start Date</StyledTableCell>
            <StyledTableCell>End Date</StyledTableCell>
            <StyledTableCell>Weight</StyledTableCell>
            <StyledTableCell>Duration</StyledTableCell>
            <StyledTableCell>Percentage</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell>{row.Phase}</StyledTableCell>
              <StyledTableCell>{row.Task_Description}</StyledTableCell>
              <StyledTableCell>{row.Start_date}</StyledTableCell>
              <StyledTableCell>{row.End_date}</StyledTableCell>
              <StyledTableCell>{row.Weight}</StyledTableCell>
              <StyledTableCell>{row.duration}</StyledTableCell>
              <StyledTableCell>{row.Percentage}</StyledTableCell>
              <StyledTableCell>{getStatusChip(row.Status)}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={(e) => handleMenuOpen(e, row)}>
                  <MoreVertIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
        <img className="mr-6 w-6 h-6 " src={project}></img>
        Task Escalation</MenuItem>
        <MenuItem onClick={handleMenuClose}> <img className="mr-6 w-6 h-6 " src={progress}></img>Project Progress</MenuItem>
        <MenuItem onClick={handleMenuClose}> <img className="mr-6 w-6 h-6 " src={Comment}></img>Add Comment</MenuItem>
      </Menu>
    </TableContainer>
  );
}
