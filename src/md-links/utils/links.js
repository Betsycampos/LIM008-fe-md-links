const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const myMarked = require('marked'); 
// const fetch = require('node-fetch');

// en caso la ruta sea de un archivo
export const checkIfIsFile = (myRoute) => {
    return  fs.statSync(myRoute).isFile()
};
 
// en caso la ruta sea de un directorio
export const checkIfIsDirectory = (myRoute) => {
    return fs.statSync(myRoute).isDirectory()
}

// seleccionando rutas que tengan archivos .md
export const fileMd = (myRoute) => {
   return path.extname(myRoute) === '.md';
};

// función de recursión
export const fileReturnMd = (myRoute) => {
    let collectionArrayPath = [];
    const files =  fs.readdirSync(myRoute);//lee el directorio d ela ruta
    files.forEach(file => {
        let newRoute = path.join(myRoute, file);
       // let route = fs.statSync(newRoute);
        if(checkIfIsDirectory(newRoute)){
            collectionArrayPath = collectionArrayPath.concat(fileReturnMd(newRoute))
        } else if(checkIfIsFile(newRoute) && fileMd(newRoute) ){
            collectionArrayPath.push(newRoute);
        }
    });
    return collectionArrayPath;
};
 //console.log (fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba'));

//Función que extrae los links de mis archivos .md

export const extractLinks = (myRoute) => {
    const linksExtracted = [];
    for(let i=0; i<myRoute.length; i++) {
        let file = myRoute[i];
        let readFile = fs.readFileSync(file, 'utf8');
        const renderer = new myMarked.Renderer();
        // console.log(readFile);
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

// console.log(extractLinks(['C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md']));

// console.log(extractLinks(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba')));