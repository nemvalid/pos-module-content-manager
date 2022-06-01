import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from 'react-router-dom';
import { useGetEditableContentTypesQuery } from '../store/services/contentType';

export const Navigation = () => {
  const contentTypes = useGetEditableContentTypesQuery();
  return (
    <div>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      {contentTypes.data?.map(contentType => (
        <ListItem button component={Link} to={`/list/${contentType.parameterized_name}`} key={contentType.id}>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary={contentType.name} sx={{ textTransform: 'capitalize' }} />
        </ListItem>))}
      <ListItem button component={Link} to="/taxonomies">
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Taxonomies" />
      </ListItem>
    </div>
  );
};
