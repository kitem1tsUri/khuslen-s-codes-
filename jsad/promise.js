let willIGetNewPhone = new Promise((resolve, reject) => { 
    setTimeout(() => { 
        let isMomhappy = Math.round(Math.random()); 
        if  (isMomhappy) { 
            let phone = { 
                brand: "iPHone 14",
                color: "purple",
            
            }; 
            resolve(phone);
        } else { 
            let reason = new Error ("mom is not happy");
            reject(reason); 
        }
    } , 2000)
})

let askMom = () => { 
    return willIGetNewPhone
    .then((resolve) => {        
        console.log(resolve); 

    })
    .catch((reject) => { 
        console.log(reject)
    })
}