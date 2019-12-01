import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  all: {
    background: 'white',
    width: '100%',
  },
  typo: {
    // marginLeft: 'auto'
    width: '70%',
  },
  ul: {
    listStyleType: 'none',
    // display: 'flex',
    // alignItems: 'center',
    float: 'left',
    background: 'red',
    marginLeft: '470px'
   },
  li: {
    background: 'black',
    display: 'inline-block',
    margin: '20px',
  },
  a: {
    color: 'white'
  },
  logo: {
    float: 'left',
    width: '30%',
    background: "blue",
    marginLeft: '470px',
    },
    // img : {
    //   marginLeft: '250px'
    // }
});
const NavBar= () => {
  const classes = useStyles();
  return (
      <div>
        <AppBar  className={classes.all}>
              <ToolBar>
                  <Typography className={classes.typo}>
                      <ul className={classes.ul}>
                          <li className={classes.li}><a className={classes.a} href='#'>دخول</a></li>
                          <li className={classes.li}><a className={classes.a} href='#'>دخول</a></li>
                          <li className={classes.li}><a className={classes.a} href='#'>دخول</a></li>
                          <li className={classes.li}><a className={classes.a} href='#'>دخول</a></li>
                      </ul>
                  </Typography>
                  <div className={classes.logo} >
                <img
                className={classes.img}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKgRWiWiBEUQMvXkMxSaM1oUKKtAhF2uKH3Ucrws1CdFgJHClv' height="62" width="75"></img>
                </div>
              </ToolBar>
          </AppBar>
        {/* <Button  className={classes.root}>
            Hello World
        </Button> */}
          <h1>abcd</h1>
      </div>
  )
}
// const useStyles = makeStyles(theme => ({
//   all: {
//     background: 'white'
//   },
//   root: {
//     flexGrow: 1,
//     },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
// }));

// export default function NavBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar className={classes.all} position="static">
//         <Toolbar variant="dense">
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
  export default NavBar;
