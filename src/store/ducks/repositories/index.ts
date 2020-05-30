import { Reducer } from "redux";
import { IRepositoriesState, RepositoriesTypes, IAction } from "./types";

const INITIAL_STATE: IRepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<IRepositoriesState, IAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: true, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
