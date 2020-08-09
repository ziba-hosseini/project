import {constants} from '../../constants/constants';
import {InitialType,Item} from '../../models/models';
import {ActionTypePrice} from '../actions/actionPrice';
const initialState:InitialType={
    price:{
      loading:false,
      data:[],
      loaded:false,
      error:""
    }
}
export function reducerTableData(state=initialState, action:ActionTypePrice):InitialType {
  
        switch (action.type) {
          case constants.FETCH_API_REQUEST:
            return {
              ...state,
             price:{
              ...state.price,
              loading: true  ,
             }
            };
          case constants.FETCH_API_SUCCESS:
            return {
              ...state,
              price:{
              ...state.price,
              loading:false,
              data:action.payload as Item[],
              loaded:true,
             
            }};
          case constants.FETCH_API_FAIL:
            return {
              ...state,
              price:{
                ...state.price,
                error:action.payload as string
              }};
              
            ;
        
          default:
            return state;
        }
   
  }