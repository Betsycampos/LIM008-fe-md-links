const path = require('path');


export const checkIfRouteIsAbsolute = (myRoute) =>{
    return path.isAbsolute(myRoute);
    
};
export const transformRelativePath = (myRoute) =>{
    return path.resolve(myRoute);
};
