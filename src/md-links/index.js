import {checkIfRouteIsAbsolute, transformRelativePath} from './utils/path.js';
import {fileMd, extractLinks} from './utils/links.js';
import {validateLinks} from './utils/validate.js';
// lo que tengo que considerar en esta función es
// ver si mi ruta es absoluta, funcion recursiva
// extraer links
// validar

export const mdLinks = (path, options) => {
  let newPath = path;
  return new Promise((resolve) => {
    if (checkIfRouteIsAbsolute(path)) {
      newPath = transformRelativePath(path);  
    }
    const routeRecv = fileMd(newPath); 
    const extractLink = extractLinks(routeRecv); 
    if (options.validate) {
      validateLinks(extractLink)
        .then(response => resolve(response))
    } else {
      resolve(extractLink);
    }
  });
};
// mdLinks("C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba", {validate: true}).then(resp => console.log(resp))