import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, IconButton, Card, Link, Typography, Button, CardActionArea, CardMedia, TextField, CssBaseline, Container, makeStyles, Avatar} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import StoreIcon from '@material-ui/icons/Store';
import HelpIcon from '@material-ui/icons/Help';
import clsx from 'clsx';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CategoryIcon from '@material-ui/icons/Category';
import AddIcon from '@material-ui/icons/Add';
import PhoneIcon from '@material-ui/icons/Phone';
import SearchIcon from '@material-ui/icons/Search';
import '../../App.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles({
  main: {
    borderBottom: 'solid #e0e0de 2px',
    '&::before': {
      content: '""',
      display: 'block',
      height: 4,
      backgroundColor: '#ef3b44',
      width: '100%',
  },
},
  header: {
    boxShadow: 'none',
    height: '350px',
  },
  icon: {
    marginRight: 10,
    textAlign: 'center',
    display: 'inline-block',
    transition: 'color 0.3s',
    marginRight: '20px',
    '&:hover': {
    color: "#eb0000",
  }
  },
  list: {
    left: '50%',
    position: 'absolute',
  },
  butn: {
    top: '2%',
    right: '0%',
    position: 'absolute',
    width: '24%',
    borderRadius: '0px 0px 25px 25px',
    height: '40px'
  },
  card: {
    position: "absolute",
    boxShadow: 'none',
    width: '9%',
    top: "2%",
    left: '0%'
  },
  info : {
    position: 'relative',
    width: '12%',
    left: '10%'
  },
  coutries: {
    position: 'absolute',
    width: '50%',
    right: '0%',
    border: '#e0e0de solid 2px',
    borderRadius: '25%',
    marginRight: '10px'
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
  },
});
  export default function ButtonAppBar() {
    const icon = ()=> {
      return <CategoryIcon />
    }
    const classes = useStyles();
    return (
      <div className={classes.main}>
        <div style={{position: 'relative',margin: 'auto' ,width:'70%'}}>
        <AppBar className={classes.header}color='white' position="static">
        <Toolbar>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image="https://jo.luqta.com/frontend/dist/images/brand.svg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          <div className={classes.info}>
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
               <Typography style={{marginLeft: '10px'}} component="p">عربي</Typography>
          </div>
          <div className={classes.phon}>
          <PhoneIcon style={{marginLeft: '10px'}} fontSize='small'/>
          <span style={{display:'inline-block', fontSize: '12px'}}>+962799097079</span>
          </div>
          </div>
        <Button style={{backgroundColor: '#ef3b44'}} className={classes.butn} variant="contained" color="secondary">
          <AddIcon fontSize='large' style={{padding: '0 10 3 0'}}/>
        Post a Free Ad!
      </Button>
        <div className={classes.list}>
          <Link href='#' underline='none' className={clsx(classes.icon)}>
          <LockIcon/>
          <Typography component="p">
          Login
          </Typography>
          </Link>
          <Link href='#' underline='none' href='#' className={clsx(classes.icon)}>
          <HelpIcon/>
          <Typography component="p">
          Help
         </Typography>
          </Link>
          <Link href='#' underline='none' className={clsx(classes.icon)}>
          <StoreIcon/>
          <Typography component="p">
          Shop
         </Typography>
          </Link>
          <Link href='#' underline='none' className={clsx(classes.icon)}>
          <PersonAddIcon/>
          <Typography component="p">
          Register
          </Typography>
          </Link>
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
    </Card>
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth='md'>
      <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.outlined} variant="outlined" placeholder='Keywords'/>
      <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Avatar style={{backgroundColor: 'blue'}}>
            <CategoryIcon />
            </Avatar>
          </InputAdornment>
        )
      }}
       className={classes.outlined} variant="outlined" placeholder='categories'/>
      <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Avatar style={{backgroundColor: 'blue'}}>
              <SearchIcon />
              </Avatar>
            </InputAdornment>
          ),
        }} className={classes.outlined}  variant="outlined" placeholder='All ceties'/>
    </form>
      </Container>
    </React.Fragment>
       </AppBar>
        </div>
      </div>
    );
  }