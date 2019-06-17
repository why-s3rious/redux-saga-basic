import { connect } from "react-redux";
import Demso from "../component/demso";
import { OnIncrease, OnDecrease } from "../redux/action/action";

const mapStateToProps = state => {
  return {
    step: state.StepReducer.step
  };
};
const mapDispatchToProps = dispatch => {
  return {
    HandleIncrease: step => {
      dispatch(OnIncrease(step));
    },
    HandleDecrease: step => {
      dispatch(OnDecrease(step));
    }
  };
};

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Demso);

export default container;
