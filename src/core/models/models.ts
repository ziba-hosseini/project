export interface Config {
  baseServerUrl: string;
}

export interface ExceptionModel {
  status: string;
  message: string;
}

export interface ActionModel<TPayload, TMeta> {
  type: string;
  loading?: boolean;
  payload?: TPayload;
  error?: boolean;
  meta?: TMeta;
}

export interface InitialType {
  price: Price;
}
export interface Price {
  loading: boolean;
  data: Item[];
  loaded: boolean;
  error: string;
}

export interface InitialType {
  price: Price;
}
//type state price
export interface Price {
  loading: boolean;
  data: Item[];
  loaded: boolean;
  error: string;
}
//type items state
export interface Item {
  id: number;
  name: string;
  validate: string;
  currency: string;
  access: AccessType[];
  profile: string;
  customer_class: string[];
  product: ProductType[];
  detail: string;
}

///
//access type
export interface AccessType {
  select: boolean;
  icon: boolean;
  name: string;
  access_rate: string;
  id: number;
  row_id?: number;
  getCheckBox: () => void;
}

//product type
export interface ProductType {
  id: number;
  code: number;
  name: string;
  price: number;
}

//type modal

export interface TypeModal {
  isOpenAccess: boolean;
  isOpenProduct: boolean;
}


export interface BreadCrumb {
  name: string;
  path: string;
  key: number;
  crumbs: [];
}

export enum Svg {
  Delete = "M13 12H17V14H13V12ZM13 4H20V6H13V4ZM13 8H19V10H13V8ZM1 14C1 15.1 1.9 16 3 16H9C10.1 16 11 15.1 11 14V4H1V14ZM12 1H9L8 0H4L3 1H0V3H12V1Z",
  Plus = "M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z",
  Close = "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
  Filter = "M2.99969 2H12.9997L7.98969 8.3L2.99969 2ZM0.24969 1.61C2.26969 4.2 5.99969 9 5.99969 9V15C5.99969 15.55 6.44969 16 6.99969 16H8.99969C9.54969 16 9.99969 15.55 9.99969 15V9C9.99969 9 13.7197 4.2 15.7397 1.61C16.2497 0.95 15.7797 0 14.9497 0H1.03969C0.20969 0 -0.26031 0.95 0.24969 1.61Z",
  Info = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z",
  Search = "M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",
  VIEW = "M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z",
  EditPEN = "M0 14.2525V18.0025H3.75L14.81 6.9425L11.06 3.1925L0 14.2525ZM17.71 4.0425C18.1 3.6525 18.1 3.0225 17.71 2.6325L15.37 0.2925C14.98 -0.0975 14.35 -0.0975 13.96 0.2925L12.13 2.1225L15.88 5.8725L17.71 4.0425Z",
  ADMIN = "M18 4H14V2C14 0.89 13.11 0 12 0H8C6.89 0 6 0.89 6 2V4H2C0.89 4 0.00999999 4.89 0.00999999 6L0 17C0 18.11 0.89 19 2 19H18C19.11 19 20 18.11 20 17V6C20 4.89 19.11 4 18 4ZM12 4H8V2H12V4Z",
  EDit = "M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z",
}

export enum ItemTableType {
  InputSelect = "InputSelect",
  Text = "Text",
  customText = "customText",
}

export interface TableType<TEntity> {
  list_items(row: TEntity, index: number): ItemData[];
  item_data?: TEntity;
  row_items: TEntity[];
  them_header?: string;
  them_row?: string;
  theme?: string;
  header_items?: string[];
  select_change?: TEntity[];
  search_name?: string;
  has_select: boolean;
  name_button?: string;
  data_row?: ItemData[];
  row?: TEntity;
  getData?: () => void;
  id?: number;
  search?: string,
}
export interface ItemData {
  key?: string;
  width: string;
  getData?: () => void | null;
  name: string;
  icon?: string;
  id?: number;
  Hovering?:(() => void) | undefined
}

export interface Header {
  add_input?: boolean;
  header_items?: string[];
  them_header?: string;
  search_name?: string;
  name_button?: string;
  row_header?: object[];
  theme?: string;
  has_select: boolean;
  checkSelect: checkAll[];
  check_header:(check:boolean)=>void
 
}

export interface checkAll {
  id: number;
  check: boolean;
}
export interface CustomerType{
  role:"string"
}