import DrinksByType from "../components/drinks/DrinksByType";
import { connect } from "react-redux";
import { getDrinksByType } from "../redux/actions/index";

const mapStateToProps = state => {
    return { currentDrinks: state.currentDrinks }
}

const mapDispatchToProps = dispatch => {
  return {
    getDrinksByType: (type) => dispatch(getDrinksByType(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksByType);