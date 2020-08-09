import React from "react";
import { AccessType, ItemData } from "../../../../core/models/models";
import { Table } from "../../organisms/index";
import { HeaderModal } from "../../organisms/index";
import "./AccessData.scss";
import { Svg } from "../../../../core/models/models";
import { AppState } from "../../../../core/redux/store/store";
import { connect } from "react-redux";
interface propsOwn {
  access?: AccessType[];
}

type props = LinkStateToProps & propsOwn;
const AccessData_: React.FC<props> = (props) => {
  console.log(props,"propsdata")
  let filterData;
  const header = ["کاربر/گروه/سمت", "میزان دسترسی"];
  //result search

  if (props.search !== null) {
    filterData = props.accessData?.filter((item) => {
      return item.name.includes(props.search!);
    });
  }


  const creatorRowAccess = (item: AccessType, id: number): ItemData[] => {
    const data_access: ItemData[] = [];
    const data = Object.keys(item);
    data.forEach((key, index) => {
      if (key === "access_rate" && item["access_rate"] === "view") {
        data_access.push({
          icon: Svg.VIEW,
          name: "مشاهده",
          width: "20%",
        });
      } else if (
        key === "access_rate" &&
        (item["access_rate"] as string) === "edit"
      ) {
        data_access.push({
          icon: Svg.EDit,
          name: "مشاهده و‌ویرایش",
          width: "20%",
        });
      } else if (
        key === "access_rate" &&
        (item["access_rate"] as string) === "admin"
      ) {
        data_access.push({
          icon: Svg.ADMIN,
          name: "مدیر",
          width: "20%",
        });
      } else if (key !== "id" && key !== "icon" && key !== "select") {
        data_access.push({
          name: item[key as keyof AccessType] as string,
          width: "23%",
        });
      }
    });

    return data_access;
  };

  const saveModal = () => {
    alert("save");
  };

  const saveAndNew = () => {
    alert("save and new");
  };

  return (
    <>
      <HeaderModal
        saveAndNew={saveAndNew}
        saveModal={saveModal}
        name="دسترسی"
      />

      <Table<AccessType>
        theme="table_price"
        them_header="table_access_header"
        them_row="table_row"
        header_items={header}
        row_items={filterData as AccessType[]}
        search_name="جست وجوی  کاربر/گروه/سمت"
        list_items={creatorRowAccess}
        name_button="دسترسی"
        has_select={true}
      />
    </>
  );
};

interface LinkStateToProps {
  search?: string;
  accessData?:AccessType[]
}

const mapStateToProps = (state: AppState): LinkStateToProps => {
  return {
    search: state.SearchReducer.search,
    accessData:state.reducerAccess.accessData
  };
};

const AccessData = connect(mapStateToProps, null)(AccessData_);
export { AccessData };
