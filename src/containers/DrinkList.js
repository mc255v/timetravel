import { DrinkList } from "../components/drinks/DrinkList";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { drinkTypes: state.drinkTypes }
  }

export default connect(mapStateToProps)(DrinkList);