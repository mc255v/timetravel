const initialState = {
    drinkTypes: ["Vodka", "Gin", "Tequila", "Whiskey", 
      "Scotch", "Bourbon", "Champagne", "Red Wine"],
    currentDrinks: [],
  };
  
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "DRINKS_BY_TYPE":
      return {
        ...state,
        currentDrinks: action.payload.drinks
      }
    default:
      return state;
  }
};
  
export default reducer;