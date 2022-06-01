import { FormControl, InputLabel, Input, FormHelperText, Box } from '@mui/material';
import { Widget, WidgetFormFieldProps } from './WidgetRegistry';

export const TextFieldWidget: Widget = {
  name: 'textfield',
  presentationalField: ({ value }) => (
    <Box>{value as string}</Box>
  ),
  formField: (props: WidgetFormFieldProps) => {
    const { id, label, value, error, helptext } = props;
    return (
      <Box>
        <FormControl sx={{ width: 500 }}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Input
            id={id}
            defaultValue={value}
            aria-describedby={`${id}-helptext`}
          />
          {helptext && (<FormHelperText id={`${id}-helptext`}>{helptext}</FormHelperText>)}
        </FormControl>
      </Box>
    );
  }
};
