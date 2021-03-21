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
    width: 300,
    borderRadius:15
    
  },
  media: {
    height: 80,
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

export default function Cart(props) {
  const {bedType, imgUrl,title}=props.rider;
  const classes = useStyles();
  const history = useHistory()
  const handleBook = (bedType) => {
    history.push(`/destination/${bedType}`);
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgUrl}
      />
      <CardActions disableSpacing>
        <IconButton>
          <h3>{title}</h3>
        </IconButton>
        <Button onClick={() => handleBook(bedType)} variant="contained" color="primary"> Choice</Button>
      </CardActions>
    </Card>
  );
};