import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters:[...state.allCharacters, action.payload]
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter(fav => 
                    fav.id !== action.payload)
            };
        case FILTER:
            const filterCopy = [...state.allCharacters];
            const filtro = action.payload === "All" ? state.allCharacters : filterCopy.filter((item) =>
            item.gender === action.payload);
            return {
                ...state,
                myFavorites: filtro,
            }
        case ORDER:
            const stateCopy = [...state.allCharacters];
            if (action.payload === "ascendente")
            stateCopy.sort((a,b)=> a.id - b.id);
            if (action.payload === "descendente")
            stateCopy.sort ((a,b)=> b.id - a.id);
            return {
                ...state,
                myFavorites: stateCopy,
            }

        default:
            return state;
    }
}


export default reducer