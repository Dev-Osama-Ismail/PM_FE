import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledTableCell, StyledTableRow } from '../../../theme/color';

type FileRow = {
  folder: string;
  fileName: string;
};

const files: FileRow[] = [
  { folder: "Project A", fileName: "Report.docx" },
  { folder: "Project B", fileName: "Design.pdf" },
  { folder: "Project C", fileName: "Budget.xlsx" },
];

export default function SimpleFileTable() {
  const handleEdit = (file: string) => {
    alert(`Edit: ${file}`);
  };

  const handleDelete = (file: string) => {
    if (window.confirm(`Are you sure you want to delete "${file}"?`)) {
      alert(`Deleted: ${file}`);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="file table">
        <TableHead>
          <TableRow>
          <StyledTableCell sx={{ width: '20%', paddingRight: 1 }}>Folder</StyledTableCell>
<StyledTableCell sx={{ width: '20%', paddingLeft: 1 }}>File Name</StyledTableCell>

            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell>{row.folder}</StyledTableCell>
              <StyledTableCell>{row.fileName}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="flex justify-end items-center gap-2">
                  <IconButton color="primary" size="small" onClick={() => handleEdit(row.fileName)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="error" size="small" onClick={() => handleDelete(row.fileName)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
