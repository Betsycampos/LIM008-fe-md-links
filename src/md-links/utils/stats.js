// import {validateLinks} from '../src/md-links/utils/validate.js'
export const linksUnique = (arrObjt) => {
    const newSetLinks = [...new Set(arrObjt.map((links) => links.href))];

    return newSetLinks.length;
  };
console.log(linksUnique([ { href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
{ href: 'https://nodejsorg/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
 { href: 'https://nodejs.org/',
 text: 'Node.js',
 file:
  'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' }]));
export const totalStast = (arrObjt) => {
    const arrObjtTotal = arrObjt.length
    return arrObjtTotal
};
console.log(totalStast([ { href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
{ href: 'https://nodejsorg/',
text: 'Node.js',
file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
 { href: 'https://nodejs.org/',
 text: 'Node.js',
 file:
  'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' }]));

export const brokenStats = (arrObjt) => {
        const arrayBroken = arrObjt.filter(link => link.stat === 'FAIL').length;
        return arrayBroken;
};

console.log(brokenStats([ 
    { href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',    file:
       'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md',
      code: 200,
      stat: 'OK' },
    { href: 'https://nodejs.org/',
      text: 'Node.js',
      file:
       'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md',
      code: 200,
      stat: 'OK' },
    { href: 'https://nodejsorg/',
      text: 'Node.js',
      file:
       'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md',
      code: 'No es una URL válida',
      stat: 'FAIL' }
  ]));
