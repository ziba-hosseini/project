import React from "react";
import { TableCell, SvgIcon, Checkbox } from "../../atoms";
import { ItemData, Svg } from "../../../../core/models/models";
import "./TableRow.scss";
import {TableCellIcon } from "../index";



interface props {
  them_row?: string,
  Children?: React.ReactNode,
  list_items?: ItemData[],
  data_row: ItemData[],
  getData?:()=>void,
  select?:boolean,
  isChecked?:boolean
  
}

const TableRow: React.FC<props> = (props) => {
  
  const { data_row,select } = props;

  return (
    <div className={`${props.them_row} default_items`}>
      {data_row.map((cell: ItemData) => {
        return (
          <>
           
              
              <TableCellIcon icon={cell.icon}/>
              <TableCell Hovering={cell.Hovering} getData={cell.getData} {...cell} />
             
           
          </>
        );
      })}
    </div>
  );
};
export default TableRow;
