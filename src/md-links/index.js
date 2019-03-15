import {checkIfRouteIsAbsolute} from './utils/path.js'
import {fileReturnMd, extractLinks} from './utils/links.js'
import {validateLinks} from './utils/validate.js'
//lo que tengo que considerar en esta función es
//ver si mi ruta es absoluta, funcion recursiva
//extraer links
//validar
const options = {
validate: false,
}

const mdLinks = (path, options) => {
 let newPath = path;
 return new Promise((resolve, reject) => {
     if(checkIfRouteIsAbsolute(path)=== false) {
       newPath = transformRelativePath(path)  
     }
     const routeRecv = fileReturnMd(newPath); 
     const extractLink = extractLinks(routeRecv); 
       if (options.validate === true) {
            validateLinks(extractLink)
           .then(response =>resolve(response))
           .catch(err => resolve(err))
         } else {
           resolve(extractLink)
        }
    })
};
mdLinks("C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba", {validate: true}).then(resp => console.log(resp))