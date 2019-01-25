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
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../../actions";

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

let createHandlers = function(dispatch) {
  // let onClick = function(node, data) {
  //   dispatch(actions.nodeClicked(data));
  // };
  let handleMenu = event => {
    // this.setState({ projectMenuAnchor: event.currentTarget });
    dispatch(openMenu(event.currentTarget));
  };

  let handleClose = () => {
    // this.setState({ projectMenuAnchor: null });
    dispatch(closeMenu());
  };

  return {
    handleMenu,
    handleClose
    // other handlers
  };
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }
  // state = {
  //   projectMenuAnchor: null
  // };
  // store = this.props.store;
  // handleMenu = event => {
  //   this.setState({ projectMenuAnchor: event.currentTarget });
  //   // store.dispatch(openMenu(event.currentTarget));
  // };

  // handleClose = () => {
  //   this.setState({ projectMenuAnchor: null });
  //   // dispatch({ type: CLOSE_MENU });
  // };
  render() {
    const { classes, projectMenuAnchor } = this.props;
    // const { projectMenuAnchor } = this.props;

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
                aria-owns={projectMenuAnchor ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handlers.handleMenu}
                color="inherit"
              >
                Projects
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={projectMenuAnchor}
                open={Boolean(projectMenuAnchor)}
                onClose={this.handlers.handleClose}
              >
                <MenuItem
                  component={Link}
                  to="/projects/sf-rcv/"
                  onClick={this.handlers.handleClose}
                >
                  SF Vote Diagrams
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/projects/homepage/"
                  onClick={this.handlers.handleClose}
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
  classes: PropTypes.object.isRequired,
  projectMenuAnchor: PropTypes.object
};

const mapStateToProps = state => ({
  projectMenuAnchor: state.navbarReducer.projectMenuAnchor
});

export default connect(mapStateToProps)(withStyles(styles)(NavBar));
