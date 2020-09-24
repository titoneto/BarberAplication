import React, {useState, useEffect}from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from  '@react-navigation/native';

import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import Api from '../../Api';

import { 
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIcon,
    ListArea
} from './styles';

import BarberItem from '../../components/BarberItem';
import SearchIcon from '../../assets/search.svg';
import MyLocationItem from '../../assets/my_location.svg';

export default () => {
    const navigation = useNavigation();

    const [locationText,setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [barberList, setBarbersList] = useState([]);
    const [refreshing,setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);

        let permissionResult = await request(
            Platform.OS === 'ios' ? 
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION

        );

        if( permissionResult == 'granted'){
            //granted, permissão concedida
            setLoading(true);
            setLocationText('');
            setBarbersList([]);

            Geolocation.getCurrentPosition(info => {
                setCoords(info.coords);
                getBarbers();
            });

        }

    }

    const getBarbers = async () => {
        setLoading(true);
        setBarbersList([]);

        let lat = null;
        let lng = null;

        if(coords){
            lat = coords.latitude;
            lng = coords.longitude;
        }
        
        let res = await Api.getBarbers(lat,lng, locationText);

        if(res.error == ''){
            if(res.loc){
                setLocationText(res.loc);
            }
            setBarbersList(res.data);               

        } else{
            alert("Error: " + res.error);   
        }

        setLoading(false);
        console.log(barberList);
    }

    useEffect(() => {
        getBarbers();
        
    },[]);

    const onRefresh = () =>{
        setRefreshing(false);
        getBarbers();     
    }

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();

    }

    return(
        <Container>
            <Scroller refreshControl = {
                <RefreshControl refreshing={refreshing} onRefresh = {onRefresh} />
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines = {2}>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton onPress = {() => navigation.navigate('Search')}>
                        <SearchIcon width = "26" height = "26" fill = "#FFFFFF"/>
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput 
                    placeholder = "Onde você está?"
                    placeholderTextColor = "#FFFFFF"
                    value = {locationText}
                    onChangeText = {t => setLocationText(t)}
                    onEndEditing = {handleLocationSearch}
                    />
                    
                    <LocationFinder onPress = {handleLocationFinder}>
                        <MyLocationItem width = "24" height = "24" fill = "#FFFFFF" />

                    </LocationFinder>

                </LocationArea> 

                {loading && 
                    <LoadingIcon size="large" color="#FFFFFF"/>             
                }

                <ListArea>
                    {barberList.map((item, k) =>(
                        <BarberItem key={k} data={item}/>
                    ))}
                </ListArea>
                 

            </Scroller>                
        </Container>
    );
}
