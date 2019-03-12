import {validateLinks} from '../src/md-links/utils/validate.js'
const arrObjta = [ 
{ href: 'https://es.wikipedia.org/wiki/Markdown',
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
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' }
];

const arrObjt =[ 
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
  ];
 
  const error = [
    'https://developer.mozilla.org/es/docs/W'
  ]
describe('validateLinks', () => {
    it('Debería ser una función', () => {
        expect(typeof validateLinks).toBe('function');
    });
    it('debería retornar un array de objetos con las propiedades href, text, file, status, message', (done) => {
        validateLinks(arrObjta).then((resolve) => {
        expect(resolve).toEqual(arrObjt);
        done();
     });
     });
});