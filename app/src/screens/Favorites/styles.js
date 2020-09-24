import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #63C2D1;
    justify-content: center;
    align-items: center;
   
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    align-items: center
    margin-bottom: 25px;
    width: 326px;
`;

export const HeaderText = styled.Text`
    font-size: 26px;
    color: #FFFFFF;
    font-weight: bold;
`;



export const SearchArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
    border-radius: 30px;
    align-items:center;


    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;

`;
export const SearchInput = styled.TextInput`
    flex:1;
    font-size:18px;
    color: #FFFFFF;

`;
export const SearchButton = styled.TouchableOpacity`
    width:24px;
    height:24px;
`;


