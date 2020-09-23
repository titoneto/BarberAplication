import React, {useState, useEffect, useContext} from 'react';

import { useNavigation, useRoute } from "@react-navigation/native";

import Swiper from 'react-native-swiper';

import {
    Container,
    Scroller,

    ReturnButton,
    PageBody,
    LoadingIcon,

    SwipeDot,
    SwipeItem,
    SwipeImage,
    EmptyImagesBarber,

    BarberInfoArea,
    BarberAvatar,
    BarberInfos,
    BarberInfoName,
    FavoriteButton, 

    ServicesArea,
    ServicesTitle,
    ServiceItem,
    ServiceInfos,
    ServiceName,
    ServicePrice,
    ServiceButton,
    ServiceButtonText,

    TestimonialArea,
    TestimonialsItem,      
    TestimonialInfos,
    TestimonialName,
    TestimonialBody,
} from './styles';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';
import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';

import ReturnIcon from '../../assets/back.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';

import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

export default  () => {

    const navigation = useNavigation();
    const route = useRoute();
    const userContextDispatch = useContext(UserContext);
    

    const [barberInfo, setBarberInfo] = useState({
        id: route.params.id,
        name: route.params.name,
        avatar: route.params.avatar,
        stars: route.params.stars,
    });
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const[loading,setLoading] = useState(false);

    useEffect(() => {
        const getBarberInfo = async () =>{
            setLoading(true);
            let json = await Api.getBarberinfo(barberInfo.id);
            if(json.error == ''){
                setBarberInfo(json.data);
            }else{

                alert("Error: " + json.error);
            }
            setLoading(false);
        }
        getBarberInfo();

    }, []);

    const handlebackButton =  () => {
        navigation.goBack();
    } 

    const handleFavClick = () => {
        setBarberInfo({...barberInfo, favorited: !barberInfo.favorited});
        Api.setFavorite(barberInfo.id);   
    }

    const handleServiceChoose = (key) => {
        setSelectedService(key);
        setShowModal(true);
    }


    return (
        <Container>
            <Scroller>
                <ReturnButton onPress = {handlebackButton}>
                     <ReturnIcon height = "40" width = "40" fill = "#FFFFFF"/>
                </ReturnButton>
               
                {barberInfo.photos && barberInfo.photos.length > 0 ?
                <Swiper 
                    style={{height: 240}}
                    dot={<SwipeDot dotColor = "#FFFFFF"/>}
                    activeDot={<SwipeDot dotColor = "#63C2D1"/>}
                    paginationStyle = {{top: 15, right:15, bottom:null, left:null}}
                    autoplay={true}
                    showsPagination={true}
                >
                    {barberInfo.photos.map((item, k)=>(
                        <SwipeItem key={k}>
                            <SwipeImage source={{uri:item.url}} resizeMode = "cover"/>
                        </SwipeItem>
                    ))}

                </Swiper>
                :
                <EmptyImagesBarber >

                </EmptyImagesBarber>
                }

                <PageBody>
                    <BarberInfoArea>

                        <BarberAvatar source = {{uri: barberInfo.avatar}}/>
                        <BarberInfos>
                            <BarberInfoName>{barberInfo.name} </BarberInfoName>
                            <Stars stars={barberInfo.stars} showNumber={true}/>
                        </BarberInfos>
                        <FavoriteButton onPress={handleFavClick}
                        backgroundColor = {barberInfo.favorited ? "#63C2D1" : "#FFFFFF"}
                        >

                            {barberInfo.favorited ?
                                <FavoriteFullIcon width = "24" height = "24" fill = "#ff0000" /> 
                                :  
                                <FavoriteIcon width = "24" height = "24" fill = "#ff0000" />
                            }
                        </FavoriteButton>
                    </BarberInfoArea>


                    {loading && <LoadingIcon size = "large" color = "#63C2D1"/>}

                    
                    {barberInfo.services &&
                        <ServicesArea>
                            <ServicesTitle>Lista de serviços</ServicesTitle>
                            {barberInfo.services.map((item, key) =>(
                                <ServiceItem key={key}> 
                                    <ServiceInfos>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
                                    </ServiceInfos>
                                    <ServiceButton onPress = {() => handleServiceChoose(key)} >
                                        <ServiceButtonText>Agendar</ServiceButtonText>
                                    </ServiceButton>
                                </ServiceItem>
                            ))}
                        </ServicesArea>
                    }
                    
                    {barberInfo.testimonials && barberInfo.testimonials.length > 0 &&
                        <TestimonialArea>
                            <Swiper
                                style = {{height: 110}}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton =  {<NavPrevIcon width="35" height="35" fill = "#000000"/>}
                                nextButton =  {<NavNextIcon width="35" height="35" fill = "#000000"/>}
                            >
                                {barberInfo.testimonials.map( (item, key) =>(
                                    <TestimonialsItem key={key}>        
                                        <TestimonialInfos>
                                            <TestimonialName>{item.name}</TestimonialName>
                                            <Stars stars={item.rate} showNumber={false} />
                                        </TestimonialInfos>
                                        <TestimonialBody>{item.body}</TestimonialBody>
                                    </TestimonialsItem>
                                ))}
                        
                            </Swiper>
                         </TestimonialArea>
                        
                    }
                </PageBody>
             </Scroller>
            <BarberModal
                show={showModal}
                setShow={setShowModal}
                barber={barberInfo}
                service={selectedService}
            >


            </BarberModal>

        </Container>
    );
}