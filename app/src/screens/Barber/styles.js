import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #FFFFFF;
`;
export const Scroller = styled.ScrollView`
    flex:1;

`;





export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: ${props => props.dotColor};
    border-radius: 5px;
    margin:3px;
`;
export const SwipeItem = styled.View`
    flex:1;
    background-color: #63C2D1;
`;
export const SwipeImage = styled.Image`
    width:100%;
    height: 240px;
`;
export const EmptyImagesBarber = styled.View`
    height: 140px;
    background-color : #63C2D1;
`;





export const ReturnButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    justify-content: center;
    align-items: center;
`;
export const PageBody = styled.View`
    background-color: #FFFFFF;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px; 

`;






export const BarberInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;
export const BarberAvatar = styled.Image`
    width: 110px;
    height: 110px;

    border-radius: 20px;

    margin-left:30px 
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFFFFF;
`;
export const BarberInfos = styled.View`
    flex:1;
    justify-content: flex-end;
`;
export const BarberInfoName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
`;
export const FavoriteButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: ${props => props.backgroundColor};
    border: 2px solid #999999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;






export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 40px;

`;









export const ServicesArea = styled.View`
    padding-left: 30px;
    padding-right: 25px;
    margin-top:30px;
`;
export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #268596;
    margin-left: 30px;
    margin-bottom:20px;

`;
export const ServiceItem = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
`;
export const ServiceInfos = styled.View`
    flex:1
`;
export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #268596;
`;
export const ServicePrice = styled.Text`
    font-size: 14px;
    color: #268596;
`;
export const ServiceButton = styled.TouchableOpacity`
    background-color: #4EADBE;
    border-radius: 10px;
    padding: 10px 15px;
`;
export const ServiceButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
`;







export const TestimonialArea = styled.View`
    margin-top: 30px;
    margin-bottom: 50px;

`;
export const TestimonialsItem = styled.View`
    background-color: #268596;
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
`;      
export const TestimonialInfos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;
export const TestimonialName = styled.Text`
    font-size:14px;
    font-weight: bold;
    color: #FFFFFF;  
 `;
export const TestimonialBody = styled.Text`
    font-size:13px;
    color: #FFFFFF;
`;

