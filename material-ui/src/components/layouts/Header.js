import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, IconButton} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import StoreIcon from '@material-ui/icons/Store';
import HelpIcon from '@material-ui/icons/Help';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../../App.css';
import { red, blue } from '@material-ui/core/colors';
  
const useStyles = makeStyles({
  header: {
    boxShadow: 'none',
    height: '350px',
  },
  icon: {
    marginRight: 10,
    color: 'blue',
    textAlign: 'center',
    display: 'inline-block',
  },
  list: {
    left: '50%',
    position: 'absolute'
  },
  butn: {
    top: '2%',
    right: '0%',
    position: 'absolute',
    width: '22%'
  },
  card: {
    position: "absolute",
    width: '9%',
    top: "2%",
    left: '0%'
  },
  coutries: {
    position: 'absolute',
    width: '6%',
    left: '15%',
    border: 'gray solid 2px',
    borderRadius: '25%'
  },
  flag: {
    width: '45%',
    padding: '5% 0 0 5%'
  },
  arrow: {
    position: 'absolute',
    display: 'inline',
    right: '10%',
    top: '0%',
  },
  card1: {
    position: 'absolute',
    width: '100%',
    bottom: '30%'
  },
  form : {
    position: 'absolute',
    bottom: '7%',
    left: '20%',
    right:'20%'
  },
  outlined: {
    // marginLeft: 10
    width: '33.3333%'
  },
  container: {
    backgroundColor: 'black',
    width: '80%',
    margin: 'auto'
  },
  arrIcon : {
    display: 'block',
    fontSize:'13px'
  }
});
  export default function ButtonAppBar() {
    const classes = useStyles();
    return (
      <div>
        <div style={{position: 'relative',margin: 'auto' ,width:'70%'}}>
        <AppBar className={classes.header} style={{}} color='white' position="static">
        <Toolbar>
          <Card className={classes.card}>
            <CardActionArea style={{boxShadow: 'none'}}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image="https://jo.luqta.com/frontend/dist/images/brand.svg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          <div>
          <div className={classes.coutries}>
            <div className={classes.flag}>
            <img style={{width:'100%'}} src="https://jo.luqta.com/uploads/countries/pic_6_1521755044.png" />
            </div>
            <div className={classes.arrow}>
              <ArrowDropUpIcon className={classes.arrIcon}/>
              <ArrowDropDownIcon className={classes.arrIcon}/>
            </div>
          </div>
          <div className={classes.lang}>
               <Typography variant="p">عربي</Typography>
          </div>
          </div>
        <Button className={classes.butn} variant="contained" color="secondary">
        Secondary
      </Button>
        <div className={classes.list}>
          <div className={clsx(classes.icon)}>
          <LockIcon/>
          <Typography component="p" variant="p">
          Login
          </Typography>
          </div>
          <div className={clsx(classes.icon)}>
          <HelpIcon/>
          <Typography component="p" variant="p">
          Help
         </Typography>
          </div>
          <div className={clsx(classes.icon)}>
          <StoreIcon/>
          <Typography component="p" variant="p">
          Shop
         </Typography>
          </div>
          <div className={clsx(classes.icon)}>
          <PersonAddIcon/>
          <Typography component="p" variant="p">
          Register
          </Typography>
          </div>
        </div>
        </Toolbar>
        <Card className={classes.card1}>
      <CardActionArea className={classes.headerImg}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://s3.ap-south-1.amazonaws.com/luqta-uploads/uploads/banners/home_banner.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      {/* <CardActions>
          
      </CardActions> */}
    </Card>
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth='md'>
      <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.outlined} label="Outlined" variant="outlined" />
      <TextField className={classes.outlined} label="Outlined" variant="outlined" />
      <TextField className={classes.outlined} label="Outlined" variant="outlined" />
    </form>
      </Container>
    </React.Fragment>
       </AppBar>
        </div>
      </div>
    );
  }