import React from "react";
import { Table } from "../../organisms/Table/Table";
import { HeaderModal } from "../../organisms/index";
import { ItemData, ProductType } from "../../../../core/models/models";
import "./Product.scss";

interface props {
  product: ProductType[] | undefined;
}

const Products: React.FC<props> = (props) => {
  const header = ["کدمحصول", "نام محصول", "قیمت واحد",];

  const creatorRowProduct = (item: ProductType, id: number): ItemData[] => {
    const ItemData: ItemData[] = [];
    const data = Object.keys(item);
    data.forEach((key, index) => {
      if (key !== "id") {
        

        ItemData.push({ name:item[key as keyof ProductType] as string , width: "25%",});
      }
    });

    return ItemData;
  };


  
 const saveModal=()=>{
  alert("save")
}

const saveAndNew=()=>{
 alert("save and new")
}

  return (
    <>
      <HeaderModal 
       name="محصولات" 
        saveAndNew={saveAndNew}
        saveModal={saveModal}
      />



      <Table<ProductType>
        theme="table_price"
        them_header="table_product_header"
        them_row="table_product_row"
        header_items={header}
        row_items={props.product as ProductType[]}
        search_name="جست وجوی  کاربر/گروه/سمت"
        name_button="محصول"
        list_items={creatorRowProduct}
        has_select={true}
      />
    </>
  );
};

export { Products };
