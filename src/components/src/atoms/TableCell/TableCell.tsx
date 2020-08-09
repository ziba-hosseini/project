import React from "react";
import "./TableCell.scss";
import { SvgIcon } from "../SvgIcon/SvgIcon";
import { Svg } from '../../../../core/models/models';
import { Checkbox } from "../Checkbox/Checkbox";
interface props<TEntity> {
  Hovering?: (() => void) | undefined;
  getData?:()=> void;
  onClick? :()=> void;
  children?: React.ReactNode;
  width: string,
  name: string,
  select?:boolean
}

const TableCell = <TEntity,>(props: props<TEntity>) => {


  return (
    
    <div style={props.width?{ width: `${props.width}`,cursor:"pointer" }: { width: `${props.width}` }}  onClick={props.getData?props.getData:undefined} >
      {props.name}
    </div>
  );
};

export { TableCell };
