import { constants } from "../../constants/constants";
import { ActionModel } from "../../models/models";

export const CHECK_ALL = (payload: boolean): ActionModel<boolean, null> => {
  return {
    type: constants.CHECK_ALL,
    payload,
  };
};

export type TypeAllSelected = ActionModel<boolean, null>;
