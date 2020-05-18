import React from "react";
import Grid from "@material-ui/core/Grid";
import Book from "../component/Book";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
  },
}));

const Books = ({ books, category }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {books &&
              books.map((book) => {
                if (category) {
                  if (category === book.category) {
                    return (
                      <Book
                        key={book.id}
                        title={book.title}
                        url={book.url}
                        thumbnail={book.thumbnail}
                        category={book.category}
                      />
                    );
                  }
                }
                if (!category) {
                  return (
                    <Book
                      key={book.id}
                      title={book.title}
                      url={book.url}
                      thumbnail={book.thumbnail}
                      category={book.category}
                    />
                  );
                }
                return ; // will see later
              })}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Books;
