import { Box, Button, Card, CardActions, CardContent, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookOutlined, Google } from '@mui/icons-material';
import { blue, pink } from '@mui/material/colors';

//signup
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';

//context
import { useContext } from 'react';
import { LoginUserContext } from '../App';


const Signup = () => {

    const navigate = useNavigate();

    const {setLoggedUser} = useContext(LoginUserContext)

    const [userloginfo, setUserLogInfo] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })

    const [errmsg , setErrmsg] = useState('');

    const handleGeneralSignUP = () =>{
        if(userloginfo.fname === '' || userloginfo.lname === '' || userloginfo.email === '' || userloginfo.password === ''){
            setErrmsg('Please fill all the fields')
            return
        } else{
            setErrmsg('')    
        }
        createUserWithEmailAndPassword(auth, userloginfo.email, userloginfo.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: userloginfo.fname
            })
            setLoggedUser({
                islogged : true,
                name: userloginfo.fname,
                email: userloginfo.email,
                photoURL: user.photoURL
            })
            console.log(user);
            // ...
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrmsg(errorCode);
            console.log(errorCode , errorMessage);
            // ..
        });
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3} />
                <Grid item xs={6} sx={{justifyContent: 'center'}}>
                    <Card sx={{ width: 600, mt: 7, border: '1px solid lightgray' }}>
                        <CardContent>
                            <Typography sx={{mt: 3}} variant='h5'>Create an account</Typography><br />
                            <TextField
                                onBlur={e => setUserLogInfo(prev => ({...prev, fname: e.target.value}))}
                                sx={{
                                    width: 400
                                }}
                                required
                                id="standard-required"
                                type='text'
                                placeholder='First Name'
                                variant="standard"
                            />
                            <TextField
                                onBlur={e => setUserLogInfo(prev => ({...prev, lname: e.target.value}))}
                                sx={{
                                    width: 400,
                                    mt: 3
                                }}
                                required
                                id="standard-required"
                                type='text'
                                placeholder='Last Name'
                                variant="standard"
                            />
                            <TextField
                                onBlur={e => setUserLogInfo(prev => ({...prev, email: e.target.value}))}
                                sx={{
                                    width: 400,
                                    mt: 3
                                }}
                                required
                                id="standard-required"
                                type='email'
                                placeholder='Username or Email'
                                variant="standard"
                            />
                            <TextField
                                onBlur={e => setUserLogInfo(prev => ({...prev, password: e.target.value}))}
                                sx={{
                                    width: 400,
                                    mt: 3
                                }}
                                required
                                id="standard-required"
                                type='password'
                                placeholder='Password'
                                variant="standard"
                            />
                            <TextField
                                sx={{
                                    width: 400,
                                    mt: 3
                                }}
                                required
                                id="standard-required"
                                type='password'
                                placeholder='Confirm Password'
                                variant="standard"
                            />
                        </CardContent>
                        <Typography sx={{color: 'red'}} variant='body1'>{errmsg}</Typography>
                        <CardActions sx={{alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick={handleGeneralSignUP} sx={{width: 200}} variant="contained">Create an account</Button> <br />
                        </CardActions>
                        <Typography sx={{mb: 5}} variant='body1'>Already have an account ? <Link to='/login'>Login</Link></Typography>
                    </Card>
                    <Divider sx={{pr: 9, mt: 5}}>Or</Divider>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', justifyItems: 'center'}}>
                            <List>
                                <ListItem sx={{border: '1px solid black', borderRadius: 10}} disablePadding>
                                    <ListItemButton onClick={()=> console.log('clicked')}>
                                        <ListItemIcon>
                                            <FacebookOutlined sx={{ color: blue[500] }}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Continue with Facebook" />
                                    </ListItemButton>
                                </ListItem> <br />
                                <ListItem sx={{border: '1px solid black', borderRadius: 10}} disablePadding>
                                    <ListItemButton>
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

export default Signup;