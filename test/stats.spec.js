import {checkIfIsFile, traverseIfDirectory} from '../src/md-links/utils/stats.js'
describe('checkIfIsFile', () => {
    it('Debería ser una función', () => {
      expect(typeof checkIfIsFile).toBe('function');
    });
    it('Debería retornar true si la ruta es un archivo', () => {
      expect(checkIfIsFile('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\src\\md-links\\index.js')).toBe(true);
    });
  }); 

describe('traverseIfDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof traverseIfDirectory).toBe('function');
  });
    it('debería retornar un array de strings', () => {
        expect(typeof traverseIfDirectory('./prueba')).toBe('object')
    });
    it('debería mostrar el array de strings de los archivos md', () => {
        expect(traverseIfDirectory('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba')).toEqual([ 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\interno\\read.md',
        'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' ])
    });
});
