const path = require('path');
const fs = require('fs');
const myMarked = require('marked'); 

// en caso la ruta sea de un archivo
export const checkIfIsFile = (myRoute) => {
    return  fs.statSync(myRoute).isFile()
};
 
// en caso la ruta sea de un directorio
export const checkIfIsDirectory = (myRoute) => {
    return fs.statSync(myRoute).isDirectory()
}

// seleccionando rutas que tengan archivos .md
// export const fileMd = (myRoute) => {
//    return path.extname(myRoute) === '.md';
// };

// función de recursión
export const fileReturnMd = (myRoute) => {
    let collectionArrayPath = [];
    if (checkIfIsFile(myRoute)){
        collectionArrayPath.push(myRoute);
      } else {
    const files =  fs.readdirSync(myRoute);//lee el directorio de la ruta
    files.forEach(file => {
        let newRoute = path.join(myRoute, file);
            collectionArrayPath = collectionArrayPath.concat(fileReturnMd(newRoute))
    });
  }
    return collectionArrayPath;
};

// console.log(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba'));
// export const fileMd = (newRoute) => {
// //     const filesMd = newRoute.filter((file => path.extname(file) === '.md'));
// // console.log('gooooooo' + filesMd);
// }


// console.log(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba').filter((file => path.extname(file) === '.md')))

//Función que extrae los links de mis archivos .md

export const extractLinks = (myRoute) => {
    const linksExtracted = [];
    for(let i=0; i<myRoute.length; i++) {
        let file = myRoute[i];
        let readFile = fs.readFileSync(file, 'utf8');
        const renderer = new myMarked.Renderer();
        renderer.link = (href, title, text) => {
            return linksExtracted.push({
                href: href,
                text: text,
                file: file,
            });
        };
        myMarked(readFile, { renderer: renderer });
        
    };
    return linksExtracted;
};
