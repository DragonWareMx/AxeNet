import Layout from '../../layouts/Layout'
import * as React from 'react';
import Avatar from '../../components/Avatar';
import { Breadcrumbs, Card, CardContent, Grid, Typography } from '@mui/material';
// import 'react-calendar/dist/Calendar.css';

const Record = ({  }) => {

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
                <Card sx={{width:'90%'}} style={{paddingLeft:50,paddingRight:25}}>
                    <CardContent style={{paddingTop:35}}>
                        <Grid container justifyContent={'center'}>
                            <Breadcrumbs style={{marginBottom:15}}>
                                <Typography variant={'h6'} color='secondary'>
                                    Historial
                                </Typography>
                                <Typography variant='h6'>
                                    Marketing
                                </Typography>
                                <Typography variant='h6'>
                                    Diseño
                                </Typography>
                                <Typography variant='h6'>
                                    Social Media
                                </Typography>
                            </Breadcrumbs>
                        </Grid>  
                        <Grid 
                            container 
                            justifyContent={'space-between'} 
                            style={{
                                marginBottom:10,
                                border:'1px solid #2b70ce',
                                padding:5,
                                cursor:'pointer',
                            }}
                        >
                            <Typography>Envío de TCP</Typography>
                            <Typography>05/01/2022</Typography>
                        </Grid>
                        <Grid 
                            container 
                            justifyContent={'space-between'} 
                            style={{
                                marginBottom:10,
                                border:'1px solid #2b70ce',
                                padding:5,
                                cursor:'pointer',
                            }}
                        >
                            <Typography>Envío de TCP</Typography>
                            <Typography>06/01/2022</Typography>
                        </Grid>
                        <Grid 
                            container 
                            justifyContent={'space-between'} 
                            style={{
                                marginBottom:10,
                                border:'1px solid #2b70ce',
                                padding:5,
                                cursor:'pointer',
                            }}
                        >
                            <Typography>Envío de despacho</Typography>
                            <Typography>08/04/2022</Typography>
                        </Grid> 
                        <Grid 
                            container 
                            justifyContent={'space-between'} 
                            style={{
                                marginBottom:10,
                                border:'1px solid #2b70ce',
                                padding:5,
                                cursor:'pointer',
                            }}
                        >
                            <Typography>Envío de despacho</Typography>
                            <Typography>08/04/2022</Typography>
                        </Grid>     
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

Record.layout = page => <Layout children={page} title="Historial" />

export default Record 