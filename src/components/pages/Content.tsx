import { Box, Button, CircularProgress } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
import { useGetContentByTypeQuery } from '../../store/services/contentType';

export const ContentListRenderer = ({ model }: { model: string }) => {
  const { data, isLoading } = useGetContentByTypeQuery(model);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!data) return null;

  return (<>
    <Box sx={{ textAlign: 'right', paddingBottom: 6 }}>
      <Button variant="contained" component={Link} to={`/new/${model}`}>Add new {model}</Button>
    </Box>
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: { id: string, properties: { status: string, title: string } }) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.properties.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.properties.status}
              </TableCell>
              <TableCell align="right">
                <Button component={Link} to={`/edit/${model}/${row.id}`}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
};

export const ContentList = () => {
  const { modelName } = useParams();
  if (!modelName) return <CircularProgress />;

  return <ContentListRenderer model={modelName} />;
};
