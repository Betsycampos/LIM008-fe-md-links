const fetch = require('node-fetch');

export const validateLinks = (arrObjt) => {
    const arrayPromesas = arrObjt.map(links => new Promise((resolve) => {
        return fetch(links.href)
        .then(response => {
            if(response.status >= 200 && response.status < 400){
                            links.code = response.status;
                            links.statusText = 'OK'
                            resolve(links)
                        }else {
                            links.code = response.status;
                            links.statusText = 'FAIL'
                            resolve(links)
                        }     
        }).catch(err => {
            links.code = 'No es una URL válida';
            links.statusText = 'FAIL'
            resolve(links)
        })
    }))
    return Promise.all(arrayPromesas);
};