// theme.ts

import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const theme = {
  primary: '#023047', // Dark blue
  secondary: '#C89E4F', // Golden color
  background: '#EAEAEA', // Light gray
  lightBackground: '#F9F9F9', // Very light gray
  white: '#FFFFFF', // White
  text: '#4D4D4D', // Dark gray for text
  cardColor: '#E6F6FE', // Very light blue
  projectDurationGray:'#505572',
  black:"#292D32",
 buttonGraytext:'#707070',
  buttonGrayborder:'#BFBFBF',
   buttonGraybg:'#F1F1F1',
   borderred:'#FF0000'

   
};


export const riskColors: { [key: string]: string } = {
  "No Risk": "bg-green-100 text-green-700",
  "Medium Risk": "bg-yellow-100 text-yellow-700",
  "High Risk": "bg-red-100 text-red-700",
};

export const StageColors: { [key: string]: string } = {
  "plaining": "bg-orange-100 text-orange-700",
  "excution": "bg-green-100 text-green-700",
  "closer": "bg-gray-100 text-gray-700",
};

export const StyledTableCell = styled(TableCell)(({  }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F1F1F1', // أزرق غامق (Tailwind: blue-900)
    color: '#000000',           // أبيض
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#1F2937', // رمادي داكن (Tailwind: gray-800)
  },
}));

// تعديل ألوان صفوف الجدول
export const StyledTableRow = styled(TableRow)(({  }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FFFFFF', // رمادي فاتح (Tailwind: gray-100)
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#FFFFFF', // أبيض للصفوف الزوجية
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


// Helper to get chip color
