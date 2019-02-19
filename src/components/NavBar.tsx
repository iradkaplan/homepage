import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Theme, createStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../store/actions";
import { ApplicationState } from "../store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { withRouter, RouteComponentProps } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

declare interface MenuEvent extends React.MouseEvent<HTMLElement> {
  currentTarget: EventTarget & HTMLElement;
}

declare interface Props {
  dispatch: any;
  classes?: any;
  theme?: Theme;
  children?: any;
  projectMenuAnchor: null | HTMLElement;
}

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`
      },

      flexGrow: 1
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      background: theme.palette.primary.main,
      width: drawerWidth
    },
    navText: {
      color: theme.palette.primary.contrastText,
      fontFamily: "Source Code Pro"
    },
    title: {
      textAlign: "left",
      flexGrow: 1
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  });

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
  let handleMenu = (event: MenuEvent) => {
    dispatch(openMenu(event.currentTarget));
  };

  let handleClose = () => {
    dispatch(closeMenu());
  };

  return {
    handleMenu,
    handleClose
  };
};

class NavBar extends React.Component<Props & RouteComponentProps> {
  private handlers: any;
  constructor(props: any) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }

  render() {
    const { classes, children, projectMenuAnchor } = this.props;

    const navList = (
      <div>
        <List>
          <ListItem button key="Home" component={HomeLink}>
            <ListItemText
              classes={{ primary: classes.navText }}
              primary="Home"
            />
          </ListItem>
          <ListItem button key="Resume" component={ResumeLink}>
            <ListItemText
              classes={{ primary: classes.navText }}
              primary="Resume"
            />
          </ListItem>
          <ListItem key="Projects">
            {" "}
            <ListItemText
              classes={{ primary: classes.navText }}
              primary="Projects"
            />
          </ListItem>
          <ListItem button key="GreenLanes" component={GreenLanesLink}>
            <ListItemText
              classes={{ primary: classes.navText }}
              primary="SF Green Lanes"
              inset
            />
          </ListItem>
          <ListItem button key="SF Vote Diagrams" component={RCVLink}>
            <ListItemText
              classes={{ primary: classes.navText }}
              primary="SF Vote Diagrams"
              inset
            />
          </ListItem>
          <ListItem button key="Homepage" component={HomepageLink}>
            <ListItemText
              classes={{ primary: classes.navText }}
              primary="This Website"
              inset
            />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Hidden smUp implementation="css">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Ira Kaplan
              </Typography>
              <div>
                <Button
                  aria-owns={projectMenuAnchor ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handlers.handleMenu}
                  color="inherit"
                >
                  Menu
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={projectMenuAnchor}
                  open={Boolean(projectMenuAnchor)}
                  onClose={this.handlers.handleClose}
                >
                  <MenuItem
                    component={HomeLink}
                    onClick={this.handlers.handleClose}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    component={ResumeLink}
                    onClick={this.handlers.handleClose}
                  >
                    Resume
                  </MenuItem>
                  <MenuItem>Projects</MenuItem>
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
        </Hidden>
        <nav className={classes.drawer}>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              <div style={{ padding: "16px" }}>
                <Typography
                  variant="h6"
                  classes={{ root: classes.navText }}
                  noWrap
                >
                  Ira Kaplan
                </Typography>
              </div>
              {navList}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Hidden smUp implementation="css">
            <div className={classes.toolbar} />
          </Hidden>
          {children}
        </main>
      </div>
    );
  }
}

// class NavBar extends React.Component<{
//   dispatch: any;
//   classes: any;
//   projectMenuAnchor: null | HTMLElement;
// }> {
//   private handlers: any;
//   constructor(props: any) {
//     super(props);
//     this.handlers = createHandlers(this.props.dispatch);
//   }
//   // state = {
//   //   projectMenuAnchor: null
//   // };
//   // store = this.props.store;
//   // handleMenu = event => {
//   //   this.setState({ projectMenuAnchor: event.currentTarget });
//   //   // store.dispatch(openMenu(event.currentTarget));
//   // };

//   // handleClose = () => {
//   //   this.setState({ projectMenuAnchor: null });
//   //   // dispatch({ type: CLOSE_MENU });
//   // };
//   render() {
//     const { classes, projectMenuAnchor } = this.props;
//     // const { projectMenuAnchor } = this.props;

//     return (
//       <div className={classes.root}>
//         <AppBar position="fixed" color="default">
//           <Toolbar>
//             <Typography variant="h6" color="inherit" className={classes.title}>
//               Ira Kaplan
//             </Typography>
//             <Button component={HomeLink}>Home</Button>
//             <Button component={ResumeLink}>Resume</Button>
//             <div>
//               <Button
//                 aria-owns={projectMenuAnchor ? "menu-appbar" : undefined}
//                 aria-haspopup="true"
//                 onClick={this.handlers.handleMenu}
//                 color="inherit"
//               >
//                 Projects
//               </Button>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={projectMenuAnchor}
//                 open={Boolean(projectMenuAnchor)}
//                 onClose={this.handlers.handleClose}
//               >
//                 <MenuItem
//                   component={GreenLanesLink}
//                   onClick={this.handlers.handleClose}
//                 >
//                   SF Protected Green Lanes
//                 </MenuItem>
//                 <MenuItem
//                   component={RCVLink}
//                   onClick={this.handlers.handleClose}
//                 >
//                   SF Vote Diagrams
//                 </MenuItem>
//                 <MenuItem
//                   component={HomepageLink}
//                   onClick={this.handlers.handleClose}
//                 >
//                   This Website
//                 </MenuItem>
//               </Menu>
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }
// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   projectMenuAnchor: PropTypes.object
// };

const mapStateToProps = (state: ApplicationState) => ({
  projectMenuAnchor: state.navbar.projectMenuAnchor
});

// //@ts-ignore
// export default connect(mapStateToProps)(withStyles(styles)(NavBar));

//@ts-ignore
export default withRouter<Props>(
  connect(mapStateToProps)(withStyles(styles)(NavBar))
);
