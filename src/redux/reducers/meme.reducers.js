import MemeActionTypes from "../constants/meme.types";

const INITIAL_STATE = {
  memes: []
}

export const memeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MemeActionTypes.TEMPLATE_IMAGE:
      return {
        ...state,
        templateImage: action.payload
      }
    case MemeActionTypes.FETCH_ALL:
      return {
        ...state,
        memes: action.payload
      }
    case MemeActionTypes.CREATE:
      return {
        ...state,
        memes: [...state.memes, action.payload]
      }
    case MemeActionTypes.UPDATE:
      return {
        ...state,
        memes: state.memes.map((meme) => (meme._id === action.payload._id ? action.payload : meme))
      }
    case MemeActionTypes.DELETE:
      return {
        ...state,
        memes: state.memes.filter((meme) => meme._id !== action.payload)
      }
    default:
      return state;
  }
};

export default memeReducer;