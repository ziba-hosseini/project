import { constants } from "../../constants/constants";
import { Item } from "../../models/models";
import { ActionModel } from "../../models/models";

//modal access
const ToggleModalAccess = (): ActionModel<boolean, null> => {
  return {
    type: constants.Toggle_Modal_Access,
  };
};
const CloseModalAccess = (): ActionModel<boolean, null> => {
  return {
    type: constants.Toggle_Modal_Access_Close,
  };
};

//modal product
const ToggleModalProduct = (): ActionModel<boolean, null> => {
  return {
    type: constants.Toggle_Modal_Product,
  };
};

const CloseModalProduct = (): ActionModel<boolean, null> => {
  return {
    type: constants.Toggle_Modal_Product_Close,
  };
};

export const ActionsModal = {
  ToggleModalAccess,
  CloseModalAccess,
  ToggleModalProduct,
  CloseModalProduct,
};

//tye actions
export type ActionTypeModal = ActionModel<boolean, null>;
