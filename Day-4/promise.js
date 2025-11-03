// const getData = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Data received"), 5000)
// })
// getData.then(msg => console.log(msg));

const { error } = require("console");
const { resolve } = require("path");

const myPromise = new Promise((resolve, reject) => {
    let sucess = true;

    if(sucess){
        resolve("Process is sucessfull");
    }
    else{
        reject("Process is rejected");
    }
})

myPromise.then(result => console.log(result));
myPromise.catch(result => console.error(error));