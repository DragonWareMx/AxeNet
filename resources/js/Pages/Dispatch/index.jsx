import Layout from '../../layouts/Layout'
import React, { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar';
import { Button, Card, CardContent, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import logo from './assets/logoprov.png'

// import 'react-calendar/dist/Calendar.css';

const Dispatch = ({  }) => {

    const [values, setValues] = useState({
        startDate: '22-07-13',
        endDate: '',
        from: '',
        to: '',
        situation: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault()
        // Inertia.post(route('devices.store',),values, {
        //     onError: () => {
        //         setValues((values) => ({
        //             ...values,
        //             error: true,
        //         }));
        //     },
        // })
    }

    return (

        <>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Avatar src='https://media.istockphoto.com/photos/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-picture-id1189205501?k=20&m=1189205501&s=612x612&w=0&h=fexl_Cmu6AdLatIasGg_XYTkLSeWHCtvhMw1nK5_uDc='/>
                </Grid>
                <Grid item xs={11}>
                    <Grid container style={{paddingTop:15}}>
                        <Grid container>
                            <Grid item xs={11}>
                                <Typography>Daniela Hernández Díaz</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography>EDITAR</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Marketing</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Notificaciones</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent={'center'} style={{marginTop:30}}>
                <Card sx={{width:'90%'}} style={{paddingLeft:50,paddingRight:50}}>
                    <CardContent style={{paddingTop:35}}>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <Grid container justifyContent={'space-between'}>
                                <img src={logo} style={{objectFit:'cover', width:150}}/>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <Typography color='secondary' variant={'h5'} style={{marginRight:10}}>
                                        TCP
                                    </Typography>
                                    <div 
                                        style={{
                                            border:'1px solid #2b70ce',
                                            width:150,
                                            padding:'5px 0px',
                                            display:'flex',
                                            justifyContent:'center'
                                        }}
                                    >
                                        Folio
                                    </div>
                                </div>
                            </Grid>
                            <Grid container style={{marginTop:15, gap:10}} justifyContent='right'>
                                <TextField 
                                    id='startDate'
                                    label='Fecha de envío'
                                    type='date'
                                    value={values.startDate}
                                    onChange={handleChange('startDate')}
                                />
                                <TextField 
                                    id='endDate'
                                    label='Fecha de vencimiento'
                                    value={values.endDate}
                                    onChange={handleChange('endDate')}
                                    type='date'
                                />
                            </Grid>
                            <Grid container justifyContent={'space-between'} style={{marginTop:10}}>
                                <TextField 
                                    id='from'
                                    label='De'
                                    value={values.from}
                                    onChange={handleChange('from')}
                                />
                                <Select
                                    id='to'
                                    label='Para'
                                    value={values.to}
                                    onChange={handleChange('to')}
                                >
                                    <MenuItem value={1}>Opción 1</MenuItem>
                                    <MenuItem value={2}>Opción 2</MenuItem>
                                    <MenuItem value={3}>Opción 3</MenuItem>
                                </Select>       
                            </Grid>
                            <Grid container justifyContent={'center'} style={{marginTop:15}}>
                                <TextField 
                                    id='situation'
                                    label='Plantea la situación'
                                    value={values.situation}
                                    onChange={handleChange('situation')}
                                    fullWidth={true}
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid container justifyContent={'right'} marginTop={4}>
                                <Button type='submit' variant={'contained'}>
                                    <Typography variant={'body2'}>Envíar</Typography>
                                </Button>
                            </Grid>
                        </form> 
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

Dispatch.layout = page => <Layout children={page} title="Despacho" />

export default Dispatch 