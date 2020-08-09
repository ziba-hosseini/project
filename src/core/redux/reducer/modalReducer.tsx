
import {constants} from '../../constants/constants';
import {ActionTypeModal} from '../actions/index';
import {TypeModal} from '../../models/models';

const InitialModal:TypeModal={
 
   isOpenAccess:false,
   isOpenProduct:false


}


export function ModalReducer(state=InitialModal, action:ActionTypeModal):TypeModal {
   switch (action.type) {
     case constants.Toggle_Modal_Access:
       return {
          ...state,
         isOpenAccess:!(state.isOpenAccess)
       };
       case constants.Toggle_Modal_Product:
         return {
            ...state,
           isOpenProduct:!(state.isOpenProduct)
         };

         case constants.Toggle_Modal_Access_Close:
         return {
            ...state,
            isOpenAccess:false
         };
         case constants.Toggle_Modal_Product_Close:
            return {
               ...state,
              isOpenProduct:false
            };
     default:
       return state;
   }

}
