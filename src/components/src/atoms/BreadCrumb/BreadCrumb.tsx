import React from "react";
import { Link } from "react-router-dom";
import './BreadCrumb.scss';


interface props{
  name:string,
  path:string,
  key:number,
  crumbs:[]
}



const Breadcrumb : React.FC<props> = ({ crumbs }:{crumbs:[]}) => {
  if (crumbs.length <= 0) {
    return null;
  }

  return (
    <div className="bread_crumb">
      {crumbs.map(({ name, path }:props, key:number) =>
        key + 1 === crumbs.length ? (
          <span key={key} className="bold active">
            {name}
          </span>
        ) : (
          <Link key={key} className="underline" to={path}>
            {name+" > "}
          </Link>
        )
      )}
    </div>
  );
};

export  {Breadcrumb};