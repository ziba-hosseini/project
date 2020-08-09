import {ActionModel,Item,AccessType} from '../../models/models';
import {constants} from '../../constants/constants';
//access data
 const getAccess = (data: AccessType[]): ActionModel<AccessType[],null> => {
    return {
      type: constants.Get_Access,
      payload:data
    }
  }

  const removeAccessData=(data:AccessType[]):ActionModel<AccessType[],null>=>{
    return{
        type:constants.Delete_Item,
        payload:data
    }
  }
export const ActionAccess={
   getAccess,
   removeAccessData
}

  export type ActionTypeAccess=ActionModel<AccessType[],null>|ActionModel<AccessType[],null> ;
