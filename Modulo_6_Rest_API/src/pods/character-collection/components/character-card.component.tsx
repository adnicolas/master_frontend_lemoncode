import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link, generatePath } from 'react-router-dom';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
      <Card>
        <Link to={generatePath("characters/:id", { id: character.id})}>
          <CardHeader
            avatar={<Avatar aria-label="Character"></Avatar>}
            title={character.name}
          />
        </Link>
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.picture}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
          </div>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => onEdit(character.id.toString())}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
  );
};
