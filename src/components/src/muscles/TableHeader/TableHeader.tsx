import React, { useState, useEffect } from "react";
import { Search } from "../../molecules";
import "./TableHeader.scss";
import { ButtonDynamic } from "../../molecules/index";
import { Checkbox,SvgIcon } from "../../atoms";
import { Svg, Header, checkAll } from "../../../../core/models/models";
import { useDispatch } from "react-redux";
import {
  ActionAccess,
  ActionTypeAccess,
} from "../../../../core/redux/actions/index";
const TableHeader: React.FC<Header> = (props) => {
  const [checkHeader, setCheckHeader] = useState<boolean>(false);
  const dispatch = useDispatch()
  const deleteAll=()=>{
    dispatch(ActionAccess.removeAccessData([]))
  }
  
  const onChange = (check: boolean) => {

     setCheckHeader(check);
    props.check_header(check);
  };
   useEffect(() => {
    if (
      props.checkSelect.every((item) => item.check === true) &&
      props.checkSelect.length === props.row_header!.length
    ) {
      setCheckHeader(true);
    } else if(props.checkSelect.some((item) => item.check === false))
      
    {
      setCheckHeader(false);
    }
 
  });

  return (
    <>
      <div className="header_spring ">
        <div className="top_header_table">
          <div className="wrapper_search">
            <Search placeholder={props.search_name} />
          </div>
          <div className="wrapper_icons">
            <ButtonDynamic
              theme_name="Tertiary"
              name={Svg.Plus}
              color="#5C6AC4"
              width="18"
              height="18"
              link="/price_list"
            >
              {props.name_button}
            </ButtonDynamic>

            <ButtonDynamic
              theme_name="Quaternary"
              name={Svg.Filter}
              color="#868686"
              width="18"
              height="18"
            >
              فیلتر
            </ButtonDynamic>
          </div>
        </div>
        <div className="bottom_header_table">
          {props.has_select === true && (
            <>
              <div className="header_checkbox">
                <Checkbox
                  sendCheckBoxValue={checkHeader}
                  getCheckBoxValue={onChange}
                />
              </div>
            </>
          )}
          {props.header_items!.map((item, index) => {
            return (
              <div key={index} className={props.them_header}>
                {item}
              </div>
            );
          })}

          {props.has_select === true  && checkHeader===true && 
           <div className="edit_icon_header">
               <div onClick={() =>deleteAll()}>
               <SvgIcon name={Svg.Delete} width="18" height="18" />
             </div>
           </div>
          }
        </div>
      </div>
    </>
  );
};



export { TableHeader };
