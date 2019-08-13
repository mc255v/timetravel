import axios from "axios"

export async function getDrinksList(type) {
  const { data: drinkList} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
  return drinkList;
}