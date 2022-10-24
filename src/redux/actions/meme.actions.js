import MemeActionTypes from '../constants/meme.types.js';

import * as api from '../../api/index.js';

export const selectTemplateImage = templateImage => ({
  type: MemeActionTypes.TEMPLATE_IMAGE, 
  payload: templateImage 
})

export const getMemes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemes();

    dispatch({ 
      type: MemeActionTypes.FETCH_ALL, 
      payload: data 
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMeme = (meme) => async (dispatch) => {
  try {
    const { data } = await api.createMeme(meme);

    dispatch({ 
        type: MemeActionTypes.CREATE, 
        payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMeme = (id, meme) => async (dispatch) => {
  try {
    const { data } = await api.updateMeme(id, meme);

    dispatch({ 
        type: MemeActionTypes.UPDATE, 
        payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMeme = (id) => async (dispatch) => {
  try {
    await api.deleteMeme(id);

    dispatch({ 
        type: MemeActionTypes.DELETE, 
        payload: id });
  } catch (error) {
    console.log(error.message);
  }
};