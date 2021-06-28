import tv4 from "tv4";
import stateSchema from "./stateSchema";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  tv4.validate(getState(), stateSchema);
};
