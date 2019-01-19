import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import photo from '../../static/IMG_4917.jpg';
import './Home.css';

  // const styles = theme => ({
  //   root: {
  //     // padding: theme.spacing.unit,
  //     // [theme.breakpoints.down('sm')]: {
  //     //   backgroundColor: theme.palette.secondary.main,
  //     // },
  //     // [theme.breakpoints.up('md')]: {
  //     //   backgroundColor: theme.palette.primary.main,
  //     // },
  //     [theme.breakpoints.down('sm')]: {
  //       minHeight: calc(100vh - 48px);
  //     },
  //     [theme.breakpoints.up('sm')]: {
  //       minHeight: calc(100vh - 64px);
  //     },
  //     // [theme.breakpoints.up('lg')]: {
  //     //   backgroundColor: green,
  //     // },
  //   },
  // });

class Home extends Component {

  render() {
    return (
        <header className="App-header">
          <img src={photo} className="Main-photo" alt="Me" />
          <p>
            Welcome to my homepage!
          </p>
          <p>
          I'm Ira. I'm an urbanist, a software developer, and a coffee enthusiast.
          </p>
          <p>
          🚲 🛴 🚲 🛴 🚲 🛴
          </p>
        </header>
    );
  }
}

export default Home; //withStyles(styles)(Home);