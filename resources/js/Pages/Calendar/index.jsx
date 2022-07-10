import Layout from '../../layouts/Layout'
import * as React from 'react';
import Avatar from '../../components/Avatar';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Calendar from 'react-calendar';
import './styles/calendarStyle.css'
// import 'react-calendar/dist/Calendar.css';

const Profile = ({  }) => {

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
                        <Grid container>
                            <Grid item xs={12} md={7}>
                                <Calendar style={{width:'100%'}} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

Profile.layout = page => <Layout children={page} title="Perfil" />

export default Profile 