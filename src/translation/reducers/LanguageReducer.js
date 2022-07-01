import { languages } from '../languages'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { getActiveLanguage } from '../../Functions';

const INITIAL_STATE = languages.english;
export default (state = INITIAL_STATE, action) => {
    // console.log(state,action,'languages');
 switch(action.type) {
  case 'language_data':
   return action.payload;
  default: 
   return state;
 }
};



