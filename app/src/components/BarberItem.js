import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import Stars from './Stars';

const Area = styled.TouchableOpacity`
    border-radius: 20px;
    background-color: #FFFFFF;
    flex-direction: row;

    padding:15px;
    margin-bottom:20px;
`;


const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;


const InfoArea = styled.View`
    justify-content: space-between;
    margin-left:20px;
  

`;


const Username = styled.Text`
    font-size:17px;
    font-weight: bold;
    
`;


const SeeProfileButton = styled.View`
    width: 85px;
    height:26px;

    border-radius: 10px;
    border: 1px solid #4EADBE;
    

    justify-content: center;
    align-items:center;

`;


const SeeProfileButtonText = styled.Text`
    font-size:13px;
    color: #268596;
`;

export default ({data}) => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Barber', {
            id: data.id,
            name: data.name,
            stars: data.stars,
            avatar: data.avatar,
        });
    }

    return (
        <Area onPress = {handleClick}>
            <Avatar source = {{uri: data.avatar}}/>
            <InfoArea>
                <Username>{data.name}</Username>

                <Stars stars={data.stars}  showNumber={true} />

                <SeeProfileButton>
                    <SeeProfileButtonText>
                        Ver Perfil
                    </SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>

        </Area>
    );
}