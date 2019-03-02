const fs = require('fs');

export const checkIfIsFile = (route) => {
    return  fs.statSync(route).isFile()
};
