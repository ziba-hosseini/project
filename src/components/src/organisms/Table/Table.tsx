import React, { useState } from "react";
import { TableHeader } from "../../muscles";
import { useDispatch } from "react-redux";
import {
  TableType,
  Svg,
  checkAll,
  AccessType,
} from "../../../../core/models/models";
import TableRow from "../../molecules/TableRow/TableRow";
import "./Table.scss";
import { Checkbox, SvgIcon } from "../../atoms";
import {
  ActionAccess,
  ActionTypeAccess,
} from "../../../../core/redux/actions/index";

const Table = <TEntity extends { id: number }>(props: TableType<TEntity>) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<checkAll>();
  const [checkAll, setCheckAll] = useState<checkAll[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  let uniqueId: boolean;

  const get_all_check = (check: boolean) => {
    if (check === true) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
  const DeleteItem = (id: number) => {
    let data = props.row_items.filter((item) => item.id !== id);
    console.log(data, "daaattaaa");
    console.log(checkAll,"checkAll")
    dispatch(ActionAccess.removeAccessData(data as []));
    setCheckAll([])
    
  };

  return (
    <>
      <div className="table_container">
        <table className={props.theme ? props.theme : "default_table"}>
          <tr>
            <TableHeader
              header_items={props.header_items}
              them_header={props.them_header}
              search_name={props.search_name}
              name_button={props.name_button}
              row_header={props.row_items as []}
              has_select={props.has_select}
              checkSelect={checkAll}
              check_header={get_all_check}
            />
          </tr>
          <div className={`content_table ${props.them_row}`}>
            {props.row_items.map((row, index: number) => {
              const onChange = (check: boolean) => {
                let data = {
                  id: row.id as number,
                  check: check,
                };
                setIsChecked(data);
                console.log(isChecked, "isChecked");
                uniqueId = checkAll.some((item) => item.id === data.id);
                if (!uniqueId) {
                  setCheckAll((prev) => [...prev, data]);
                } else {
                  checkAll.find(
                    (p) => p.id === data.id && ((p.check = data.check), true)
                  );
                }
              };

              return (
                <div
                  className={
                    (typeof isChecked !== "undefined"
                      ? isChecked.check
                      : null) &&
                    row.id ===
                      (typeof isChecked !== "undefined" && isChecked.id)
                      ? "row_style check_style"
                      : "row_style unCheck_style"
                  }
                >
                  {props.has_select === true && (
                    <Checkbox
                      getCheckBoxValue={onChange}
                      sendCheckBoxValue={flag}
                    />
                  )}

                  <TableRow data_row={props.list_items(row, index)} {...row} />
                  {row.id === isChecked?.id && isChecked?.check && (
                    <div className="edit_icon">
                      <div onClick={() => DeleteItem(row.id)}>
                        <SvgIcon name={Svg.Delete} width="18" height="18" />
                      </div>
                      <div onClick={() => alert(row.id)} className="ddddd">
                        <SvgIcon name={Svg.EditPEN} width="16" height="18" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </table>
      </div>
    </>
  );
};

interface LinkDispatchToProps {
  removeAccessData: (id: number) => void;
}

export { Table };
