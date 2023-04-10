const path = require('node:path');
const fs = require('node:fs'); 

// fs.readdir('./');
// console.log(files);

//fn para saber si es una ruta
const doesPathExist = (path) => {
fs.access(path, fs.constants.F_OK, (err) => {
  // console.log('\n> Checking if the file exists');
 
  if (err) {
    return false
    // console.error('File does not exist');
  }
  else {
    return true
    // console.log('File does exist');   
  }
});
}
doesPathExist ('./files/prueba2.md');


// fn para saber si la ruta es absoluta
const isAbsolute = (route) => {
  return path.isAbsolute(route)
};
// isAbsolute ('./files/prueba.txt');

//fn para convertir las rutas relativas en absolutas
const turnToAbsolute = (route) => {
  return path.resolve(route)
};
// console.log(turnToAbsolute('./files/prueba.txt'));

//fn para saber si una ruta es MD
const isItMd = (route) => {
  if(path.extname(route) === '.md'){
    return true
    // console.log(route)
  }else{
    return false
    // console.log('this is not an .md file')
  }
}
isItMd ('./files/prueba.txt');

//fn para leer contenido del archivo MD
const getContent = (path) => {
  return new Promise ((resolve, reject) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error){ reject (error)}
    // console.log(data);
    resolve(data)
  }); 
});
}
getContent ('./files/prueba2.md').then((result) => {
  console.log(result)
}).catch((error) =>{
  console.log(error)
});

//fn para saber si el archivo tiene links, todo lo que tenga formato http lo guardo --> Readme 
//pide href, txt, file
const containLinks = (fileContent, filePath) => {
  let regExp = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
  let url = /\(([^)]+)\)/;
  let brackets = /\[(.*?)\]/;
  let linkData = Array.from(fileContent.match(regExp), (links) => {
    return{
      href: links.match(url)[1],
      text: links.match(brackets)[1],
      file: filePath,
    }
  })
console.log(linkData)
}
getContent('./files/prueba2.md').then((result) => {
  containLinks(result, './files/prueba2.md')
});

//fn para extraer links

//validar ruta

module.exports = {
    doesPathExist,
    isAbsolute,
    turnToAbsolute,
    isItMd,
    getContent,
    containLinks
};



