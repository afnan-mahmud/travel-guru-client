import { Box, Button, Card, CardActions, CardContent, Checkbox, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

//Sign in
import {signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
//context
import { useContext } from 'react';
import { LoginUserContext } from '../App';
import { auth } from '../Firebase/firebaseConfig';


const provider = new GoogleAuthProvider();





const Login = () => {

    const navigate = useNavigate();

    const {setLoggedUser} = useContext(LoginUserContext)

    const handleGoogleSignIn = () =>{
            signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const {displayName, email, photoURL} = user;
                console.log(user);
                setLoggedUser({
                    islogged : true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                })
                navigate('/');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode , errorMessage);
            });
    }

    const [logUserInfo , setlogUserInfo] =useState({
        email: '',
        password: ''
    })

    const handleGeneralSignIn = (e) =>[
        signInWithEmailAndPassword(auth, logUserInfo.email, logUserInfo.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const {displayName, email, photoURL} = user;
            setLoggedUser({
                islogged : true,
                name: displayName,
                email: email,
                photoURL: photoURL
            })
            navigate('/');
        })
    ]

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3} />
                <Grid item xs={6} sx={{justifyContent: 'center'}}>
                    <Card sx={{ width: 600, mt: 7, border: '1px solid lightgray' }}>
                        <CardContent>
                            <Typography sx={{mt: 3}} variant='h5'>Login</Typography><br />
                            <TextField
                                onBlur={(e)=> setlogUserInfo(prev => ({...prev, email: e.target.value}))}
                                sx={{
                                    width: 400
                                }}
                                required
                                id="standard-required"
                                type='email'
                                name='email'
                                placeholder='Username or Email'
                                variant="standard"
                            />
                            <TextField
                                onBlur={(e)=> setlogUserInfo(prev => ({...prev, password: e.target.value}))}
                                sx={{
                                    width: 400,
                                    mt: 3
                                }}
                                required
                                id="standard-required"
                                type='password'
                                name='password'
                                placeholder='Password'
                                variant="standard"
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Checkbox />
                                    <Typography variant='body1'>Remember me</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button>Forgot Password</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions sx={{alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick={handleGeneralSignIn} sx={{width: 200}} variant="contained">Login</Button> <br />
                        </CardActions>
                        <Typography sx={{mb: 5}} variant='body1'>Don't have an account ? <Link to='/signup'>Create an account</Link></Typography>
                    </Card>
                    <Divider sx={{pr: 9, mt: 5}}>Or</Divider>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', justifyItems: 'center'}}>
                            <List>
                                <ListItem sx={{border: '1px solid black', borderRadius: 10}} disablePadding>
                                    <ListItemButton onClick={handleGoogleSignIn}>
                                        <ListItemIcon>
                                            <Google sx={{ color: pink[500] }}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Continue with Google" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                    </Box>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </div>
    );
};

export default Login;