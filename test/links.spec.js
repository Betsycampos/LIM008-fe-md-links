import {checkIfIsFile, checkIfIsDirectory, fileReturnMd, extractLinks} from '../src/md-links/utils/links.js';
const path = require('path');
const arrObjtLinks = [ 
{ href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
   path.resolve('./prueba/readme.md')},
{ href: 'https://nodejs.org/',
  text: 'Node.js',
  file:
  path.resolve('./prueba/readme.md') },
{ href: 'https://nodejsorg/',
  text: 'Node.js',
  file:
  path.resolve('./prueba/readme.md')} 
];
describe('checkIfIsFile', () => {
    it('Debería ser una función', () => {
      expect(typeof checkIfIsFile).toBe('function');
    });
    it('Debería retornar true si la ruta es un archivo', () => {
      expect(checkIfIsFile(path.resolve('./src/md-links/index.js'))).toBe(true);
    });
  }); 

  describe('checkIfIsDirectory', () => {
    it('Debería ser una función', () => {
      expect(typeof checkIfIsDirectory).toBe('function');
    });
    it('Debería retornar false si la ruta no es un directorio', () => {
      expect(checkIfIsDirectory(path.resolve('./src/md-links/index.js'))).toBe(false);
    });
  }); 

describe('fileReturnMd', () => {
  it('Debería ser una función', () => {
    expect(typeof fileReturnMd).toBe('function');
  });
    it('debería retornar un array de strings', () => {
        expect(typeof fileReturnMd('./prueba')).toBe('object')
    });
  //   it('debería mostrar el array de strings de los archivos .md', () => {
  //     expect(fileReturnMd(path.resolve('./prueba/readme.md'))).toEqual([path.resolve('./prueba/readme.md')]);
  // });
    it('debería mostrar el array de strings de los archivos .md', () => {
        expect(fileReturnMd(path.resolve('./prueba'))).toEqual([path.resolve('./prueba/interno/'),
        path.resolve('./prueba')]);
    });
});

 describe('extractLinks', () => {
   it('Debería ser una función', () => {
     expect(typeof extractLinks).toBe('function');
   });
   it('debería retornar un array de objetos con las propiedades href, text, file  de los links extraidos', () => {
    expect(extractLinks([path.resolve('./prueba/interno/read.md'),
    path.resolve('./prueba/readme.md')])).toEqual(arrObjtLinks);
   });
 });
