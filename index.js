const path = require('node:path');
const fs = require('node:fs'); 
const access = requiere('node:fs/promises');

// fs.readdir('./');
// console.log(files);
//fn para saber si es una ruta
const doesPathExist = () => {
  fsPromises.access()
}

// fn para saber si la ruta es absoluta
const isAbsolute = (route) => {
  return path.isAbsolute(route)
};
isAbsolute ('./files/prueba.txt');

//fn para convertir las rutas relativas en absolutas

//fn para saber si una ruta es MD

//fn para leer contenido del archivo MD
const getContent = (path) =>{
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 
};
getContent ('./files/prueba2.md');
// module.exports = () => {


// };