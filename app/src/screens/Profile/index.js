import React from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    LogoutButton,
    
} from './styles';

import Api from '../../Api'

import LogoutIcon from '../../assets/back.svg';

export default () => {

    const navigation = useNavigation();
    const HadleLogoutClick = async () =>{
        await Api.logout();
        navigation.reset({
            routes:[{
                name: 'SignIn'
            }]  
        })
    }

    return(
        <Container>
            <Text>Profile</Text>
            <LogoutButton onPress = {HadleLogoutClick}>
                <LogoutIcon width="30" height="30"/>
            </LogoutButton>
        </Container>
    );
}
