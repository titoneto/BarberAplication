import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import {UserContext} from '../../contexts/UserContext';
import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';

export default () => {

    const userContextDispatch = useContext(UserContext).dispatch;
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token){
            let json = await Api.checkToken(token);
                if(json.token){

                    await AsyncStorage.setItem('token',json.token);
                   
                    userContextDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: json.data.avatar
                        }
                    });

                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    });

                }else{
                navigation.navigate('SignIn');  
                }
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();

    }, [])


    return (
        <Container>
            <BarberLogo width="100%" height="160"/>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    );

}