const functionsAux = require('../auxi.js')

describe('test si función existe', () => {
it('si ruta existe da "true" ', () => {
    expect(functionsAux.doesPathExist('./files/prueba2.md')).toEqual(true)
});
it('si ruta no existe da "false" ', () => {
    expect(functionsAux.doesPathExist('./files/prueba.md')).toEqual(false)
});
});

describe('es una ruta absoluta', () => {
it('retorna la ruta si esta es absoluta', () => {
expect(functionsAux.absOrRel('C:\\Users\\Laboratoria\\Desktop\\Laboratoria\\DEV003-md-links\\files\\prueba2.md')).toEqual('C:\\Users\\Laboratoria\\Desktop\\Laboratoria\\DEV003-md-links\\files\\prueba2.md')
});
it('retorna una ruta absoluta, aunque te pase una relativa', () => {
    expect(functionsAux.absOrRel('files\\prueba2.md')).toEqual('C:\\Users\\Laboratoria\\Desktop\\Laboratoria\\DEV003-md-links\\files\\prueba2.md')
});
});
