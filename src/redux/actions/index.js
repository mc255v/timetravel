import {getDrinkTypes} from "../utils/index";

export function setDrinkTypes() {
    const drinkList = getDrinkTypes;
    return {
        type: "DRINK_TYPES",
        payload: drinkList
    }
}