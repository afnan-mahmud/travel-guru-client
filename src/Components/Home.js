import React from 'react';
import './style.css'
import { Box, Button, CardContent, Grid, Typography } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Sundarban from '../images/sundorbon.png';
import Sajek from '../images/Sajek.png';
import Sreemongol from '../images/Sreemongol.png';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='primary-design'>
            <Grid container spacing={2} sx={{p: '50px'}}>
                <Grid item xs={5}>
                    <Card sx={{ minWidth: 275, mt: 20 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            COX'S BAZAR
                            </Typography>
                            
                            <Typography variant="body2">
                            Cox's Bazar is a city, fishing port, tourism centre and
                            <br />
                            district headquarters in southeastern Bangladesh. It is
                            <br />
                            famous mostly for its long natural sandy beach, and it ...
                            </Typography>
                            <br />
                            <Link to='/destination'><Button sx={{width: 150}} variant="contained" endIcon={ <ArrowForward /> }>Book Now</Button></Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={7}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            py: 1,
                            overflow: 'auto',
                            width: 780,
                            scrollSnapType: 'x mandatory',
                            '& > *': {
                            scrollSnapAlign: 'center',
                            },
                            '::-webkit-scrollbar': { display: 'none' },
                        }}
                    >
                            <Card
                                variant="outlined"
                                sx={{
                                    gap: 2,
                                    '--Card-padding': (theme) => theme.spacing(2),
                                    alignItems: 'center'
                                }}
                            >
                                <AspectRatio ratio="1" sx={{ minWidth: 250, minHeight: 200 }}>
                                    <img
                                    src={`${Sundarban}?fit=crop&auto=format`}
                                    alt='Su'
                                    />                                   
                                </AspectRatio>
                                <Typography variant='h5'>Sundarban</Typography>
                                <Typography variant='body1'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.</Typography>
                                <Link to='/destination'><Button sx={{width: 150}} variant="contained" endIcon={ <ArrowForward /> }>Book Now</Button></Link>
                            </Card>
                            <Card
                                variant="outlined"
                                sx={{
                                    gap: 2,
                                    '--Card-padding': (theme) => theme.spacing(2),
                                    alignItems: 'center'
                                }}
                            >
                                <AspectRatio ratio="1" sx={{ minWidth: 250, minHeight: 200 }}>
                                    <img
                                    src={`${Sajek}?fit=crop&auto=format`}
                                    alt='Su'
                                    />
                                </AspectRatio>
                                <Typography variant='h5'>Sajek</Typography>
                                <Typography variant='body1'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.</Typography>
                                <Link to='/destination'><Button sx={{width: 150}} variant="contained" endIcon={ <ArrowForward /> }>Book Now</Button></Link>
                            </Card>
                            <Card
                                variant="outlined"
                                sx={{
                                    gap: 2,
                                    '--Card-padding': (theme) => theme.spacing(2),
                                    alignItems: 'center'
                                }}
                            >
                                <AspectRatio ratio="1" sx={{ minWidth: 250, minHeight: 200 }}>
                                    <img
                                    src={`${Sreemongol}?fit=crop&auto=format`}
                                    alt='Su'
                                    />
                                
                                </AspectRatio>
                                <Typography variant='h5'>Sreemongol</Typography>
                                <Typography variant='body1'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.</Typography>
                                <Link to='/destination'><Button sx={{width: 150}} variant="contained" endIcon={ <ArrowForward /> }>Book Now</Button></Link>
                            </Card>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;