import React from "react";
import { SvgIcon } from "../../atoms";
import { Svg } from "../../../../core/models/models";
interface props<TEntity> {
  children?: React.ReactNode;
   icon?:string
}

const TableCellIcon = <TEntity,>(props: props<TEntity>) => {

  return (
    <div className="icon_style" >

          <SvgIcon name={props.icon}/>

    </div>
  );
};

export { TableCellIcon };
