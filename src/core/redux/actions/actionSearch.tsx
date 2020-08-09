import { constants } from "../../constants/constants";
import { ActionModel } from "../../models/models";

export const Data_Search = (payload: string): ActionModel<string, null> => {
  return {
    type: constants.DATA_SEARCH,
    payload,
  };
};

export type TypeDataSearch = ActionModel<string, null>;
