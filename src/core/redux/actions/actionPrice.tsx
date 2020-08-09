import {constants} from '../../constants/constants';
import {ActionModel,Item, AccessType} from '../../models/models';

//action  for spring-price table
 const ActionLoading = (loading: boolean): ActionModel<boolean,null> => {
    return {
      type: constants.FETCH_API_REQUEST,
      payload:loading
    }
  }

 const ActionSuccess = (payload:Item[]):ActionModel<Item[],null> => {
    return {
      type: constants.FETCH_API_SUCCESS,
      payload: payload
    }
  }
 const ActionFail = (error:string): ActionModel<string,null> => {
    return {
      type: constants.FETCH_API_FAIL,
      payload: error
    }
  }
  
 
 const GetDataProduct = (error:string): ActionModel<string,null> => {
    return {
      type: constants.FETCH_API_FAIL,
      payload: error
    }
  }

  const ActionFetchData=()=>{
    return {
      type: constants.Fetch_Data,
    
    }
  }

  export const ActionPrice={
    ActionLoading,
    ActionSuccess,
    ActionFail,
    ActionFetchData

  }

// add action modal type

export type ActionTypePrice=ActionModel<boolean,null> |ActionModel<Item[],null>|ActionModel<string,null> |ActionModel<AccessType[],null>|ActionModel<number,null>
