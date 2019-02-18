import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Theme, createStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button, { ButtonProps } from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../../store/actions";
import { CSSProperties } from "jss/css";
import { ApplicationState } from "../../store";

declare interface MenuEvent extends React.MouseEvent<HTMLElement> {
  currentTarget: EventTarget & HTMLElement;
}

const drawerWidth = 240;

const styles = createStyles({
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
});

// const styles2 = (theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex"
//     },
//     drawer: {
//       [theme.breakpoints.up("sm")]: {
//         width: drawerWidth,
//         flexShrink: 0
//       }
//     },
//     appBar: {
//       marginLeft: drawerWidth,
//       [theme.breakpoints.up("sm")]: {
//         width: `calc(100% - ${drawerWidth}px)`
//       }
//     },
//     menuButton: {
//       marginRight: 20,
//       [theme.breakpoints.up("sm")]: {
//         display: "none"
//       }
//     },
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//       width: drawerWidth
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing.unit * 3
//     }
//   });

const HomeLink = (props: any) => <Link {...props} to="/" />;
const ResumeLink = (props: any) => <Link {...props} to="/resume" />;
const HomepageLink = (props: any) => (
  <Link {...props} to="/projects/homepage" />
);
const RCVLink = (props: any) => <Link {...props} to="/projects/sf-rcv" />;
const GreenLanesLink = (props: any) => (
  <Link {...props} to="/projects/greenlanes" />
);

let createHandlers = function(dispatch: Function) {
  // let onClick = function(node, data) {
  //   dispatch(actions.nodeClicked(data));
  // };
  let handleMenu = (event: MenuEvent) => {
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

class NavBar extends React.Component<{
  dispatch: any;
  classes: any;
  projectMenuAnchor: null | ((element: HTMLElement) => HTMLElement);
}> {
  private handlers: any;
  constructor(props: any) {
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
            <Button component={HomeLink}>Home</Button>
            <Button component={ResumeLink}>Resume</Button>
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
                  component={GreenLanesLink}
                  onClick={this.handlers.handleClose}
                >
                  SF Protected Green Lanes
                </MenuItem>
                <MenuItem
                  component={RCVLink}
                  onClick={this.handlers.handleClose}
                >
                  SF Vote Diagrams
                </MenuItem>
                <MenuItem
                  component={HomepageLink}
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
// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   projectMenuAnchor: PropTypes.object
// };

const mapStateToProps = (state: ApplicationState) => ({
  projectMenuAnchor: state.navbar.projectMenuAnchor
});

//@ts-ignore
export default connect(mapStateToProps)(withStyles(styles)(NavBar));
