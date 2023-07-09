import { ArrowForward } from '@mui/icons-material';
import { Autocomplete, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const destination = [
    {label: 'Dhaka'},
    {label: 'Sundarban'},
    {label: 'Sajek'},
    {label: 'Sreemongol'}
]

const Destination = () => {
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
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5}>
                    <Card sx={{ width: 450, mt: 15 }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Autocomplete
                                    id="combo-box-demo"
                                    options={destination}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField {...params} label="From" />}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                    id="combo-box-demo"
                                    options={destination}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField {...params} label="To" />}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                    id="combo-box-demo"
                                    options={destination}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField {...params} label="From Date" />}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                    id="combo-box-demo"
                                    options={destination}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField {...params} label="To Date" />}
                                    />
                                </Grid>
                            </Grid> <br />
                            <Link to='/destination'><Button variant="contained" endIcon={ <ArrowForward /> }>Start Booking</Button></Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Destination;