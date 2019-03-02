const path = require('path');


export const checkIfRouteIsAbsolute = (rutaabsoluta) =>{
    return path.isAbsolute(rutaabsoluta);
    
};
export const transformRelativePath = (rutaRelativa) =>{
    return path.resolve(rutaRelativa);
};

// //let archivo = 
// export const recorrerCarpeta = () =>{

// };  
// export const archivoEsMd = () =>{

//  };
