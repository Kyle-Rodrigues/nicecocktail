import { SET_DRINK_CHOSEN } from "../actionTypes"

export default function(state = false, action){
    switch (action.type){
        case SET_DRINK_CHOSEN:
            return !state
        default:
            return state
    }
}