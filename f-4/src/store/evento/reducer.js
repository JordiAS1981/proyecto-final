import {
    GET_CLUB,
    GET_CLUB_OK,
    GET_CLUB_FAIL
} from './actionTypes'

const initialState = {
    club: [],
    loadingClub: false,
    error: {
        message: ""
    }
}

export default function ClubReducer(state = initialState, action){
    switch(action.type){
        case GET_CLUB:
            state = {...state, loadingClub: true}
            break

        case GET_CLUB_OK:
            state = {...state, loadingClub: false, club: action.payload}
            break
        
        case GET_CLUB_FAIL:
            // state = {...state, loadingClub: false, club: [], error: {action.payload}}
            break
        
        default:
            break
    }
    return state
}