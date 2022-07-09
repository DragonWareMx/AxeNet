import Layout from '../../layouts/Layout'
import * as React from 'react';
import Container from '@mui/material/Container';
import Avatar from '../../components/Avatar';

const Profile = ({  }) => {

    return (

        <div>
            <Container>
                <Avatar 
                    
                />
            </Container>
        </div>
    )
}

Profile.layout = page => <Layout children={page} title="Perfil" />

export default Profile 