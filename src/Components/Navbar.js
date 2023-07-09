import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Logo from '../images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/firebaseConfig';

//context
import { useContext } from 'react';
import { LoginUserContext } from '../App';
import { signOut } from 'firebase/auth';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Navbar = () => {

  const {loggedUser , setLoggedUser} = useContext(LoginUserContext);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      setLoggedUser({
        islogged: false
      })
    }).catch((error) => {
      // An error happened.
    });
  }

    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor: '#caf3f1'}}>
                <Toolbar>
                    <Grid container spacing={2} sx={{alignItems:'center'}}>
                        <Grid item xs={2}>
                            <Link to='/'><img src={Logo} alt="" style={{width: '90px'}}/></Link>
                        </Grid>
                        <Grid item xs={4}>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon sx={{ color: 'black' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        </Grid>
                        <Grid sx={{justifyContent: 'start'}} spacing={2} item xs={6}>
                            <Link to='/'><Button color='success'>Home</Button></Link>
                            <Link to='/news'><Button color='success'>News</Button></Link>
                            <Link to='/destination'><Button color='success'>Destination</Button></Link>
                            <Link to='/blog'><Button color='success'>Blog</Button></Link>
                            <Link to='/contact'><Button color='success'>Contact</Button></Link>
                            {
                              loggedUser.islogged ? <Button onClick={handleSignOut} variant="contained">Hi, {loggedUser.name}</Button>
                              : <Link to='/login'><Button variant="contained">Log in</Button></Link>
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;