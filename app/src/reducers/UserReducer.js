export const initialState = {
    avatar: '',
    favorites: [{"avatar": "https://api.b7web.com.br/devbarber/media/avatars/2.png", "id": 15, "name": "Gabriel Silva", "stars": 4.3}
    , {"avatar": "https://api.b7web.com.br/devbarber/media/avatars/4.png", "id": 6, "name": "Amanda Lacerda", "stars": 3.6}
    ,{"avatar": "https://api.b7web.com.br/devbarber/media/avatars/1.png", "id": 7, "name": "Ronaldo Lacerda", "stars": 4.7}

    ],
    appointments: []
};

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar };
        break;
        default:
            return state;
    }
}