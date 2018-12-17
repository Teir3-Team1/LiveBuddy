import { SETTINGS_SET_COLORS } from '../actions/types';

// Settings reducer

const initialSettings={
    colors:{
      primaryColor: "#01c570",
      secondaryColor: "#f2711c",
      colorWhite:'#fff',
      colorBlack:'#000'
    }
  }
  
export default (state=initialSettings,action)=>{
    switch(action.type){
      case SETTINGS_SET_COLORS:
           return{
                ...state,  
                colors:{
                    primaryColor: action.payload.primaryColor,
                    secondaryColor: action.payload.secondaryColor,
                    colorWhite:action.payload.colorWhite,
                    colorBlack:action.payload.colorBlack,

                }
           };
      default:
           return state;     
    }
  }