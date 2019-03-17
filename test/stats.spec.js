import {linksUnique, totalStast, brokenStats} from '../src/md-links/utils/stats.js'
const arrayObject = [ 
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
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
 { href: 'https://nodejs.org/',
 text: 'Node.js',
 file:
  'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' }
];
const arrayObject1 = [
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
 'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' },
{ href: 'https://nodejs.org/',
 text: 'Node.js',
 file:
  'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md' }
];
const arrayObject2 = [
{ href: 'https://nodejsorg/',
text: 'Node.js',
file:
'C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\prueba\\readme.md',
code: 'No es una URL válida',
statusText: 'FAIL' }

]
describe('linksUnique', () => {
    it('Debería ser una función', () => {
        expect(typeof linksUnique).toBe('function');
    });
    it('Debería retornar los links únicos de mi array de objetos', () => {
        expect(linksUnique(arrayObject)).toBe(3);
    });
});
describe('totalStats', () => {
    it('Debería ser una función', () => {
        expect(typeof totalStast).toBe('function');
    });
    it('Debería retornar el total de links de mi array de objetos', () => {
        expect(totalStast(arrayObject1)).toBe(4);
    });
});
describe('brokenStats', () => {
    it('Debería ser una función', () => {
        expect(typeof brokenStats).toBe('function');
    });
    it('Debería retornar los links rotos de mi array de objetos', () => {
        expect(brokenStats(arrayObject2)).toBe(1);
    });
});

