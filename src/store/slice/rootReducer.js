import counter from "./counter";
import counter3 from "./counter3";
import restApis from "../api/restApis";

const rootReducer = {
  counter,
  counter3,

  [restApis.reducerPath]: restApis.reducer,
};

export default rootReducer;
