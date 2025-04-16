import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
  createMRTColumnHelper,
} from 'material-react-table';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { useState } from 'react';
import { data, type Person } from './makeData';
import { theme } from '../../../theme/color';

const Tabletheme = createTheme({
  palette: {
    primary: {
      main: theme.primary,
      light: '#ff8a50',
      dark: '#c41c00',
      contrastText: '#fff',
    },
    secondary: {
      main: theme.primary,
      light: '#52c7b8',
      dark: '#00675b',
      contrastText: '#fff',
    },
  },
});

const columnHelper = createMRTColumnHelper<Person>();

const columns = [
  columnHelper.accessor('id', { header: 'ID', size: 40 }),
  columnHelper.accessor('firstName', { header: 'First Name', size: 120 }),
  columnHelper.accessor('lastName', { header: 'Last Name', size: 120 }),
  columnHelper.accessor('company', { header: 'Company', size: 300 }),
  columnHelper.accessor('city', { header: 'City' }),
  columnHelper.accessor('country', { header: 'Country', size: 220 }),
];

const Table = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [exportTarget, setExportTarget] = useState<'all' | 'page' | 'selected' | null>(null);

  const handleExport = (rows: MRT_Row<Person>[], format: 'pdf' | 'excel') => {
    const rowData = rows.map((row) => row.original);
    const tableHeaders = columns.map((c) => c.header);

    if (format === 'pdf') {
      const doc = new jsPDF();
      const tableBody = rowData.map((item) => Object.values(item));
      autoTable(doc, {
        head: [tableHeaders],
        body: tableBody,
      });
      doc.save('exported-data.pdf');
    } else if (format === 'excel') {
      const worksheet = XLSX.utils.json_to_sheet(rowData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, 'exported-data.xlsx');
    }

    handleCloseMenu();
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, target: 'all' | 'page' | 'selected') => {
    setAnchorEl(event.currentTarget);
    setExportTarget(target);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setExportTarget(null);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    layoutMode:'grid',
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          padding: 1,
        }}
      >
        <Button
          onClick={(e) => handleOpenMenu(e, 'all')}
          startIcon={<FileDownloadIcon />}
          disabled={table.getPrePaginationRowModel().rows.length === 0}
        >
          Export All (Filtered)
        </Button>
        <Button
          onClick={(e) => handleOpenMenu(e, 'page')}
          startIcon={<FileDownloadIcon />}
          disabled={table.getRowModel().rows.length === 0}
        >
          Export Current Page
        </Button>
        <Button
          onClick={(e) => handleOpenMenu(e, 'selected')}
          startIcon={<FileDownloadIcon />}
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
        >
          Export Selected
        </Button>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem
            onClick={() => {
              const rows =
                exportTarget === 'all'
                  ? table.getPrePaginationRowModel().rows
                  : exportTarget === 'page'
                  ? table.getRowModel().rows
                  : table.getSelectedRowModel().rows;
              handleExport(rows, 'pdf');
            }}
          >
            Export as PDF
          </MenuItem>
          <MenuItem
            onClick={() => {
              const rows =
                exportTarget === 'all'
                  ? table.getPrePaginationRowModel().rows
                  : exportTarget === 'page'
                  ? table.getRowModel().rows
                  : table.getSelectedRowModel().rows;
              handleExport(rows, 'excel');
            }}
          >
            Export as Excel (.xlsx)
          </MenuItem>
        </Menu>
      </Box>
    ),
  });

  return (
    <ThemeProvider theme={Tabletheme} >
      <MaterialReactTable table={table} />
    </ThemeProvider>
  );
};

export default Table;
