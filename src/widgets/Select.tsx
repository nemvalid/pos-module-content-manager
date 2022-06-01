import { FormControl, InputLabel, FormHelperText, Box, MenuItem, Select } from '@mui/material';
import { Widget, WidgetFormFieldProps } from './WidgetRegistry';

export const SelectWidget: Widget = {
  name: 'select',
  presentationalField: ({ value }) => (
    <Box>{value as string}</Box>
  ),
  formField: (props: WidgetFormFieldProps) => {
    const { id, label, value, selectOptions, multiple, helptext } = props;
    return (
      <Box>
        <FormControl sx={{ width: 300 }}>
          <InputLabel htmlFor={`${id}-selectlabel`}>{label}</InputLabel>
          <Select
            labelId={`${id}-selectlabel`}
            id={id}
            defaultValue={value}
            label={label}
            multiple={multiple}
            // onChange={handleChange}
          >
            {selectOptions?.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
          {helptext && (<FormHelperText id={`${id}-helptext`}>{helptext}</FormHelperText>)}
        </FormControl>
      </Box>
    );
  }
};
