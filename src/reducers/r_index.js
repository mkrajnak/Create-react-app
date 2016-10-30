import { combineReducers } from 'redux'

import counting from './counting.js';
import vmAdd from './addVM.js';

const vmApp = combineReducers({
  counting,
  vmAdd
});

export default vmApp;
