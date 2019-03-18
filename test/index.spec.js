import { mdLinks } from '../src/md-links/index.js';
const path = 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba';
const options = {
  validate: false,
};
const arrLinksValidate = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md',
    code: 200,
    statusText: 'OK' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md',
    code: 200,
    statusText: 'OK' },
  { href: 'https://nodejsorg/',
    text: 'Node.js',
    file:
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md',
    code: 'No es una URL válida',
    statusText: 'FAIL' } 
];

const arrObjtLinks = [ 
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
describe('mdLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('debería retornar un array de objetos con las propiedades href, text, file, status y statusTex', (done) => {
    mdLinks(path, {validate: true})
      .then((resolve) => {
        expect(resolve).toEqual(arrLinksValidate);
        done();
      });
  });
  it('Debería retornar un array de objetos con las propiedades href, text y file', (done) => {
    mdLinks(path, options)
      .then((resolve) => {
        expect(resolve).toEqual(arrObjtLinks);
        done();
      });
  }); 
});