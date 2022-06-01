import { FormControl, Box, TextField } from '@mui/material';
import { Widget, WidgetFormFieldProps } from './WidgetRegistry';

export const RichTextWidget: Widget = {
  name: 'richtext',
  presentationalField: ({ value }) => (
    <Box>{value as string}</Box>
  ),
  formField: (props: WidgetFormFieldProps) => {
    const { id, label, value, error, helptext } = props;
    return (
      <Box>
        <FormControl sx={{ width: 600 }}>
          <TextField
            id={id}
            label={label}
            defaultValue={value}
            multiline
            rows={10}
            {...(helptext ? { helperText: helptext } : {})}
          />
        </FormControl>
      </Box>
    );
  }
};
