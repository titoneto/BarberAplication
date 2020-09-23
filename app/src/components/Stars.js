import React, { useState, useEffect } from 'react';
import styled from  'styled-components/native';

import StarFull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`
    flex-direction: row;
`;

const StarView = styled.View`


`; 

const StarText = styled.Text`
    font-size = 12px;
    font-weight: bold;
    margin-left: 5px;
    color: #737373;
`;

export default ({stars, showNumber}) => {
    let s = [0, 0, 0, 0, 0]; 
    let floor = Math.floor(stars); // retorna somente a parte inteira

    for(var i = 0; i<floor;i++){
        s[i] = 1;
    }
    if(stars - floor > 0){
        s[i] = 0.5;
    }

    return(
        <StarArea>
            {s.map( (i, k) => (
                <StarView key={k}>
                    {i === 0 && <StarEmpty width = "18" height = "18" fill = "#ff9200"/>}
                    {i === 0.5 && <StarHalf width = "18" height = "18" fill = "#ff9200"/>}
                    {i === 1 && <StarFull width = "18" height = "18" fill = "#ff9200"/>}
                </StarView>
            ))}
            { showNumber && <StarText> {stars}</StarText> }
        </StarArea>
    );
}