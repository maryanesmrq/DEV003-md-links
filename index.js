const {doesPathExist, absOrRel, isItMd, getContent, containLinks, validateLinks} = require('./auxi.js') 

const mdLinks = (path,options) => {
    return new Promise((resolve, reject) => {
        if(!doesPathExist(path)){
            reject('Path doesnt exist, please enter a valid path')
            return 
        }
        let pathAbs = absOrRel(path)
        if(!isItMd(pathAbs)){
            reject('This is not a .md file')
            return
        }
        getContent(pathAbs).then((result) => {
            console.log('im getContent')
            const links = containLinks(result, '.files/prueba2.md')
            if(!options.validate){
                resolve(links)
            }else{
                resolve(validateLinks(links))
            }
        }).catch((error) =>{
            reject(error, 'this is an error')
        })


    });
};

mdLinks('./files/prueba2.md', {validate: true}).then(console.log).catch(console.log)

