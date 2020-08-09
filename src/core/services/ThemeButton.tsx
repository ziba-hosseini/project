import {Color} from './index';

const Primary={
    backgroundColor:Color.Primary,
    color:Color.White,
    borderColor:Color.Primary} 

const Secondary={
    backgroundColor:Color.White,
    color:Color.Primary,
    borderColor:Color.Border
}
const Tertiary={
    backgroundColor:Color.LightInfo,
    color:Color.Secondary,
    borderColor:Color.LightInfo
}

const Quaternary={
    backgroundColor:Color.White,
    color:Color.Subtitle,
    borderColor:Color.White 
}
export const ThemeButton={
    Primary,
    Secondary,
    Tertiary,
    Quaternary
}