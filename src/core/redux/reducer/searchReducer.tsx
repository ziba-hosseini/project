
import {constants} from '../../constants/constants';
import {Data_Search,TypeDataSearch} from '../actions/actionSearch';
import {TypeModal} from '../../models/models';
type InitialSearch={
    search:string
}
const InitialSearch:InitialSearch={
 
   search:"",



}


export function SearchReducer(state=InitialSearch, action:TypeDataSearch):InitialSearch {
   switch (action.type) {
     case constants.DATA_SEARCH:
       return{
           ...state,
           search:action.payload as string
       }
     default:
       return state;
   }

}
