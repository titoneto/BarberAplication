import React, {useContext, useState} from 'react';

import BarberItem from '../../components/BarberItem';

import {UserContext} from '../../contexts/UserContext';
import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderText,

    SearchArea,
    SearchInput,
    SearchButton,

} from './styles';

import SearchIcon from '../../assets/search.svg';

export default () => {

    const userContextState = useContext(UserContext).state;
    const [barberFind, setBarberFind] = useState("");


   // const handleBarberSearch () => {

      

    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderText>
                        Favorites
                    </HeaderText>
                </HeaderArea>

                <SearchArea>
                    <SearchInput 
                    placeholder = "Nome do Barbeiro"
                    placeholderTextColor = "#FFFFFF"
                    value = {barberFind}
                    onChangeText = {t => setBarberFind(t)}
                    //onEndEditing = {handleBarberSearch}
                    />

                    <SearchButton>
                        <SearchIcon height = "24" width = "24" fill = "#FFFFFF"/>
                    </SearchButton>
                </SearchArea>

                

                {userContextState.favorites.map((item, key) => {
                    if (item.name.substring(0, barberFind.length) == barberFind){
                        return(<BarberItem key = {key} data = {item}/>);
                    }           
                })}
            </Scroller>        
        </Container>
    );
}
