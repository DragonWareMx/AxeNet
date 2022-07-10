import Layout from '../../layouts/Layout'
import * as React from 'react';
import Container from '@mui/material/Container';
import Avatar from '../../components/Avatar';
import { Card, CardContent, Grid, Typography } from '@mui/material';

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
            <Grid container style={{marginTop:30}}>
                <Typography>Fecha de nacimiento: </Typography>
                <Typography>26/03/1992</Typography>
            </Grid>
            <Grid container style={{marginTop:10}}>
                <Typography>Número de contacto: </Typography>
                <Typography>55487275833</Typography>
            </Grid>
            <Grid container style={{marginTop:10}}>
                <Typography>Correo electrónico: </Typography>
                <Typography>hdzdaniela@outlook.com</Typography>
            </Grid>
            <Grid container style={{marginTop:10}}>
                <Typography>Dirección: </Typography>
                <Typography>Chupaflores 140 fraccionamietno la Hacienda Morelia Michoacán</Typography>
            </Grid>
            <Grid container justifyContent={'center'} style={{marginTop:30}}>
                <Card sx={{width:'90%'}} style={{paddingLeft:25,paddingRight:25}}>
                    <CardContent>
                        <Grid container justifyContent={'center'}>
                            <Typography>División 6 Público</Typography>
                        </Grid>
                        <Grid container spacing={2} style={{marginTop:25}}>
                            <Grid item xs={4}>
                                <Typography align='center'>Departamento de Marketing</Typography>
                                <li style={{marginTop:10}}><Typography>Unidad de Diseño</Typography></li>
                                <li style={{marginTop:10}}><Typography>Unidad de Social Media</Typography></li>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography align='center'>Departamento de Infraestructura</Typography>
                                <li style={{marginTop:10}}><Typography>Unidad de Imagen Pública</Typography></li>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography align='center'>Departamento de Actividades Públicas</Typography>
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