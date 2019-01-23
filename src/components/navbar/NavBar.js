import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    textAlign: "left",
    flexGrow: 1
  },
  link: {
    textDecoration: "none"
  }
};

class NavBar extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Ira Kaplan
            </Typography>
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/resume/">
              Resume
            </Button>
            <div>
              <Button
                aria-owns={anchorEl ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                Projects
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem
                  component={Link}
                  to="/projects/sf-rcv/"
                  onClick={this.handleClose}
                >
                  SF Vote Diagrams
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/projects/homepage/"
                  onClick={this.handleClose}
                >
                  This Website
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
