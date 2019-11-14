import { UPDATE_MARKDOWN, SET_ACTIVE_TAB } from '../actions/editorActions';

const initialState = {
  active: 0,
  list: ['# Hi there', '# sup sup', '# macaroon']
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return {
        ...state, list: state.list.map((item, i) => {
          if(i === state.active) { return action.payload; }
          else { return item; }
        })
      };
    case SET_ACTIVE_TAB:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
