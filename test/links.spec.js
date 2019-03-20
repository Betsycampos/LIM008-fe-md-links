import {checkIfIsFile, checkIfIsDirectory, fileReturn, fileMd, extractLinks} from '../src/md-links/utils/links.js';
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
const arrObjtLinks1 = [
  path.resolve('./prueba/app.js'),
  path.resolve('./prueba/interno/index.html'),
  path.resolve('./prueba/interno/read.md'),
  path.resolve('./prueba/readme.md')
];
const arrObjtLinks2 = [
  path.resolve('./prueba/interno/read.md'),
  path.resolve('./prueba/readme.md')
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

describe('fileReturn', () => {
  it('Debería ser una función', () => {
    expect(typeof fileReturn).toBe('function');
  });
    it('debería retornar un array de strings', () => {
        expect(typeof fileReturn('./prueba')).toBe('object')
    });
    it('debería mostrar el array de strings de los archivos', () => {
        expect(fileReturn(path.resolve('./prueba'))).toEqual(arrObjtLinks1);
    });
});

describe('fileMd', () => {
  it('Debería ser una función', () => {
    expect(typeof fileMd).toBe('function');
  });
    it('debería retornar un array de strings', () => {
        expect(typeof fileMd('./prueba')).toBe('object')
    });
    it('debería mostrar el array de strings de los archivos .md', () => {
        expect(fileMd(path.resolve('./prueba'))).toEqual(arrObjtLinks2);
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
