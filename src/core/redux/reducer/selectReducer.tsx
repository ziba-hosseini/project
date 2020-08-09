import { constants } from "../../constants/constants";
import { Data_Search, TypeDataSearch } from "../actions/actionSearch";
import { TypeModal } from "../../models/models";
import { TypeAllSelected } from "../actions/actionSelect";
type InitialSelect = {
    checkall: boolean |undefined;
};
const InitialSelect: InitialSelect = {
  checkall: false,
};

export function SelectReducer(
  state = InitialSelect,
  action: TypeAllSelected
): InitialSelect {
  switch (action.type) {
    case constants.CHECK_ALL:
      return {
        ...state,
        checkall: action.payload ,
      };
    default:
      return state;
  }
}
