import {constants} from '../../constants/constants';
import {InitialType,Item,AccessType,ProductType} from '../../models/models';
import {ActionTypeAccess} from '../actions/actionAccess';
import {ActionTypePrice} from '../actions/index';
import { AccessData } from '../../../components/src/bodies';
interface typeSaveAccess{
    accessData:AccessType[],
}
const initialState:typeSaveAccess={
   accessData:[]

}
export function reducerAccess(state=initialState, action:ActionTypeAccess):typeSaveAccess {
     switch (action.type) {
         
             case constants.Get_Access:
              return{
                accessData:action.payload as AccessType[]
              }

              case constants.Delete_Item:
                return{
                    accessData:action.payload as AccessType[]
                  }
                  
                
        
          default:
            return state;
        }
   
  }