import React, { useEffect, useState, Dispatch } from "react";
import { Table } from "../../organisms/index";
import { connect } from "react-redux";
import { AppState } from "../../../../core/redux/store/store";
import { ModalDynamic, Checkbox } from "../../atoms/index";
import { AccessData, Products } from "../index";

import {
  ActionsModal,
  ActionPrice,
  ActionTypePrice,
  ActionAccess
} from "../../../../core/redux/actions/index";
import {
  ItemData,
  Item,
  AccessType,
  ProductType,
  CustomerType,
} from "../../../../core/models/models";
import "./SpringPart.scss";
import { TooltipDynamic } from "../../atoms/TooltipDynamic/TooltipDynamic";
interface propsPage {
  handlerModalData: (item: AccessType[]) => void;
  isOpenAccess: boolean;
  isOpenProduct: boolean;
}

type props = LinkStateToProps & LinkDispatchToProps & propsPage;
const SpringPart_: React.FC<props> = (props) => {
  const shoe_list:string[] = ["Prada", "Jimmy Choos", "Nike", "Adidas"]
  let filterData;
  const [access, setAccess] = useState<number>(0);
  const [product, setProduct] = useState<number>(0);
  const [choose, setChoose] = useState();
  const header = [
    "عنوان لیست قیمت",
    "مدت اعتبار",
    "ارز",
    "دسترسی ها",
    "نوع پروفابل",
    "کلاس مشتری",
    "محصولات",
    "توضیحات",
  ];

  //fetch table data
  useEffect(() => {
    props.handlerData();
  }, []);

  //add data to Access modal
  const handlerModalData = (item: number) => {
    setAccess(item);
    props.handlerModalAccess();
    props.handlerGetAccess(props.price[item].access)
  };
  //add data to Product modal
  const handlerModalProduct = (item: number) => {
    setProduct(item);
    props.handlerModalProduct();
  };
  //result search
  if (props.search !== null) {
    filterData = props.price.filter((item) => {
      return item.name.includes(props.search);
    });
  }

  const creator = (item: Item, id: number): ItemData[] => {
    const item_data: ItemData[] = [];
    const data = Object.keys(item);

    data.forEach((key, index) => {
      if (key === "product") {
        item_data.push({
          name: "محصولات",
          getData: () => handlerModalProduct(id),
          width: "10%",
        });
      } else if (key === "access") {
        item_data.push({
          name: "دسترسی ها",
          getData: () => handlerModalData(id),
          width: "10%",
        });
      } else if (key === "customer_class") {
        item_data.push({
          name: "کلاس مشتری",
          Hovering: () => {
            // const role = item["customer_class"].map((roles: CustomerType) => {
            //   return (
            //     <span className="inside_customer_tooltip">{roles.role}</span>
            //   );
            // });
             
            //return     <TooltipDynamic message={"نننننن"} position={'bottom'}>{"کلاس مشتری"}</TooltipDynamic>
        
          },
          width: "10%",
        });
      } else if (key !== "id") {
        item_data.push({
          name: item[key as keyof Item] as string,
          width: "10%",
        });
      }
    });

    return item_data;
  };

  return (
    <div className="spring_part">
      <div className="content_spring">
        <Table<Item>
          theme="table_price"
          them_header="table_header"
          them_row="table_row"
          header_items={header}
          row_items={filterData as Item[]}
          search_name="جست وجوی لیست "
          name_button="لیست قیمت"
          list_items={creator}
          has_select={false}
        />
      </div>
      {props.isOpenAccess && (
        <ModalDynamic>
          <AccessData  />
        </ModalDynamic>
      )}
      {props.isOpenProduct && (
        <ModalDynamic>
          <Products product={props.price[product].product} />
        </ModalDynamic>
      )}

       

    </div>
  );
};

interface LinkStateToProps {
  price: Item[];
  isOpenAccess: boolean;
  isOpenProduct: boolean;
  search: string;
}
interface LinkDispatchToProps {
  handlerModalAccess: () => void;
  handlerModalProduct: () => void;
  handlerData: () => void;
  handlerGetAccess:(data:AccessType[])=>void
}

const mapStateToProps = (state: AppState): LinkStateToProps => {
  return {
    price: state.reducerTableData.price.data,
    isOpenAccess: state.ModalReducer.isOpenAccess,
    isOpenProduct: state.ModalReducer.isOpenProduct,
    search: state.SearchReducer.search,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypePrice>
): LinkDispatchToProps => ({
  handlerData: () => dispatch(ActionPrice.ActionFetchData()),
  handlerModalAccess: () => dispatch(ActionsModal.ToggleModalAccess()),
  handlerModalProduct: () => dispatch(ActionsModal.ToggleModalProduct()),
  handlerGetAccess:    (data)=>dispatch(ActionAccess.getAccess(data))
});

const SpringPart = connect(mapStateToProps, mapDispatchToProps)(SpringPart_);
export { SpringPart };

