import {combineReducers} from 'redux';
import currentDrink from './currentDrink.js';
import drinkChosen from './drinkChosen.js';

export default combineReducers({ currentDrink, drinkChosen });