import { DrinksByType } from "../components/drinks/DrinksByType";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { drinkTypes: state.drinkTypes }
  }

export default connect(mapStateToProps)(DrinksByType);