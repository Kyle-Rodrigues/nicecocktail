import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { connect, useSelector, useDispatch } from 'react-redux';
import {LinearGradient} from 'expo-linear-gradient'
import { SetCurrentDrink, SetDrinkChosen } from '../redux/actions/';

function App() {
    
    const dispatch = useDispatch();
    const currentDrink = useSelector(state => state.currentDrink)
    const drinkChosen = useSelector(state => state.drinkChosen)

    //Array of Drinks to render through
    const drinks = [
        {id: 1, name: "americano"},
        {id: 2, name: "bellini"},
        {id: 3, name: "cosmopolitan"},
        { id: 4, name: "gimlet" },
        {id: 5, name: "manhattan"},
        { id: 6, name: "margarita" },
        { id: 7, name: "martini" },
        { id: 8, name: "mimosa" },
        { id: 9, name: "mojito" },
        { id: 10, name: "negroni" },
        { id: 11, name: "sazerac" },
        { id: 12, name: "zombie" },
    ]


    //Function for capitalizing the first letter of a string
    const capitalizeFirstLetter = (string) =>  {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      //Component for list of drinks
    const renderItem = ({ item }) => {
        return(<TouchableOpacity onPress={() => {
            dispatch(SetDrinkChosen);
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+item.name)
              .then((response) => response.json())
              .then((json) => { dispatch(SetCurrentDrink(json.drinks[0])) });
        }}>
            <LinearGradient style={styles.drink} colors={['#84c8d4', '#241934']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                <Text style= {styles.drinktext}> {capitalizeFirstLetter(item.name)} </Text>
            </LinearGradient>
        </TouchableOpacity>)
    }

    //Component for rendering the drink information
    const DrinkInfo = () => {
        return(<ScrollView>
            <Text style={styles.title}>{currentDrink.strDrink}</Text>
            <Image source={{uri: currentDrink.strDrinkThumb}} style={{width: 300, height: 300, margin: 10}}></Image>

            <Text style={styles.header}>Instructions:</Text>
            <Text style={styles.text}>{currentDrink.strInstructions}</Text>

            <Text style ={styles.header}>Ingredients:</Text>

            <Text style={styles.text}>- {currentDrink.strMeasure1} of {currentDrink.strIngredient1}</Text>
            <Text style={styles.text}>- {currentDrink.strMeasure2} of {currentDrink.strIngredient2}</Text>
            <Text style={styles.text}>- {currentDrink.strMeasure3} of {currentDrink.strIngredient3}</Text>
            <Text style={styles.text}>- {currentDrink.strMeasure4} of {currentDrink.strIngredient4}</Text>
            <Text style={styles.text}>- {currentDrink.strMeasure5} of {currentDrink.strIngredient5}</Text>
            <Text style={styles.text}>- {currentDrink.strMeasure6} of {currentDrink.strIngredient6}</Text>
            <Text style={styles.text}>- {currentDrink.strMeasure7} of {currentDrink.strIngredient7}</Text>
            <Text style={styles.text}>- {currentDrink.strMeasure8} of {currentDrink.strIngredient8}</Text>
            <Button title="Back" onPress={() => {dispatch(SetDrinkChosen);}}></Button>
        </ScrollView>)
    }

    return (
        <LinearGradient style ={styles.container} colors= {['black', 'gray', 'black']}>
            {drinkChosen ? <DrinkInfo/> : <FlatList data={drinks} renderItem={renderItem} keyExtractor={(item) => item.id} />}
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drink: {
        display: 'flex',
        width: 250,
        height: 100,
        margin: 13,
        alignSelf: 'center',
        backgroundColor: '#8AAB83',
        justifyContent: 'center'
    },
    drinktext: {
        fontFamily: 'serif',
        marginLeft: 15,
        fontSize: 24,
        color: '#fff44f',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 36,
        alignSelf: 'center',
        color: '#ffdf00',
        fontWeight: 'bold'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#84c8d4',
        textDecorationLine: 'underline'
    },
    text: {
        color: 'white'
    }
});

const mapStateToProps = (state) => {
    return {
        currentDrink: state.currentDrink.currentDrink
    }
}
const mapDispatchToProps = { SetCurrentDrink };

export default connect(mapStateToProps, mapDispatchToProps)(App);