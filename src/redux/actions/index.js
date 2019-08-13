import { getDrinksList } from "../utils/index";
import { dispatch } from "rxjs/internal/observable/pairs";

export function getDrinksByType(type) {
    return async (dispatch) => {
        const drinkList = await getDrinksList(type);
        dispatch({
            type: "DRINKS_BY_TYPE",
            payload: drinkList
        });
    }
}