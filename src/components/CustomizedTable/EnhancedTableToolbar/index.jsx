
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { alpha } from '@mui/material/styles';
import { TextField } from '@mui/material';

function EnhancedTableToolbar(props) {
  const { numSelected, handleDelete } = props;
  const [filter, setFilter] = React.useState('Mã số sinh viên');
  
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
          <TextField
            required
            id="lecturerId"
            label={filter}
          />
          <Box sx={{ minWidth: 200, maxWidth: 200, marginRight: 1, marginLeft: 1}}>
            <FormControl fullWidth>
              <InputLabel id="major-label">Lọc</InputLabel>
              <Select
                align="left"
                labelId="major-label"
                id="major-select"
                value={filter}
                label="Major"
                onChange={handleChangeFilter}
              >
                <MenuItem value={'Mã số sinh viên'}>Mã số sinh viên</MenuItem>
                <MenuItem value={'Họ và tên'}>Họ và tên</MenuItem>
                <MenuItem value={'Lớp'}>Lớp</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      )}
    </Toolbar>
  );
}

export default EnhancedTableToolbar;