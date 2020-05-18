import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 200,
    margin: 25,
  },
  media: {
    height: 175,
  },
});

const Book = props => {
  const classes = useStyles();

  const onCardHandler =(url)=>{
    window.open(url, '_blank');
  }

  return (
    <Card onClick = {()=>onCardHandler(props.url)}  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.thumbnail}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Book;
