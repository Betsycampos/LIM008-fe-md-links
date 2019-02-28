import {rutaEsAbsoluta, transformarAabsoluta, rutaEsArchivo, recorrerCarpeta, archivoEsMd} from '../SRC/md-links/UTILS/path.js'
describe('rutaEsAbsoluta', () => {
    it('Debería ser una función', () => {
      expect(typeof rutaEsAbsoluta).toBe('function');
    });
    it('Debería retornar true si la ruta es absoluta', () => {
      expect(rutaEsAbsoluta('C:/foo/..')).toBe(true);
    })
  });

describe('transformarAabsoluta', () => {
  it('Debería ser una función', () => {
    expect(typeof transformarAabsoluta).toBe('function');
  });
  it('Debería retornar la ruta transformada en absoluta', () => {
    expect(transformarAabsoluta('./SRC/md-links/index.js')).toBe('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\SRC\\md-links\\index.js')
  });
});  
describe('rutaEsArchivo', () => {
  it('Debería ser una función', () => {
    expect(typeof rutaEsArchivo).toBe('function');
  });
});
describe('recorrerCarpeta', () => {
  it('Debería ser una función', () => {
    expect(typeof recorrerCarpeta).toBe('function');
  });
});
describe('archivoEsMd', () => {
  it('Debería ser una función', () => {
    expect(typeof archivoEsMd).toBe('function');
  });
});

  