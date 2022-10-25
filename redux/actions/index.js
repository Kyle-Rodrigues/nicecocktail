import { SET_CURRENT_DRINK, SET_DRINK_CHOSEN } from "../actionTypes/";

export const SetCurrentDrink = drink => ({
    type: SET_CURRENT_DRINK,
    payload: {
      drink: drink 
    }
  });
export const SetDrinkChosen = {
  type: SET_DRINK_CHOSEN
}