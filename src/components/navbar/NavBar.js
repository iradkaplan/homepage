import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "left",
    flexGrow: 1,
  },
};

function NavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title} >
          Ira Kaplan
          </Typography>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/resume/">
              <Button>Resume</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);