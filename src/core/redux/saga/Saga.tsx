import {Api} from '../../services/Api';
import { put,call ,takeLatest} from 'redux-saga/effects';
import {ActionPrice} from '../actions/actionPrice';
import {constants} from '../../constants/constants';
export {BaseUrl} from '../../services/Api';


//async action fetch 
 export function* fetchDataAsync(url:string) {
      
      try {
        yield put(ActionPrice.ActionLoading(true))
        const res = yield call (Api.get,url);
        let data = res.data;
        yield put(ActionPrice.ActionSuccess(data));
      } catch (err) {
        yield put(ActionPrice.ActionFail(err));
      }
     
}



//action saga send to store

 export function* watchFetchData(){
    yield takeLatest(constants.Fetch_Data,fetchDataAsync,'price')   
}

