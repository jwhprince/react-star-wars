import { GUIDE_IMG_EXTENSION, URL_IMG_PERSON, HTTPS, HTTP, SWAPI_ROOTT, SWAPI_PEOPLEE, SWAPI_PARAM_PAGEE } from '../constants/api';



export const getPeoplePageId = url => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGEE);
  const id = url.slice(pos + SWAPI_PARAM_PAGEE.length)

  return Number(id);
}

const checkProtocol = url => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS;
  }
  return HTTP;
}

const getId = (url, category) => {
  const protocol = checkProtocol(url);
  const id = url
    .replace(protocol + SWAPI_ROOTT + category, '')
    .replace(/\//g, '')
  return id;
}


export const getPeopleId = url => getId(url, SWAPI_PEOPLEE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
