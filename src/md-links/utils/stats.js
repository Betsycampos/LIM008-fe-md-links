const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const myMarked = require('marked'); 

// en caso la ruta sea de un archivo
export const checkIfIsFile = (myRoute) => {
    return  fs.statSync(myRoute).isFile()
};

export const checkIfIsDirectory = (myRoute) => {
    return fs.statSync(myRoute).isDirectory()
}

export const fileMd = (myRoute) => {
   return path.extname(myRoute) === '.md';
};

//en caso la ruta sea de un directorio
export const fileReturnMd = (myRoute) => {
    let collectionArrayPath = [];
    const files =  fs.readdirSync(myRoute);
    files.forEach(file => {
        let newRoute = path.join(myRoute, file);
       // let route = fs.statSync(newRoute);
        if(checkIfIsDirectory(newRoute)){
            collectionArrayPath = collectionArrayPath.concat(traverseIfDirectory(newRoute))
        } else if(checkIfIsFile(newRoute) && fileMd(newRoute) ){
            collectionArrayPath.push(newRoute);
        }
    });
    return collectionArrayPath;
};
console.log (traverseIfDirectory('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba'));

// export const extraerLosLinks = (arrRutasArchivos) => {
//     const links = [];
//     // console.log('holaa', arrRutasArchivos);
    
//    /*  for(let i=0; i<arrRutasArchivos.length; i++) {
//         let archivo = arrRutasArchivos[i]
//         let leerArchivo = fs.readFileSync(archivo, 'utf8');
//         const renderer = new myMarked.Renderer();
//         //console.log(renderer);
//         // console.log(renderer.link);
//         renderer.link = (href, title, text) => {
//            return links.push({
//             href: href,
//             text: text,
//             file: archivo,
//             });
//         }; */
//         // console.log(renderer.link)
//         //myMarked(leerArchivo, { renderer: renderer });
//     //}
//     return links;
//   }

// // console.log(extraerLosLinks(datos));


          