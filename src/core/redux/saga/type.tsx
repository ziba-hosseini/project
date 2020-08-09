import {Item} from '../../models/models';
export interface fetchDataAsync{
    url:string
}

export interface Url{
    url:string,
  }

export interface ActionSuccess<T extends Item[]>{
  data:Item[]
}