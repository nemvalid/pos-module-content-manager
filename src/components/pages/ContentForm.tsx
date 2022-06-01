import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetContentByIdQuery, useGetEditableFieldsForContentTypeQuery } from '../../store/services/contentType';
import { widgetRegistry } from '../../widgets/WidgetRegistry';

export const ContentFormRenderer = ({ model, edit, id }: { model: string, edit?: boolean, id?: string }) => {
  const skipContent = !(edit && typeof id !== 'undefined');
  const { data, isLoading } = useGetEditableFieldsForContentTypeQuery(model);
  const { data: contentData, isLoading: contentIsLoading } = useGetContentByIdQuery(id, { skip: skipContent });
  if (isLoading || contentIsLoading) {
    return <CircularProgress />;
  }

  if (!data) return null;
  return (
    <Box sx={{ flexGrow: 1 }}>
      {data.properties.filter(field => field.metadata?.editable).sort((a, b) => (a.metadata?.weight || 10) - (b.metadata?.weight || 10)).map(field => {
        const Component = widgetRegistry.getField(field.metadata.widget);
        return (
          <Box sx={{ flexGrow: 1, marginBottom: 6 }} key={field.id}>
            <div>
              <Component
                id={field.id}
                label={field.name}
                value={contentData?.properties[field.name] || field.default_value || undefined}
                {...(field.metadata.multiple ? { multiple: true } : {})}
                {...(field.metadata.options ? { selectOptions: field.metadata.options } : {})}
              />
            </div>
          </Box>
        );
      })}
    </Box >
  );
};

type ContentFormProps = {
  edit?: boolean
};

export const ContentForm = (props: ContentFormProps) => {
  const { edit } = props;
  const { modelName, id } = useParams();
  if (!modelName) return <CircularProgress />;

  return <ContentFormRenderer model={modelName} edit={edit} id={id} />;
};
