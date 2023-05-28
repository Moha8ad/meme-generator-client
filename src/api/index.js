import axios from 'axios';

const API = axios.create({ baseURL: 'https://meme-generator-server.onrender.com' });

const memeUrl = '/meme';

export const fetchMemes = () => API.get(memeUrl);
export const createMeme = (newMeme) => API.post(memeUrl, newMeme);
export const updateMeme = (id, updatedMeme) => API.patch(`${memeUrl}/${id}`, updatedMeme);
export const deleteMeme = (id) => API.delete(`${memeUrl}/${id}`);
