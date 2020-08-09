import React, { Dispatch } from "react";
import "./HeaderModal.scss";
import { connect } from "react-redux";
import close from "../../../../assets/images/icons/close.svg";
import { AppState } from "../../../../core/redux/store/store";
import {
  ActionsModal,
  ActionTypeModal,
} from "../../../../core/redux/actions/index";
import { ButtonDynamic } from "../../molecules/index";

interface propsName {
  name?: string;
  handlerSecondary?: Function;
  handlerPrimary?: Function;
  saveAndNew: () => void;
  saveModal: () => void;
}

type props = LinkDispatchToProps & LinkStateToProps & propsName;

const HeaderModal_: React.FC<props> = (props) => {
  const handlerClose = () => {
    props.handlerModalAccess();
    props.handlerModalProduct();
  };

  return (
    <div className="header_for_modal">
      <div className="name_page">{props.name}</div>
      <div className="button_page">


        <ButtonDynamic
          theme_name="Primary"
          onClick={() => props.saveAndNew()}
          color="Primary"
        >
          ذخیره کردن
        </ButtonDynamic>


        <ButtonDynamic 
         theme_name="Secondary" 
         onClick={()=>props.saveAndNew()}
         color="secondry">
          ذخیره‌وجدید
        </ButtonDynamic>

        <button className="close_button" onClick={() => handlerClose()}>
          <img src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};

interface LinkStateToProps {
  isOpenProduct: boolean;
  isOpenAccess: boolean;
}

interface LinkDispatchToProps {
  handlerModalProduct: () => void;
  handlerModalAccess: () => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => {
  return {
    isOpenProduct: state.ModalReducer.isOpenProduct,
    isOpenAccess: state.ModalReducer.isOpenAccess,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypeModal>
): LinkDispatchToProps => ({
  handlerModalProduct: () => dispatch(ActionsModal.CloseModalProduct()),
  handlerModalAccess: () => dispatch(ActionsModal.CloseModalAccess()),
});

const HeaderModal = connect(mapStateToProps, mapDispatchToProps)(HeaderModal_);
export { HeaderModal };
