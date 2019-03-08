import {checkIfIsFile, checkIfIsDirectory, fileReturnMd} from '../src/md-links/utils/stats.js'
describe('checkIfIsFile', () => {
    it('Debería ser una función', () => {
      expect(typeof checkIfIsFile).toBe('function');
    });
    it('Debería retornar true si la ruta es un archivo', () => {
      expect(checkIfIsFile('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\src\\md-links\\index.js')).toBe(true);
    });
  }); 

  describe('checkIfIsDirectory', () => {
    it('Debería ser una función', () => {
      expect(typeof checkIfIsDirectory).toBe('function');
    });
    it('Debería retornar false si la ruta no es un directorio', () => {
      expect(checkIfIsDirectory('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\src\\md-links\\index.js')).toBe(false);
    });
  }); 

describe('fileReturnMd', () => {
  it('Debería ser una función', () => {
    expect(typeof fileReturnMd).toBe('function');
  });
    it('debería retornar un array de strings', () => {
        expect(typeof fileReturnMd('./prueba')).toBe('object')
    });
    it('debería mostrar el array de strings de los archivos md', () => {
        expect(fileReturnMd('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba')).toEqual([ 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\interno\\read.md',
        'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' ])
    });
});
