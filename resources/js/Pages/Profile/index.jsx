import Layout from '../../layouts/Layout'
import * as React from 'react';
import Container from '@mui/material/Container';
import Avatar from '../../components/Avatar';
import { Grid, Toolbar, Typography } from '@mui/material';

const Profile = ({  }) => {

    return (

        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Avatar src='https://media.istockphoto.com/photos/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-picture-id1189205501?k=20&m=1189205501&s=612x612&w=0&h=fexl_Cmu6AdLatIasGg_XYTkLSeWHCtvhMw1nK5_uDc='/>
                </Grid>
                <Grid item xs={10}>
                    <Grid container style={{paddingTop:15}}>
                        <Grid container>
                            <Grid item xs={10}>
                                <Typography>Daniela Hernández Díaz</Typography>
                            </Grid>
                            <Grid item xs={2}>
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
            <Grid container>
                <Typography>Fecha de nacimiento: </Typography>
                <Typography>26/03/1992</Typography>
            </Grid>
            <Grid container>
                <Typography>Número de contacto: </Typography>
                <Typography>55487275833</Typography>
            </Grid>
            <Grid container>
                <Typography>Correo electrónico: </Typography>
                <Typography>hdzdaniela@outlook.com</Typography>
            </Grid>
            <Grid container>
                <Typography>Dirección: </Typography>
                <Typography>Chupaflores 140 fraccionamietno la Hacienda Morelia Michoacán</Typography>
            </Grid>
            <Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar /><Toolbar />
            hola
        </>
    )
}

Profile.layout = page => <Layout children={page} title="Perfil" />

export default Profile 