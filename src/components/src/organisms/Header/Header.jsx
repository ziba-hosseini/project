import React from 'react';
import './Header.scss'
import { Breadcrumb } from '../../atoms/index';
function Header(props) {

  return (
    <div className="box_header_site">
      <div className="menu_top">menu</div>
      <Breadcrumb crumbs={props.crumbs} />

    </div>
  )
}

export { Header }
