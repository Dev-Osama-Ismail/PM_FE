import  { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
  mode: "create" | "view" | "edit";
  value?: string;
  onChange?: (date: dayjs.Dayjs | null) => void;
  disabled?: boolean;
};

export default function ReferenceDateUsingValue({ mode, value, onChange }: Props) {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(value ? dayjs(value) : null);

  useEffect(() => {
    if (value) {
      setSelectedDate(dayjs(value));
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  const handleChange = (newDate: dayjs.Dayjs | null) => {
    if ((mode === "edit" || mode === "create")) {
      setSelectedDate(newDate);
      onChange?.(newDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          value={selectedDate}
          onChange={handleChange}
          views={['year', 'month', 'day']}
          className='w-full'
          disabled={mode === "view"}
          sx={{
            '& .MuiInputBase-root': {
              width: '100%',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              backgroundColor: '#ffffff',
              color: '#4b5563',
              '&:focus': {
                outline: 'none',
                borderColor: '#3b82f6',
                boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
