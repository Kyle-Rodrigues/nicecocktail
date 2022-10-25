import { SET_CURRENT_DRINK} from "../actionTypes/";

  const initial_state = {

  }

  export default function(state = initial_state, action){
    switch (action.type){
        case SET_CURRENT_DRINK:
            const drink = action.payload.drink
            return drink
        default:
            return state
    }
  }