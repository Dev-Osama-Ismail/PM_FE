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
const permissionRows = [
  {
    user: 'Ahmad Ahmad',
    groupType: 'Admin',
    group: 'Developers',
    permission: 'Full Access',
  },
  {
    user: 'Lina Saeed',
    groupType: 'Editor',
    group: 'Designers',
    permission: 'Edit Only',
  },
  {
    user: 'Omar Naser',
    groupType: 'Viewer',
    group: 'Marketing',
    permission: 'Read Only',
  },
];

export default function StakeholdersTable() {
  const handleEdit = (row: any) => {
    alert(`Editing permissions for: ${row.user}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="permission table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Group Type</StyledTableCell>
            <StyledTableCell>Group</StyledTableCell>
            <StyledTableCell>Permission</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissionRows.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell>{row.user}</StyledTableCell>
              <StyledTableCell>{row.groupType}</StyledTableCell>
              <StyledTableCell>{row.group}</StyledTableCell>
              <StyledTableCell>{row.permission}</StyledTableCell>
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
