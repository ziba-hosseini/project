import React from "react";
import './ModalDynamic.scss';
import { connect } from 'react-redux';
import { AppState } from '../../../../core/redux/store/store';
interface props {
  children: React.ReactNode;
}

const ModalDynamic_: React.FC<props> = (props) => {

  return <div className="modal">{props.children}</div>
};

interface LinkStateToProps {
  isOpenProduct: boolean,
  isOpenAccess: boolean
}

const mapStateToProps = (state: AppState): LinkStateToProps => {
  return {

    isOpenAccess: state.ModalReducer.isOpenAccess,
    isOpenProduct: state.ModalReducer.isOpenProduct
  }
}



const ModalDynamic = connect(mapStateToProps, null)(ModalDynamic_)
export { ModalDynamic };
