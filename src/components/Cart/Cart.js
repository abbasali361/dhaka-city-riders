import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './Cart.css';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '50%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform'),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Cart({rider}){
  const classes = useStyles();
  const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={rider.imgUrl}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton>
          <h3>{rider.title}</h3>
        </IconButton>
        <Button onClick={() => handleBook(rider.bedType,rider.imgUrl)} variant="contained" color="primary"> Choice</Button>
      </CardActions>
    </Card>
  );
}
