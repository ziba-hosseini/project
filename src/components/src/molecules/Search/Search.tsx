import React, { Dispatch, useState } from "react";
import "./Search.scss";
import { SvgIcon } from "../../atoms";
import { Svg } from "../../../../core/models/models";
import { connect } from "react-redux";
import {
  Data_Search,
  TypeDataSearch,
} from "../../../../core/redux/actions/index";
import { AppState } from "../../../../core/redux/store/store";

interface propsOwn {
  placeholder?: string;
  onChange?: () => void;
}
type props = propsOwn & LinkDispatchToProps;
const Search_: React.FC<props> = (props) => {
  const [search, setSearch] = useState();

  const handleSearch = (e: { target: { value: any } }) => {
    props.handlerSearch(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div className="svg_style">
      <SvgIcon name={Svg.Search} width="18" height="18" color="#868686" />
      <input
        className="search_style"
        placeholder={props.placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

interface LinkDispatchToProps {
  handlerSearch: (data: string) => void;
}

const mapDispatchToProps = (
  dispatch: Dispatch<TypeDataSearch>
): LinkDispatchToProps => ({
  handlerSearch: (data: string) => dispatch(Data_Search(data)),
});

const Search = connect(null, mapDispatchToProps)(Search_);

export { Search };
