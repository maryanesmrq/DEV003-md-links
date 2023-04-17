const {mdLinks} = require('./index');
//fn para obtener el valor del path
const path = process.argv[2]
const validate = process.argv.includes('--validate')||process.argv.includes('--v');
const stats = process.argv.includes('--stats')||process.argv.includes('--s');
//fn para obtener el valor de options
const options = {validate, stats};


//fn para total links
const totalLinks = (link) =>{
    const total = link.length;
    return total;
};

//fn para unique links
const uniqueLinks = (link) =>{
    const href = link.map(links => links.href);
    const uniqueHrefs = new Set(href);
    return uniqueHrefs.size;
};

//fn para broken links
const brokenLinks = (link) =>{
    const failMessage = link.filter(links => links.ok === 'fail');
    const uniqueFails = new Set(failMessage);
    return uniqueFails.size;
};

mdLinks(path, options).then(result => {
    if(stats && validate){
        console.log('Total links:', totalLinks(result))
        console.log('Unique links:', uniqueLinks(result))
        console.log('Broken links:', brokenLinks(result))
    }else if(validate){
       result.forEach(links =>{
        console.log('href:', links.href)
        console.log('text:', links.text)
        console.log('file:', links.file)
        console.log('status:', links.status)
        console.log('ok:', links.ok)
       })
    }else if(stats){
        console.log('total',totalLinks(result))
        console.log('Unique',uniqueLinks(result))
    }else{
        result.forEach(links =>{
        console.log('href', links.href)
        console.log('text', links.text)
        console.log('file', links.file)
        })  
    }
}).catch((error) => {
    console.log(error)
});
