import { FormControl, FormHelperText, Box, Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { Widget, WidgetFormFieldProps } from './WidgetRegistry';

export const CheckboxWidget: Widget = {
  name: 'checkbox',
  presentationalField: ({ value }) => (
    <Box>{value as string}</Box>
  ),
  formField: (props: WidgetFormFieldProps) => {
    const { id, label, value, selectOptions, multiple, helptext } = props;
    return (
      <Box>
        <FormControl sx={{ width: 300 }}>
          <FormLabel component="legend">{label}</FormLabel>
          <FormGroup>
            {selectOptions?.map(option => (
              <FormControlLabel control={<Checkbox />} label={option} />
            ))}
          </FormGroup>
          {helptext && (<FormHelperText id={`${id}-helptext`}>{helptext}</FormHelperText>)}
        </FormControl>
      </Box>
    );
  }
};
