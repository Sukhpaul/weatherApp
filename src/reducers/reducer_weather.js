//jshint esversion:6
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  	case FETCH_WEATHER:
  	  // return new instance of state NEVER manipulate state directly
  	  //return state.concat([action.payload.data]);
  	  //same as below:
  	  return [ action.payload.data, ...state ];
  }


  return state;
}