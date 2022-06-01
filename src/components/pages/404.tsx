import { Grid, Card, CardContent, Typography } from '@mui/material';

export const NotFound = () => (

  <Grid
    container
    alignContent="center"
    justifyContent="center"
    sx={{ backgroundColor: '#eee', height: '100vh' }}
  >
    <Grid item style={{ backgroundColor: 'yellow' }}>
      <Card sx={{ maxWidth: 640, p: 3, textAlign: 'center' }}>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
            404 Not Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The page you're looking for doesn't exist
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);
