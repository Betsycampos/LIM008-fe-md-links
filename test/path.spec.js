import {checkIfRouteIsAbsolute, transformRelativePath} from '../src/md-links/utils/path.js'
describe('checkIfRouteIsAbsolute', () => {
    it('Debería ser una función', () => {
      expect(typeof checkIfRouteIsAbsolute).toBe('function');
    });
    it('Debería retornar true si la ruta es absoluta', () => {
      expect(checkIfRouteIsAbsolute('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\src\\md-links\\index.js')).toBe(true);
    });
    it('Debería retornar false si la ruta no es absoluta', () => {
      expect(checkIfRouteIsAbsolute('./src/md-links/index.js')).toBe(false);
    })
  });

describe('transformRelativePath', () => {
  it('Debería ser una función', () => {
    expect(typeof transformRelativePath).toBe('function');
  });
  it('Debería retornar la ruta transformada en absoluta', () => {
    expect(transformRelativePath('./src/md-links/index.js')).toBe('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\src\\md-links\\index.js')
  });
});  

// describe('recorrerCarpeta', () => {
//   it('Debería ser una función', () => {
//     expect(typeof recorrerCarpeta).toBe('function');
//   });
// });
// describe('archivoEsMd', () => {
//   it('Debería ser una función', () => {
//     expect(typeof archivoEsMd).toBe('function');
//   });
// });

  